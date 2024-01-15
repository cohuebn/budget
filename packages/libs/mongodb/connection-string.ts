import { ConnectionOptions } from "./types";

export function toConnectionString(options: ConnectionOptions) {
  if (options.username && options.password) {
    const encodedUsername = encodeURIComponent(options.username);
    const encodedPassword = encodeURIComponent(options.password);
    const adminAuthSegment = options.isAdminConnection ? "?authSource=admin" : "";
    return `mongodb://${encodedUsername}:${encodedPassword}@${options.host}:${options.port}/${options.dbName}${adminAuthSegment}`;
  }
  return `mongodb://${options.host}:${options.port}/${options.dbName}`;
}
