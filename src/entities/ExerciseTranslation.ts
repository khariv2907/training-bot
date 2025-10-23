import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Relation } from "typeorm";
import { Exercise } from "Src/entities";

@Entity("exercise_translations")
export class ExerciseTranslation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "exercise_id", type: "int", nullable: false })
  exerciseId!: number;

  @Column({ type: "varchar", length: 10, nullable: false })
  language!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @ManyToOne(() => Exercise, (exercise) => exercise.translations, { onDelete: "CASCADE" })
  @JoinColumn({ name: "exercise_id" })
  exercise!: Relation<Exercise>;
}
