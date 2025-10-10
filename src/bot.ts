import { Bot, GrammyError, HttpError } from "grammy";
import { BotContext } from "Src/types/context";
import { bootCommands, bootI18n } from "Src/bootstrap";

if (!process.env.TELEGRAM_API_KEY) {
  throw new Error("The Telegram API token is not set.");
}

export const bot = new Bot<BotContext>(process.env.TELEGRAM_API_KEY);

const i18n = await bootI18n(bot);
await bootCommands(bot, i18n);

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
