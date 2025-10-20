import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateExerciseGroupsTable1760975498432 implements MigrationInterface {
  /**
   * Up migration
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create table
    await queryRunner.createTable(
      new Table({
        name: "exercise_groups",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "active",
            type: "boolean",
            default: true,
          },
        ],
      }),
      true
    );
  }

  /**
   * Down migration
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("exercise_groups");
  }
}
