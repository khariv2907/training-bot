import { AppDataSource } from "Src/data-source";
import { UserExercise } from "Src/entities/UserExercise";
import { UserExerciseDto } from "Src/dto/UserExerciseDto";

export const UserExerciseRepository = AppDataSource.getRepository(UserExercise);

/**
 * Class UserExerciseRepoService
 */
export class UserExerciseRepoService {
  /**
   * Create a new user exercise
   */
  static async create(dto: UserExerciseDto): Promise<UserExercise> {
    const userExercise = UserExerciseRepository.create(dto.toCreateObject());
    return await UserExerciseRepository.save(userExercise);
  }

  /**
   * Find user exercise by ID
   */
  static async findById(id: number, relations: string[] = []): Promise<UserExercise | null> {
    return await UserExerciseRepository.findOne({
      where: { id },
      relations: relations,
    });
  }

  /**
   * Find user exercise by ID or throw error if not found
   */
  static async findByIdOrFail(id: number, relations: string[] = []): Promise<UserExercise> {
    const userExercise = await this.findById(id, relations);
    if (!userExercise) {
      throw new Error(`UserExercise with id ${id} not found`);
    }
    return userExercise;
  }

  /**
   * Find all exercises for a specific user
   */
  static async findByUserId(userId: number): Promise<UserExercise[]> {
    return await UserExerciseRepository.findBy({ userId });
  }

  /**
   * Get all user exercises
   */
  static async findAll(): Promise<UserExercise[]> {
    return await UserExerciseRepository.find();
  }

  /**
   * Update user exercise
   */
  static async update(id: number, dto: UserExerciseDto): Promise<UserExercise> {
    const userExercise = await this.findByIdOrFail(id);

    Object.assign(userExercise, dto.toUpdateObject());

    return await UserExerciseRepository.save(userExercise);
  }

  /**
   * Delete user exercise
   */
  static async delete(id: number): Promise<boolean> {
    const result = await UserExerciseRepository.delete({ id });
    return (result.affected ?? 0) > 0;
  }

  /**
   * Check if user exercise exists by ID
   */
  static async existsById(id: number): Promise<boolean> {
    return await UserExerciseRepository.existsBy({ id });
  }

  /**
   * Count exercises for a specific user
   */
  static async countByUserId(userId: number): Promise<number> {
    return await UserExerciseRepository.countBy({ userId });
  }

  /**
   * Count total user exercises across all users
   */
  static async countAll(): Promise<number> {
    return await UserExerciseRepository.count();
  }
}
