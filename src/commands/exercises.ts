import { BotContext } from "Src/types/context";
import { Command } from "Src/enums/Command";
import { CommandContract } from "Src/types/commands";
import { BaseCommand } from "Src/commands/command";

/**
 * Class ExercisesCommand
 */
export class ExercisesCommand extends BaseCommand implements CommandContract {
  protected command: Command = Command.EXERCISES;

  protected async handle(ctx: BotContext): Promise<void> {
    await ctx.reply('Home command works');
  }
}


