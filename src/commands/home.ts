import { Bot } from "grammy";
import { BotContext } from "../types/context";
import { Command } from "../enums/Command";
import { CommandContract } from "../types/commands";

export const homeCommand: CommandContract = {
  register(bot: Bot<BotContext>): void {
    bot.command(Command.HOME, async (ctx) => {
      await ctx.reply('Home command works');
    });
  }
};


