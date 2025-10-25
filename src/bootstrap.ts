import config from "config";
import { Bot } from "grammy";
import { BotContext } from "Src/types/context";
import { StartCommand, HomeCommand, ExercisesCommand } from "Src/commands";
import { I18n } from "@grammyjs/i18n";
import { CommandGroup } from "@grammyjs/commands";

/**
 * Boot the I18n
 *
 * @param bot - Bot instance
 */
export async function bootI18n(bot: Bot<BotContext>): Promise<I18n> {
  const i18n = new I18n<BotContext>({
    defaultLocale: config.get('locales.defaultLocale')
  });
  
  await i18n.loadLocalesDir(config.get('locales.directory'));
  
  bot.use(i18n.middleware());

  return i18n;
}

/**
 * Boot the commands
 *
 * @param bot - Bot instance
 * @param i18n - I18n instance
 */
export async function bootCommands(bot: Bot<BotContext>, i18n: I18n<BotContext>): Promise<void> {
  const commandGroup = new CommandGroup();

  new StartCommand(commandGroup, i18n).boot();
  new HomeCommand(commandGroup, i18n).boot();
  new ExercisesCommand(commandGroup, i18n).boot();

  // Initialize commands
  await commandGroup.setCommands(bot);
  bot.use(commandGroup);
}
