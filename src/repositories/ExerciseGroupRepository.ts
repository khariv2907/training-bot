import { AppDataSource } from "Src/data-source";
import { ExerciseGroup } from "Src/entities";

export const ExerciseGroupRepository = AppDataSource.getRepository(ExerciseGroup);

/**
 * Class ExerciseGroupRepoService
 */
export class ExerciseGroupRepoService {
  /**
   * Find exercise group by ID
   */
  static async findById(id: number): Promise<ExerciseGroup | null> {
    return await ExerciseGroupRepository.findOneBy({ id });
  }

  /**
   * Get all active exercise groups
   */
  static async findAll(relations: string[] = []): Promise<ExerciseGroup[]> {
    return await ExerciseGroupRepository.find({
      where: { active: true },
      relations
    });
  }

  /**
   * Check if exercise group exists by ID
   */
  static async existsById(id: number): Promise<boolean> {
    return await ExerciseGroupRepository.existsBy({ id });
  }
}
