import { Skill } from "../../generated/prisma/client";
import { prisma } from "../../lib/prisma";


const createSkill = async (payload: Skill) => {
  return await prisma.skill.create({
    data: payload,
  });
};

const updateSkill = async (id: string,payload: Partial<Skill>) => {
  await prisma.skill.findUniqueOrThrow({
    where: { id },
  });

  return await prisma.skill.update({
    where: { id },
    data: payload,
  });
};

const deleteSkill = async (id: string) => {
  await prisma.skill.findUniqueOrThrow({
    where: { id },
  });

  return await prisma.skill.delete({
    where: { id },
  });
};

const getAllSkills = async () => {
  return await prisma.skill.findMany({
    orderBy: [
      {
        category: "asc",
      },
      {
        order: "asc",
      },
    ],
  });
};

const getPublishedSkills = async () => {
  return await prisma.skill.findMany({
    where: {
      isPublished: true,
    },
    orderBy: [
      {
        category: "asc",
      },
      {
        order: "asc",
      },
    ],
  });
};

const getSkillsByCategory = async (category: Skill["category"]
) => {
  return await prisma.skill.findMany({
    where: {
      category,
      isPublished: true,
    },
    orderBy: {
      order: "asc",
    },
  });
};

const getSingleSkill = async (id: string) => {
  return await prisma.skill.findUniqueOrThrow({
    where: {
      id,
    },
  });
};

export const SkillService = {
  createSkill,
  updateSkill,
  deleteSkill,
  getAllSkills,
  getPublishedSkills,
  getSkillsByCategory,
  getSingleSkill,
};