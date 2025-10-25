import { StartCommand } from "Src/bot/commands/public/Start";
import { HomeCommand } from "Src/bot/commands/public/Home";
import { ExercisesCommand } from "Src/bot/commands/public/Exercises";
import { BaseCommandGroup } from 'Src/bot/commands/BaseCommandGroup';
import { CommandContract } from 'Src/types/commands';

/**
 * Class PublicCommandsGroup
 */
export class PublicCommandsGroup extends BaseCommandGroup {
  /**
   * Commands
   */
  protected commands(): CommandContract[] {
    return [
      new StartCommand(),
      new HomeCommand(),
      new ExercisesCommand(),
    ];
  }
}
