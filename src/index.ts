import "reflect-metadata";
import "dotenv/config";
import { initDatabase } from "Src/data-source";
import { bot } from "Src/bot";

async function bootstrap() {
  await initDatabase();

  try {
    bot.start();
    console.log("🤖 Bot started");
  } catch (error) {
    console.error("❌ Failed to start bot:", error);
  }
}

bootstrap();
