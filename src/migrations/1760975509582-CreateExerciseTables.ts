import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateExerciseTables1760975509582 implements MigrationInterface {
  /**
   * Up migration
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create table
    await queryRunner.createTable(
      new Table({
        name: "exercises",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "group_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "traits",
            type: "json",
            isNullable: true,
            default: null,
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

    // Create foreign key constraint
    await queryRunner.createForeignKey(
      "exercises",
      new TableForeignKey({
        columnNames: ["group_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "exercise_groups",
        onDelete: "SET NULL",
      })
    );
  }

  /**
   * Down migration
   */
  public async down(queryRunner: QueryRunner): Promise<void> {  
    await queryRunner.dropTable("exercises", true);
  }
}
