import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"


export class user1656790326832 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                    },
                    {
                        name: "login",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "createdDate",
                        type: "date"
                    },
                    {
                        name: "updatedDate",
                        type: "date"
                    },
                    {
                        name: "isActive",
                        type: "boolean"
                    }
                ],
            }),
            true,
        );

        await queryRunner.createIndex(
            "user",
            new TableIndex({
                name: "idx_user_id",
                columnNames: ["id"],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("user");
        await queryRunner.dropTable("user");
    }

}
