import { Bot, GrammyError, HttpError } from "grammy";
import { i18n } from "./i18n";
import { BotContext } from "./types/context";
import { registerBotCommands, registerCommands } from "./commands";

if (!process.env.TELEGRAM_API_KEY) {
  throw new Error("The Telegram API token is not set.");
}

export const bot = new Bot<BotContext>(process.env.TELEGRAM_API_KEY);
bot.use(i18n.middleware());

// Commands
registerCommands(bot);
registerBotCommands(bot);

// Обробка помилок
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
