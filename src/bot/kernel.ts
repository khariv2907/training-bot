import { Middleware } from "grammy";
import { BotContext } from "Src/types/context";
import { i18n } from "Src/bot/i18n";
import { BotModule } from "Src/types/botModule";
import { bot } from "Src/bot";

/**
 * Class BotKernel
 */
export class BotKernel {
  private handlers: Middleware<BotContext>[] = [];

  /**
   * Add a middleware to bot
   *
   * @param handler - middleware to add 
   */
  add(handler: Middleware<BotContext>) {
    this.handlers.push(handler);
  }

  /**
   * Register bot modules
   *
   * @param modules - modules list
   */
  async bootstrap(modules: BotModule[]) {
    bot.use(i18n.middleware());

    for (const module of modules) {
        await module.register(this);
    }

    for (const handler of this.handlers) {
        bot.use(handler);
    }
  }
}
