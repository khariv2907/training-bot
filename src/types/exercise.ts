/**
 * Trait for exercises with sets
 * Examples: Most structured gym exercises
 */
export interface SetsBased {
  sets: number;
}

/**
 * Trait for exercises based on repetitions
 * Examples: Push-ups, Squats, Bench Press
 */
export interface RepsBased {
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
 * Adjustment option for a machine
 * e.g. seat height, roller position, back pad angle, etc.
 */
export interface MachineAdjustment {
  name: string; // e.g. "Seat height", "Roller position"
  description?: string; // optional helper for user, like "Set so knees align with pivot"
}

/**
 * Trait for machine-based exercises
 */
export interface MachineBased {
  adjustments: MachineAdjustment[];
}

/**
 * Trait for exercises with weight/load
 * Examples: Weighted squats, Bench press, Deadlifts
 */
export interface WeightLoad {
  weight: number; // kg
}

/**
 * Trait for exercises that can be performed unilaterally (one side at a time)
 * Examples: Single-leg press, One-arm row, Bulgarian split squat
 */
export interface Bilateral {
  bilateral: boolean; // true = both sides, false = one side at a time
  activeSide?: 'left' | 'right' | 'both'; // which side is being worked
}

export interface ExerciseTraits {
  isSetsBased: boolean;
  isRepsBased: boolean;
  isTimeBased: boolean;
  isDistanceBased: boolean;
  isMachineBased: boolean;
  isWeightLoad: boolean;
  isBilateral: boolean;
}