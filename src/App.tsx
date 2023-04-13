import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useTranslation } from "react-i18next"
import './App.css'
import { LanguageSwitcher } from './components/LanguageSwitcher'

function App() {

  const { t } = useTranslation();

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <LanguageSwitcher />
        <h1>{t("welcomeToTheBest")}</h1>
        <h2>{t("whereYouCan")}</h2>
      </header>
    </div>
  );
}

export default App
