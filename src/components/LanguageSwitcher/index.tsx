import { useTranslation } from "react-i18next"
import i18n from "../../i18n";
import br from "./assets/br.svg"
import us from "./assets/us.svg"
import es from "./assets/es.svg"
import './style.css'

const languageOptions = [
{
    name: "Português",
    value: "pt",
    flag: br
},
{
    name: "ingles",
    value: "en",
    flag: us
},
{
    name: "espanhou",
    value: "es",
    flag: es
},
]

export const LanguageSwitcher = () => {
    const { t } = useTranslation();
    return (<div className="language-switcher">
        <span>{t('selectYourLanguage')}</span>

        {languageOptions.map(languageOptions => (
            <button 
            key={languageOptions.value}
            onClick={() => {
                i18n.changeLanguage(languageOptions.value)
            }}>
               <img src={languageOptions.flag} alt={languageOptions.name}/>
                <span>{languageOptions.name}</span>
            </button>
        ))}
    </div>)
}