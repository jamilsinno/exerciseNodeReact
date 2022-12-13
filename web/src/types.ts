export type RepoContent = {
  created_at: string;
  [key: string]: string | boolean | number | RepoContent;
};