import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AddExerciseTranslations1760980421943 implements MigrationInterface {
    /**
     * Up migration
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create table
        await queryRunner.createTable(
            new Table({
                name: "exercise_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "exercise_id",
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
                    {
                        name: "description",
                        type: "text",
                        isNullable: true,
                    },
                ],
            }),
            true
        );

        // Create foreign key constraint
        await queryRunner.createForeignKey(
            "exercise_translations",
            new TableForeignKey({
                columnNames: ["exercise_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "exercises",
                onDelete: "CASCADE",
            })
        );
    }

    /**
     * Down migration
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("exercise_translations", true);
    }

}
