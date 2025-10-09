import { Bot } from "grammy";
import { BotContext } from "./types/context";
import { Command } from "./enums/Command";
import { StartCommand, HomeCommand } from "./commands";
import { CommandContract } from "./types/commands";
import { I18n } from "@grammyjs/i18n";
import config from "config";
import { LanguageCode } from "grammy/types";

/**
 * Commands to register
 */
const COMMANDS = [
    Command.START,
    Command.HOME
];

/**
 * Array of command class instances
 */
const commandImplementations: CommandContract[] = [
  new StartCommand(),
  new HomeCommand()
];

/**
 * Register commands
 *
 * @param bot - Bot instance
 */
export function bootCommands(bot: Bot<BotContext>): void {
  for (const command of commandImplementations) {
    command.register(bot);
  }
}

/**
 * Register bot commands
 *
 * @param bot - Bot instance
 * @param i18n - I18n instance
 */
export async function bootBotCommands(bot: Bot<BotContext>, i18n: I18n<BotContext>): Promise<void> {
  const supportedLocales = config.get<string[]>("locales.supportedLocales");
  const defaultLocale = config.get<string>("locales.defaultLocale");

  // Register commands for each locale
  for (const locale of supportedLocales) {
    const isDefaultLocale = locale === defaultLocale;

    const commands = COMMANDS.map((command) => ({
      command: command,
      description: i18n.fluent.translate(locale, `commands-${command}`),
    }));
    console.log('----set', {
      commands,
      options: isDefaultLocale ? {} : { language_code: locale as LanguageCode }
    });

    await bot.api.setMyCommands(
      commands,
      isDefaultLocale ? {} : { language_code: locale as LanguageCode }
    );
  }
}

/**
 * Boot the bot
 * @param bot - Bot instance
 * @param i18n - I18n instance
 */
export async function registerCommands(bot: Bot<BotContext>, i18n: I18n<BotContext>): Promise<void> {
    await bootBotCommands(bot, i18n);
    bootCommands(bot);
}
