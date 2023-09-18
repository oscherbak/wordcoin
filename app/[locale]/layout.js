import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import Navigation from "./components/navigation";
import 'bootstrap/dist/css/bootstrap.css';
import styles from './layout.module.scss';

export default function LocaleLayout({ children, params }) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
      <html lang={locale}>
        <body>
        <header className={styles.header}>
            <Navigation locale={locale} />
        </header>
        <div className={styles.main}>
            {children}
        </div>
        <footer className={styles.footer}>
            <span className={styles.disclaimer}>Disclaimer</span>: Our site offers general info, not professional advice. Cryptocurrency investments are risky and past performance doesn&apos;t predict future outcomes. Research and seek advice before deciding. We might link to third-party content, but accuracy isn&apos;t assured. We&apos;re not responsible for errors or actions based on our info. Laws for cryptocurrencies vary; follow your local rules. Using our site means you accept this disclaimer and its risks. Consult experts for personalized advice. Be cautious with crypto matters.
            Word Coin reserves the right to modify or update this disclaimer at any time without prior notice.
        </footer>
        </body>
      </html>
  );
}
