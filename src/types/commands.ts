import { Bot } from "grammy";
import { BotContext } from "./context";

export interface CommandContract {
  register(bot: Bot<BotContext>): void;
}


