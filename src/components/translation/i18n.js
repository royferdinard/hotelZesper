import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from '../../components/translation/locale/en/translation.json'
import sw from '../../components/translation/locale/sw/translation.json'
// import fr from '../../components/translation/locale/fr/translation.json'
// import zh from '../../components/translation/locale/zh/translation.json'
// import es from '../../components/translation/locale/es/translation.json'
// import it from '../../components/translation/locale/it/translation.json'
// import de from '../../components/translation/locale/de/translation.json'


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        sw: {
            translation: sw,
        },
        // fr: {
        //     translation: fr,
        // },
        // zh: {
        //     translation: zh,
        // },
        // es: {
        //     translation: es,
        // },
        // it: {
        //     translation: it,
        // },
        // de: {
        //     translation: de,
        // },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;