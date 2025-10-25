import { BotContext } from "Src/types/context";
import { Command } from "Src/enums/Command";
import { CommandContract } from "Src/types/commands";
import { UserRepoService } from "Src/repositories/UserRepository";
import { BaseCommand } from "Src/bot/commands/BaseCommand";
import { UserDto } from "Src/dto/UserDto";

/**
 * Class StartCommand
 */
export class StartCommand extends BaseCommand implements CommandContract {
  protected command: Command = Command.START;

  protected async handle(ctx: BotContext): Promise<void> {
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
        await UserRepoService.createUser(UserDto.fromCtx(ctx));
        await ctx.reply(ctx.t('start-created', { name }));
      }
  }

  private async userExists(ctx: BotContext): Promise<boolean> {
    return UserRepoService.existByTelegramId(String(ctx.from.id));
  }
}


