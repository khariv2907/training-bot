import { I18n } from "@grammyjs/i18n";
import { BotContext } from "./types/context";

export const i18n = new I18n<BotContext>({
	defaultLocale: "en",
	directory: "locales"
});


