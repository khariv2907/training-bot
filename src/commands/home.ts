import { BotContext } from "Src/types/context";
import { Command } from "Src/enums/Command";
import { CommandContract } from "Src/types/commands";
import { BaseCommand } from "Src/commands/command";

/**
 * Class HomeCommand
 */
export class HomeCommand extends BaseCommand implements CommandContract {
  protected command: Command = Command.HOME;

  protected async handle(ctx: BotContext): Promise<void> {
    await ctx.reply('Home command works');
  }
}


