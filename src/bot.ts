import { Bot, GrammyError, HttpError } from "grammy";
import { I18n } from "@grammyjs/i18n";
import config from "config";
import { BotContext } from "Src/types/context";
import { registerCommands } from "Src/commandsBootstrap";

if (!process.env.TELEGRAM_API_KEY) {
  throw new Error("The Telegram API token is not set.");
}

export const bot = new Bot<BotContext>(process.env.TELEGRAM_API_KEY);

const i18n = new I18n<BotContext>({
	defaultLocale: config.get('locales.defaultLocale')
});

await i18n.loadLocalesDir(config.get('locales.directory'));

bot.use(i18n.middleware());

await registerCommands(bot, i18n);

const defaultCommands = await bot.api.getMyCommands();
const ukCommands = await bot.api.getMyCommands({ language_code: 'uk' });

console.log("Default:", defaultCommands);
console.log("Ukrainian:", ukCommands);

// Handle errors
bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;

  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error:", e);
  }
});
