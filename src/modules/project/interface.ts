export interface CreateProjectPayload {
  name: string;
  order: number | string;
  tech: string;
  feature: string;
  shortDesc: string;
  description: string;
  clientRepo: string;
  serverRepo: string;
  liveUrl: string;
  thumbnail: string;
  thumbnailId?: string;
  isFeatured: boolean | string;
  isPublished: boolean | string;
}
export interface UpdateProjectPayload {
  name: string;
  order: number | string;
  tech: string;
  feature: string;
  shortDesc: string;
  description: string;
  clientRepo: string;
  serverRepo: string;
  liveUrl: string;
  thumbnail: string;
  thumbnailId?: string;
  isFeatured: boolean | string;
  isPublished: boolean | string;
}