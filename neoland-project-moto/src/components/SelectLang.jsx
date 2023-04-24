import { useContext } from "react";
import { langContext } from "../context/LanguageContext";

const SelectLang = () => {
  const { handleLanguage } = useContext(langContext);
  return (
    <select onChange={handleLanguage}>
      <option value="es-ES">
        <img
          src="https://img2.freepng.es/20180406/qjq/kisspng-flag-of-spain-guess-emoji-spain-5ac7c255c063c2.9498509315230408537881.jpg"
          alt="Spain"
        />
      </option>
      <option value="fr-FR">French</option>
      <option value="en-US">English</option>
    </select>
  );
};

export default SelectLang;
