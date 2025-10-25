import { AdminCommand } from "Src/bot/commands/admin/Admin";
import { BaseCommandGroup } from 'Src/bot/commands/BaseCommandGroup';
import { CommandContract } from 'Src/types/commands';

/**
 * Class AdminCommandsGroup
 */
export class AdminCommandsGroup extends BaseCommandGroup {
  /**
   * Commands
   */
  protected commands(): CommandContract[] {
    return [
      new AdminCommand(),
    ];
  }
}
