import { I18n } from "@grammyjs/i18n";
import config from "config";
import { BotContext } from "Src/types/context";

/**
 * Class I18nSingleton
 */
class I18nSingleton {
  private static instance: I18n<BotContext>;

  /**
   * Returns the I18n instance
   */
  static async getInstance(): Promise<I18n<BotContext>> {
    if (!this.instance) {
      const i18n = new I18n<BotContext>({
        defaultLocale: config.get("locales.defaultLocale"),
      });
      await i18n.loadLocalesDir(config.get("locales.directory"));
      this.instance = i18n;
    }
    return this.instance;
  }
}

export const i18n = await I18nSingleton.getInstance();
