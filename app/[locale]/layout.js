import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import Navigation from "./components/navigation";
import { NextIntlClientProvider } from 'next-intl';
import 'bootstrap/dist/css/bootstrap.css';

export default function LocaleLayout({children, params}) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
      <html lang={locale}>
        <body>
        <header>
            <Navigation locale={locale} />
        </header>
        {children}
        <footer>
            this is footer
        </footer>
        </body>
      </html>
  );
}
