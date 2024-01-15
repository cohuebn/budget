export type ConnectionOptions = {
  host: string;
  port: number;
  dbName: string;
  username?: string;
  password?: string;
  isAdminConnection?: boolean;
};
