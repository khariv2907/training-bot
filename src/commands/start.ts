import { Bot } from "grammy";
import { BotContext } from "../types/context";
import { Command } from "../enums/Command";
import { CommandContract } from "../types/commands";
import { UserRepoService } from "../repositories/UserRepository";

export class StartCommand implements CommandContract {
  public register(bot: Bot<BotContext>): void {
    bot.command(Command.START, async (ctx: BotContext) => {
      const userExists = await this.userExists(ctx);
      const name = ctx.from?.first_name || ctx.from?.username || 'user';

      if (!ctx.from?.id) {
        throw Error('The telegram ID is missed');
      };

      if (!ctx.from?.username) {
        throw Error('The username is missed');
      };

      if (userExists) {
        await ctx.reply(ctx.t('start-exists', { name }));
      } else {
        const telegramId = String(ctx.from.id);
        const username = ctx.from.username;

        await UserRepoService.createUser(telegramId,  username);
        await ctx.reply(ctx.t('start-created', { name }));
      }
    });
  }

  private async userExists(ctx: BotContext): Promise<boolean> {
    return UserRepoService.existByTelegramId(String(ctx.from.id));
  }
}


