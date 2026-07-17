export interface ISkill {
  id?: string;
  name: string;
  icon: string;
  category: SkillCategory;
  level?: number;
  order?: number;
  isPublished?: boolean;
}


 type SkillCategory = {
  FRONTEND:"FRONTEND"
  BACKEND:"BACKEND"
  DATABASE:"DATABASE"
  TOOLS:"TOOLS"
}