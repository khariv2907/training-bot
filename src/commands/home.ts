import { Bot } from "grammy";
import { BotContext } from "../types/context";
import { Command } from "../enums/Command";
import { CommandContract } from "../types/commands";

export class HomeCommand implements CommandContract {
  public register(bot: Bot<BotContext>): void {
    bot.command(Command.HOME, async (ctx: BotContext) => {
      await ctx.reply('Home command works');
    });
  }
}


