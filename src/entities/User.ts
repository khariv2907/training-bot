import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, type: "varchar" })
  telegramId!: string;

  @Column({ nullable: true, type: "varchar" })
  username?: string;
}