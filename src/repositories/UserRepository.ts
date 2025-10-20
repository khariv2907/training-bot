import { AppDataSource } from "Src/data-source";
import { User } from "Src/entities/User";
import { UserDto } from "Src/dto/UserDto";

export const UserRepository = AppDataSource.getRepository(User);

/**
 * Service for managing user data operations
 */
export class UserRepoService {
  /**
   * Creates a new user with telegram ID and username
   */
  static async createUser(dto: UserDto): Promise<User> {
    const user = UserRepository.create(dto.toCreateObject());
    return await UserRepository.save(user);
  }

  /**
   * Finds a user by their telegram ID
   */
  static async findByTelegramId(telegramId: string) {
    return await UserRepository.findOneBy({ telegramId });
  }

  /**
   * Retrieves all users from the database
   */
  static async getAllUsers() {
    return await UserRepository.find();
  }

  /**
   * Checks if a user exists by telegram ID
   */
  static async existByTelegramId(telegramId: string): Promise<boolean> {
    return await UserRepository.existsBy({ telegramId });
  }

  /**
   * Update user information
   */
  static async updateUser(id: number, dto: UserDto): Promise<User> {
    const user = await UserRepository.findOneBy({ id });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    Object.assign(user, dto.toUpdateObject());

    return await UserRepository.save(user);
  }
}
