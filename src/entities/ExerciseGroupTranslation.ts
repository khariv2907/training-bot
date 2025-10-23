import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Relation } from "typeorm";
import { ExerciseGroup } from "Src/entities";

@Entity("exercise_group_translations")
export class ExerciseGroupTranslation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "exercise_group_id", type: "int", nullable: false })
  exerciseGroupId!: number;

  @Column({ type: "varchar", length: 10, nullable: false })
  language!: string;

  @Column({ type: "varchar", length: 100, nullable: false })
  name!: string;

  @ManyToOne(() => ExerciseGroup, (group) => group.translations, { onDelete: "CASCADE" })
  @JoinColumn({ name: "exercise_group_id" })
  exerciseGroup!: Relation<ExerciseGroup>;
}
