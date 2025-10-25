import { BotContext } from "Src/types/context";
import { Command } from "Src/enums/Command";
import { CommandContract } from "Src/types/commands";
import { BaseCommand } from "Src/bot/commands/BaseCommand";
// import { TestMenu } from "Src/menus";
import { TestKeyboard } from "Src/bot/keyboards";

/**
 * Class ExercisesCommand
 */
export class ExercisesCommand extends BaseCommand implements CommandContract {
  protected command: Command = Command.EXERCISES;

  protected async handle(ctx: BotContext): Promise<void> {  
    await ctx.reply('Home command works', { reply_markup: TestKeyboard });
  }
}


