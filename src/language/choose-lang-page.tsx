import { Link } from "../page/link";
import { langLookup, languages } from "./languages";

export const ChooseLangPage = () => {
  return (
    <div className="page">
      <h1>Choose your language</h1>
      <ul>
        {languages.map(lang => {
          const langMeta = langLookup[lang];
          return (
            <li>
              <h2>{langMeta.learn}</h2>
              <p>Learn {langMeta.learn} as a native {langMeta.as} speaker: <Link target={{lang}}>Click here</Link></p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
