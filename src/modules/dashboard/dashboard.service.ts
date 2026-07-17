import { prisma } from "../../lib/prisma";

const getDashboardOverview = async () => {
  const [
    totalProjects,
    totalSkills,
    totalMessages,
    unreadMessages,
    featuredProjects,
  ] = await Promise.all([
    prisma.project.count(),
    prisma.skill.count(),
    prisma.contact.count(),
    prisma.contact.count({
      where: {
        isRead: false,
      },
    }),
    prisma.project.count({
      where: {
        isFeatured: true,
      },
    }),
  ]);

  return {
    totalProjects,
    totalSkills,
    totalMessages,
    unreadMessages,
    featuredProjects,
  };
};

export const dashboardService = {
  getDashboardOverview,
};