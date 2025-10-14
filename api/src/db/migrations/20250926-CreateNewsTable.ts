import { MigrationInterface, QueryRunner } from 'typeorm';

// Classe renomeada para incluir sufixo numérico (timestamp) exigido pelo TypeORM
export class CreateNewsTable1695730000000 implements MigrationInterface {
  name = 'CreateNewsTable1695730000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // cria extensão que fornece gen_random_uuid()
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto";`);

    await queryRunner.query(`
      CREATE TABLE "news" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "created_at" TIMESTAMP NOT NULL DEFAULT now(),
        "title" character varying NOT NULL,
        "description" text NOT NULL,
        CONSTRAINT "PK_news_id" PRIMARY KEY ("id")
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "news";`);
  }
}
