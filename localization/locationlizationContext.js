import { useState, useEffect, createContext } from "react";
import { useRouter } from 'next/router'

// create context
const LocalizationContext = createContext({});

// context provider
const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 
  const {locale} = useRouter()

  // handle changing route locale and updating the state
  useEffect(()=>{
    setLanguage(locale)
  },[locale])

  return <LocalizationContext.Provider value={{language,setLanguage}}>{children}</LocalizationContext.Provider>;
};

export { LocalizationContext, LocalizationProvider };