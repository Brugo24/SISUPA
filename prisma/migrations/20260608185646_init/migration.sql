-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "corpo" TEXT NOT NULL,
    "imagens" TEXT,
    "projeto" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "postado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projeto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "foto" TEXT,
    "banner" TEXT,
    "contato" TEXT,

    CONSTRAINT "projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "RA" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membro" (
    "id_user" INTEGER NOT NULL,
    "id_proj" INTEGER NOT NULL,
    "cargo" TEXT NOT NULL,
    "admissao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "membro_pkey" PRIMARY KEY ("id_user","id_proj")
);

-- CreateTable
CREATE TABLE "processo_seletivo" (
    "id" SERIAL NOT NULL,
    "projeto" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "inscricao" TEXT NOT NULL,
    "data_limite" TIMESTAMP(3) NOT NULL,
    "postado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "processo_seletivo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "projeto" INTEGER NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

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
