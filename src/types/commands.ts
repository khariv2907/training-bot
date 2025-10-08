import { Bot } from "grammy";
import { BotContext } from "./context";

export interface CommandContract {
  // eslint-disable-next-line no-unused-vars
  register(bot: Bot<BotContext>): void;
}


