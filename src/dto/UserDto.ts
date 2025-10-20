import { BotContext } from "Src/types/context";

/**
 * DTO for user operations
 */
export class UserDto {
  telegramId?: string;
  username?: string;

  /**
   * UserDto constructor
   *
   * @param telegramId - Telegram ID
   * @param username - Telegram username
   */
  constructor(telegramId?: string, username?: string) {
    this.telegramId = telegramId;
    this.username = username;
  }

  /**
   * Create am instance from BotContext
   */
  public static fromCtx(ctx: BotContext): UserDto {
    const telegramId = String(ctx.from.id);
    const username = ctx.from.username;

    return new UserDto(telegramId, username);
  }

  /**
   * Convert DTO to object for entity creation
   */
  toCreateObject() {
    return {
      telegramId: this.telegramId!,
      username: this.username,
    };
  }

  /**
   * Convert DTO to object for entity update
   */
  toUpdateObject() {
    const updateObj: Partial<{
      username: string;
    }> = {};

    if (this.username !== undefined) {
      updateObj.username = this.username;
    }

    return updateObj;
  }
}
