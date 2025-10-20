import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserExercisesTable1760977807429 implements MigrationInterface {
   /**
     * Up migration
     */
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create table
    await queryRunner.createTable(
      new Table({
        name: "user_exercises",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "user_id",
            type: "int",
            isNullable: false,
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "description",
            type: "text",
            isNullable: true,
          },
          {
            name: "traits",
            type: "json",
            isNullable: true,
            default: null,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
          },
        ],
      }),
      true
    );

    // Create foreign key
    await queryRunner.createForeignKey(
      "user_exercises",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "CASCADE",
      })
    );
  }

  /**
   * Down migration
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_exercises", true);
  }
}
