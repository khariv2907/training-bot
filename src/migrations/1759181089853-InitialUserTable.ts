
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InitialUserTable1759181089853 implements MigrationInterface {
  /**
   * Up migration
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "telegramId", type: "varchar", isUnique: true },
          { name: "username", type: "varchar", isNullable: true },
          { name: "created_at",  type: "timestamp", default: "CURRENT_TIMESTAMP" },
          { name: "updated_at",  type: "timestamp", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" }
        ],
      }),
      true
    );
  }

  /**
   * Down migration
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
