import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AddExerciseGroupTranslations1760990557130 implements MigrationInterface {
    /**
     * Up migration
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create table
        await queryRunner.createTable(
            new Table({
                name: "exercise_group_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "exercise_group_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "language",
                        type: "varchar",
                        length: "10",
                        isNullable: false,
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                ],
            }),
            true
        );

        // Create foreign key constraint
        await queryRunner.createForeignKey(
            "exercise_group_translations",
            new TableForeignKey({
                columnNames: ["exercise_group_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "exercise_groups",
                onDelete: "CASCADE",
            })
        );
    }

    /**
     * Down migration
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("exercise_group_translations", true);
    }

}
