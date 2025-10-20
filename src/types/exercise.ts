/**
 * Translation for an exercise
 */
export interface ExerciseTranslationData {
  language: string;
  name: string;
  description?: string;
}

/**
 * Base exercise interface with core properties
 */
export interface BaseExercise {
  id: number;
  groupId?: number;
  translations: ExerciseTranslationData[];
}

/**
 * Trait for exercises based on repetitions and sets
 * Examples: Push-ups, Squats, Bench Press
 */
export interface RepsSetsBased {
  sets: number;
  reps: number;
}

/**
 * Trait for time-based exercises
 * Examples: Plank, Running (timed), Cycling
 */
export interface TimeBased {
  duration: number; // seconds
}

/**
 * Trait for distance-based exercises
 * Examples: Running, Swimming, Cycling
 */
export interface DistanceBased {
  distance: number; // meters
}

/**
 * Trait for exercises requiring equipment
 * Examples: Dumbbell exercises, Machine exercises, Barbell exercises
 */
export interface EquipmentBased {
  equipment: string; // e.g. 'dumbbell', 'barbell', 'machine', 'none'
  adjustableHeight?: boolean;
  dependsOnBodyHeight?: boolean;
  requiresWeight?: boolean;
}

/**
 * Trait for exercises with weight/load
 * Examples: Weighted squats, Bench press, Deadlifts
 */
export interface WeightLoad {
  weight: number; // kg
}

/**
 * Container for all exercise traits stored in JSON column
 */
export interface ExerciseTraits {
  repsSetsBased?: RepsSetsBased;
  timeBased?: TimeBased;
  distanceBased?: DistanceBased;
  equipmentBased?: EquipmentBased;
  weightLoad?: WeightLoad;
}

/**
 * Common exercise type combinations
 */

// Bodyweight exercises: Plank, Hold positions
export type TimedBodyweightExercise = BaseExercise & {
  traits: Pick<ExerciseTraits, 'timeBased'>;
};

// Standard gym exercises: Push-ups, Sit-ups
export type RepsBasedExercise = BaseExercise & {
  traits: Pick<ExerciseTraits, 'repsSetsBased'>;
};

// Weighted gym exercises: Barbell Squat, Bench Press
export type WeightedRepsExercise = BaseExercise & {
  traits: Pick<ExerciseTraits, 'repsSetsBased' | 'weightLoad' | 'equipmentBased'>;
};

// Cardio exercises: Running, Swimming
export type CardioExercise = BaseExercise & {
  traits: Pick<ExerciseTraits, 'timeBased' | 'distanceBased'>;
};

/**
 * Type guard to check if traits contain reps/sets
 */
export function hasRepsSetsTrait(traits: ExerciseTraits | null): traits is Required<Pick<ExerciseTraits, 'repsSetsBased'>> & ExerciseTraits {
  return traits !== null && traits.repsSetsBased !== undefined;
}

/**
 * Type guard to check if traits contain time-based data
 */
export function hasTimeTrait(traits: ExerciseTraits | null): traits is Required<Pick<ExerciseTraits, 'timeBased'>> & ExerciseTraits {
  return traits !== null && traits.timeBased !== undefined;
}

/**
 * Type guard to check if traits contain distance data
 */
export function hasDistanceTrait(traits: ExerciseTraits | null): traits is Required<Pick<ExerciseTraits, 'distanceBased'>> & ExerciseTraits {
  return traits !== null && traits.distanceBased !== undefined;
}

/**
 * Type guard to check if traits contain equipment data
 */
export function hasEquipmentTrait(traits: ExerciseTraits | null): traits is Required<Pick<ExerciseTraits, 'equipmentBased'>> & ExerciseTraits {
  return traits !== null && traits.equipmentBased !== undefined;
}

/**
 * Type guard to check if traits contain weight data
 */
export function hasWeightTrait(traits: ExerciseTraits | null): traits is Required<Pick<ExerciseTraits, 'weightLoad'>> & ExerciseTraits {
  return traits !== null && traits.weightLoad !== undefined;
}
