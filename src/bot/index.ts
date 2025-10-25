import { Bot, GrammyError, HttpError } from "grammy";
import { BotContext } from "Src/types/context";

/**
 * Class BotSingleton
 */
class BotSingleton {
    private static instance: Bot<BotContext>;

    /**
     * Retrurns the Bot instance
     */
    static getInstance(): Bot<BotContext> {
        if (!this.instance) {
            if (!process.env.TELEGRAM_API_KEY) {
                throw new Error("TELEGRAM_API_KEY not set");
            }

            this.instance = new Bot<BotContext>(process.env.TELEGRAM_API_KEY);

            // Handle errors
            this.instance.catch((err) => {
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
        }

        return this.instance;
    }
}

export const bot = BotSingleton.getInstance();