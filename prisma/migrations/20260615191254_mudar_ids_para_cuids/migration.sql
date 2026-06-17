/*
  Warnings:

  - The primary key for the `evento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `membro` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `posts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `processo_seletivo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `projeto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "evento" DROP CONSTRAINT "evento_projeto_fkey";

-- DropForeignKey
ALTER TABLE "membro" DROP CONSTRAINT "membro_id_proj_fkey";

-- DropForeignKey
ALTER TABLE "membro" DROP CONSTRAINT "membro_id_user_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_projeto_fkey";

-- DropForeignKey
ALTER TABLE "processo_seletivo" DROP CONSTRAINT "processo_seletivo_projeto_fkey";

-- AlterTable
ALTER TABLE "evento" DROP CONSTRAINT "evento_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "projeto" SET DATA TYPE TEXT,
ADD CONSTRAINT "evento_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "evento_id_seq";

-- AlterTable
ALTER TABLE "membro" DROP CONSTRAINT "membro_pkey",
ALTER COLUMN "id_user" SET DATA TYPE TEXT,
ALTER COLUMN "id_proj" SET DATA TYPE TEXT,
ADD CONSTRAINT "membro_pkey" PRIMARY KEY ("id_user", "id_proj");

-- AlterTable
ALTER TABLE "posts" DROP CONSTRAINT "posts_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "projeto" SET DATA TYPE TEXT,
ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "posts_id_seq";

-- AlterTable
ALTER TABLE "processo_seletivo" DROP CONSTRAINT "processo_seletivo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "projeto" SET DATA TYPE TEXT,
ADD CONSTRAINT "processo_seletivo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "processo_seletivo_id_seq";

-- AlterTable
ALTER TABLE "projeto" DROP CONSTRAINT "projeto_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "projeto_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "projeto_id_seq";

-- AlterTable
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "usuario_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "usuario_id_seq";

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_projeto_fkey" FOREIGN KEY ("projeto") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membro" ADD CONSTRAINT "membro_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membro" ADD CONSTRAINT "membro_id_proj_fkey" FOREIGN KEY ("id_proj") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "processo_seletivo" ADD CONSTRAINT "processo_seletivo_projeto_fkey" FOREIGN KEY ("projeto") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_projeto_fkey" FOREIGN KEY ("projeto") REFERENCES "projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
