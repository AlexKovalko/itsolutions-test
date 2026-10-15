-- Clear existing skills; seed will repopulate with companyId
DELETE FROM "Skill";

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN "companyId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Skill_companyId_idx" ON "Skill"("companyId");

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
