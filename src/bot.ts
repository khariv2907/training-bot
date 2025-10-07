import { Bot, Keyboard, GrammyError, HttpError } from "grammy";

if (!process.env.TELEGRAM_API_KEY) {
  throw new Error("The Telegram API token is not set.");
}

export const bot = new Bot(process.env.TELEGRAM_API_KEY);

const mainMenu = new Keyboard()
  .text("Знайти квартиру 🔍").text("Підписка 🔒").row()
  .text("Збережені 🔒").text("Інструкція 💡").row()
  .text("Заробляй разом з Findly 💰").row()
  .text("Підтримка 💬").text("Відгуки ✉️")
  .resized();

// Команда /start
bot.command("start", async (ctx) => {
  await ctx.reply("Головне меню", { reply_markup: mainMenu });
});

// Обробка будь-якого повідомлення
bot.on("message", async (ctx) => {
  console.log(ctx.message);
  await ctx.reply(ctx.message.text || "");
});

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
