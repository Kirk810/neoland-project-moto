import { useContext } from "react";
import { langContext } from "../context/LanguageContext";

const SelectLang = () => {
  const { handleLanguage } = useContext(langContext);
  return (
    <select onChange={handleLanguage}>
      <option value="es-ES">Spanish</option>
      <option value="fr-FR">French</option>
      <option value="en-US">English</option>
    </select>
  );
};

export default SelectLang;