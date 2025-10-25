import { BotContext } from "Src/types/context";
import { Command } from "Src/enums/Command";
import { CommandContract } from "Src/types/commands";
import { BaseCommand } from "Src/bot/commands/BaseCommand";

/**
 * Class AdminCommand
 */
export class AdminCommand extends BaseCommand implements CommandContract {
  protected command: Command = Command.ADMIN;

  protected async handle(ctx: BotContext): Promise<void> {
    await ctx.reply('111 ADMIN command 1');
  }
}


