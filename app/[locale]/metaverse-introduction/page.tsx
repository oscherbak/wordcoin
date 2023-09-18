import {useLocale, useTranslations} from "next-intl";

const About = () => {
    const locale = useLocale();
    const t = useTranslations('About');

    return <div>
        {t('title')}
    </div>
}

export default About;
