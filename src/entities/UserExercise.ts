import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Relation } from "typeorm";
import { ExerciseTraits } from "Src/types/exercise";
import { User } from "Src/entities";

@Entity("user_exercises")
export class UserExercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "user_id", type: "int", nullable: false })
  userId!: number;

  @Column({ type: "varchar", length: 100, nullable: false })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "json", nullable: true, default: null })
  traits?: ExerciseTraits | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: Relation<User>;
}
