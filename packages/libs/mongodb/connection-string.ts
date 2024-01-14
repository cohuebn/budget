export type ConnectionOptions = {
  host: string;
  port: number;
  dbName: string;
  username?: string;
  password?: string;
};

export function toConnectionString(options: ConnectionOptions) {
  if (options.username && options.password) {
    return `mongodb://${options.username}:${options.password}@${options.host}:${options.port}/${options.dbName}`;
  }
  return `mongodb://${options.host}:${options.port}/${options.dbName}`;
}
