import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { ExerciseGroup } from "./ExerciseGroup";
import { ExerciseTranslation } from "./ExerciseTranslation";
import { ExerciseTraits } from "Src/types/exercise";

@Entity(" ")
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
  group?: ExerciseGroup;

  @OneToMany(() => ExerciseTranslation, (translation) => translation.exercise, { cascade: true })
  translations!: ExerciseTranslation[];
}
