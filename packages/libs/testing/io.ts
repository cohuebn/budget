import { resolve } from "path";
import { readFile } from "fs/promises";

type TestDataLoader = {
  getFullFilepath: (relativePath: string) => string;
  loadRelativeFile: (relativePath: string) => Promise<string>;
};

/**
 * Get a loader capable of loading files relative to the provided base path. This is
 * useful to load relative "test-data" files near the test file
 * @param basePath The base path; usually this is the directory of the test file itself
 */
export function getTestDataLoader(basePath: string): TestDataLoader {
  const getFullFilepath = (relativePath: string) => resolve(basePath, relativePath);
  const loadRelativeFile = async (relativePath: string) =>
    readFile(getFullFilepath(relativePath), "utf-8");

  return { getFullFilepath, loadRelativeFile };
}
