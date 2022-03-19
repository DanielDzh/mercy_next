import en from "./en.json";
import ru from "./ru.json";
import ua from "./ua.json";

export const messages = { ru, ua, en };

export const DEFAULT_LOCALE = "ua";

export function intlMessages(locale) {
  return messages[locale] || messages[DEFAULT_LOCALE] || "<no value>";
}
