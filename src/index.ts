import "reflect-metadata";
import "dotenv/config";
import { initDatabase } from "Src/data-source";
import { bot } from "Src/bot";
import { bootstrap } from "Bot/bootstrap";

(async () => {
  await initDatabase();
  await bootstrap();

  try {
    bot.start();
    console.log("🤖 Bot started");
  } catch (error) {
    console.error("❌ Failed to start bot:", error);
  }
})();
