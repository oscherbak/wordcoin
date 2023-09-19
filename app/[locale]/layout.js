import {NextIntlClientProvider, useLocale, useMessages, useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';
import Navigation from "../components/navigation/navigation";
import '../globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './layout.module.scss';

const getMessages = async (locale) => {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return messages;
}

export default async function LocaleLayout({ children, params }) {
  const locale = useLocale();
  const messages = await getMessages(locale);

  if (params.locale !== locale) {
    notFound();
  }

  return (
      <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages} locale={locale} >
            <header className={styles.header}>
                <Navigation />
            </header>
            <div className={styles.main}>
                {children}
            </div>
        </NextIntlClientProvider>
        <footer className={styles.footer}>
            <span className={styles.disclaimer}>{messages.Footer?.highlight}</span>: {messages.Footer?.text}
        </footer>
        </body>
      </html>
  );
}
