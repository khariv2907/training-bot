import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from "typeorm";
import { Exercise, ExerciseGroupTranslation } from "Src/entities";

@Entity("exercise_groups")
export class ExerciseGroup {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "boolean", default: true })
  active!: boolean;

  @OneToMany(() => Exercise, (exercise) => exercise.group)
  exercises!: Relation<Exercise>[];

  @OneToMany(() => ExerciseGroupTranslation, (translation: any) => translation.exerciseGroup, { cascade: true })
  translations!: Relation<ExerciseGroupTranslation>[];
}
