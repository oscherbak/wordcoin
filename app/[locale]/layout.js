import {NextIntlClientProvider, useLocale, useMessages, useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';
import Navigation from "../components/navigation/navigation";
import '../globals.css';
import styles from './layout.module.scss';

const getMessages = async (locale) => {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return messages;
}

const LocaleLayout = async ({ children, params }) => {
  const locale = useLocale();
  const messages = await getMessages(locale);

  if (params.locale !== locale) {
    notFound();
  }

  return (
      <html lang={locale}>
        <body>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            {/*<link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />*/}
            <NextIntlClientProvider messages={messages} locale={locale} >
                <header className={styles.header}>
                    <Navigation />
                </header>
                <div className={styles.main}>
                    {children}
                </div>
            </NextIntlClientProvider>
            <footer className={styles.footer}>
                <div className="container" style={{ padding: 15, borderBottom: '1px solid #474545' }}>
                    <span className={styles.disclaimer}>{messages.Footer?.highlight}</span>: {messages.Footer?.text}
                </div>
                <div className="text-center" style={{ fontSize: 12, padding: 15, color: 'grey' }}>{messages.Footer?.copyright}</div>
            </footer>
            <script async src="/script.js"></script>
        </body>
      </html>
  );
}

export default LocaleLayout;
