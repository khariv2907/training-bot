import { Bot } from "grammy";
import { BotContext } from "Src/types/context";
import { Command } from "Src/enums/Command";
import { CommandContract } from "Src/types/commands";

export class HomeCommand implements CommandContract {
  public register(bot: Bot<BotContext>): void {
    bot.command(Command.HOME, async (ctx: BotContext) => {
      await ctx.reply('Home command works');
    });
  }
}


