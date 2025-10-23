import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, Relation } from "typeorm";
import { ExerciseTraits } from "Src/types/exercise";
import { ExerciseGroup, ExerciseTranslation } from "Src/entities";

@Entity("exercises")
export class Exercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "group_id", type: "int", nullable: true })
  groupId?: number;

  @Column({ type: "json", nullable: true, default: null })
  traits?: ExerciseTraits | null;

  @Column({ type: "boolean", default: true })
  active!: boolean;

  @ManyToOne(() => ExerciseGroup, (group) => group.exercises, { onDelete: "SET NULL" })
  @JoinColumn({ name: "group_id" })
  group?: Relation<ExerciseGroup>;

  @OneToMany(() => ExerciseTranslation, (translation: any) => translation.exercise, { cascade: true })
  translations!: Relation<ExerciseTranslation>[];
}
