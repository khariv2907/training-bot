import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Exercise } from "./Exercise";
import { ExerciseGroupTranslation } from "./ExerciseGroupTranslation";

@Entity("exercise_groups")
export class ExerciseGroup {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "boolean", default: true })
  active!: boolean;

  @OneToMany(() => Exercise, (exercise) => exercise.group)
  exercises!: Exercise[];

  @OneToMany(() => ExerciseGroupTranslation, (translation) => translation.exerciseGroup, { cascade: true })
  translations!: ExerciseGroupTranslation[];
}
