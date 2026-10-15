-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_companyId_fkey";

-- DropIndex
DROP INDEX "Skill_companyId_idx";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "companyId";

-- Add company name column, backfill from Company dictionary
ALTER TABLE "Experience" ADD COLUMN "company" TEXT;

UPDATE "Experience" AS e
SET "company" = c."name"
FROM "Company" AS c
WHERE e."companyId" = c."id";

-- Fallback for any orphan rows
UPDATE "Experience" SET "company" = 'Unknown' WHERE "company" IS NULL;

ALTER TABLE "Experience" ALTER COLUMN "company" SET NOT NULL;

-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_companyId_fkey";

-- DropIndex
DROP INDEX "Experience_companyId_idx";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "companyId";

-- DropTable
DROP TABLE "Company";
