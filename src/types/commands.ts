/* eslint-disable no-unused-vars */
import { CommandGroup } from "@grammyjs/commands";
import { BotContext } from "Src/types/context";

/**
 * Interface CommandContract
 */
export interface CommandContract {
  /**
   * Boot the command
   */
  register(commandGroup: CommandGroup<BotContext>): void;
}


