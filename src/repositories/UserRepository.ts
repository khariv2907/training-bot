import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export const UserRepository = AppDataSource.getRepository(User);

export class UserRepoService {
  static async createUser(telegramId: string, username?: string) {
    const user = UserRepository.create({ telegramId, username });
    return await UserRepository.save(user);
  }

  static async findByTelegramId(telegramId: string) {
    return await UserRepository.findOneBy({ telegramId });
  }

  static async getAllUsers() {
    return await UserRepository.find();
  }
}
