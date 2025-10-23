import { AppDataSource } from "Src/data-source";
import { Exercise } from "Src/entities";

export const ExerciseRepository = AppDataSource.getRepository(Exercise);

/**
 * Class ExerciseRepoService
 */
export class ExerciseRepoService {
  /**
   * Find exercise by ID with translations
   */
  static async findById(id: number, relations: string[] = []): Promise<Exercise | null> {
    return await ExerciseRepository.findOne({
      where: { id },
      relations,
    });
  }

  /**
   * Find active exercises by group ID with translations
   */
  static async findByGroupId(groupId: number, relations: string[] = []): Promise<Exercise[]> {
    return await ExerciseRepository.find({
      where: { groupId, active: true },
      relations,
    });
  }

  /**
   * Get all active exercises with translations
   */
  static async findAll(relations: string[] = []): Promise<Exercise[]> {
    return await ExerciseRepository.find({
      where: { active: true },
      relations
    });
  }

  /**
   * Check if exercise exists by ID
   */
  static async existsById(id: number): Promise<boolean> {
    return await ExerciseRepository.existsBy({ id });
  }
}
