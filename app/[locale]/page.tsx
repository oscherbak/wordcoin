import {useLocale, useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  const locale = useLocale();

  return <h1>{t('title')}</h1>;
}
