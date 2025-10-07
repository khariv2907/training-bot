import { Bot } from "grammy";
import { BotContext } from "../types/context";
import { Command } from "../enums/Command";
import { CommandContract } from "../types/commands";

const startCommand: CommandContract = {
  register(bot: Bot<BotContext>): void {
    bot.command(Command.START, async (ctx) => {
      const firstName = ctx.from?.first_name || "";
      const title = ctx.t("start.title");
      const greeting = ctx.t("start.greeting", { name: firstName });
      const hint = ctx.t("start.hint");

      await ctx.reply(`${title}\n\n${greeting}\n${hint}`);
    });
  }
};

export default startCommand;


