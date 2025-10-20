import { ExerciseTraits } from "Src/types/exercise";

/**
 * DTO for user exercise operations
 */
export class UserExerciseDto {
  userId?: number;
  name?: string;
  description?: string;
  traits?: ExerciseTraits;

  constructor(
    userId?: number,
    name?: string,
    description?: string,
    traits?: ExerciseTraits
  ) {
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.traits = traits;
  }

  /**
   * Convert DTO to object for entity creation
   */
  toCreateObject() {
    return {
      userId: this.userId!,
      name: this.name!,
      description: this.description,
      traits: this.traits ?? null,
    };
  }

  /**
   * Convert DTO to object for entity update
   */
  toUpdateObject() {
    const updateObj: Partial<{
      name: string;
      description: string;
      traits: ExerciseTraits | null;
    }> = {};

    if (this.name !== undefined) {
      updateObj.name = this.name;
    }
    if (this.description !== undefined) {
      updateObj.description = this.description;
    }
    if (this.traits !== undefined) {
      updateObj.traits = this.traits;
    }

    return updateObj;
  }
}
