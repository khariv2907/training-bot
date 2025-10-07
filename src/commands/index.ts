import { Bot } from "grammy";
import { BotContext } from "../types/context";
import { Command } from "../enums/Command";
import startCommand from "./start";
import { i18n } from "../i18n";

type SupportedLocale = "en" | "uk";
  type LocaleConfig = {
    locale: SupportedLocale;
    options: { language_code?: SupportedLocale };
  };

export function registerCommands(bot: Bot<BotContext>): void {
  startCommand.register(bot);
}

export function registerBotCommands(bot: Bot<BotContext>): void {
  const locales: readonly LocaleConfig[] = [
    { locale: "en", options: {} },
    { locale: "uk", options: { language_code: "uk" } }
  ];

  for (const { locale, options } of locales) {
    const commands = [
      { command: Command.START, description: i18n.t(locale, "commands.start") }
    ];

    bot.api.setMyCommands(commands, options);
  }
}


