import de from "../assets/languages/de.json";
import en from "../assets/languages/en.json";
import es from "../assets/languages/es.json";
import fr from "../assets/languages/fr.json";
import it from "../assets/languages/it.json";
import nl from "../assets/languages/nl.json";

const switchLanguageSet = (ctx, lang) => {
  switch (lang) {
    case "de":
      ctx.translation = de;
      break;
    case "en":
      ctx.translation = en;
      break;
    case "es":
      ctx.translation = es;
      break;
    case "fr":
      ctx.translation = fr;
      break;
    case "it":
      ctx.translation = it;
      break;
    case "nl":
      ctx.translation = nl;
      break;
    default:
      ctx.translation = en;
  }
};

export { switchLanguageSet };
