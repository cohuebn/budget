import { randomUUID, randomBytes } from "node:crypto";

import { generateSlug } from "random-word-slugs";

import { range } from "./range";
import { randomItem } from "./random-item";

// Re-export for convenience to import just this module with other random functions
export { randomItem } from "./random-item";

export function randomUuid(): string {
  return randomUUID();
}

export function randomInt(max = 255): number {
  return Math.floor(Math.random() * (max + 1));
}

type RandomFloatOptions = {
  min?: number;
  max?: number;
  decimals?: number;
};

export function randomFloat(options: RandomFloatOptions = {}): number {
  const min = options.min ?? 0;
  const max = options.max ?? 255;
  const decimals = options.decimals ?? 3;
  const fixedDecimalString = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(fixedDecimalString);
}

export function randomHederaId(): string {
  return `${randomInt()}.${randomInt()}.${randomInt()}`;
}

export function randomSemver(): string {
  const prerelease = randomInt(1) > 0 ? "" : randomItem(["-beta", "-alpha", "-plinkin"]);
  return `${randomInt()}.${randomInt()}.${randomInt()}${prerelease}`;
}

export function randomStrings(wordCount = 1): string[] {
  return generateSlug(wordCount, { format: "title" }).split(" ");
}

type Case = "kebab" | "camel" | "title" | "lower" | "sentence";

type RandomStringOptions = {
  wordCount?: number;
  format?: Case;
};
export function randomString(options: RandomStringOptions = {}): string {
  return generateSlug(options.wordCount ?? 3, { format: "title" });
}

export function randomUrl(): string {
  const protocol = randomItem(["http", "https"]);
  const domain = randomString().toLocaleLowerCase().replace(/\s+/, "");
  const tld = randomItem(["com", "gov", "jpn", "tv"]);
  return `${protocol}://${domain}.${tld}`;
}

export function randomHex(length = 32, prefixWithZeroX = true) {
  const prefix = prefixWithZeroX ? "0x" : "";
  const hex = randomBytes(length).toString("hex");
  return `${prefix}${hex}`;
}

export function randomHexAddress(): string {
  return randomHex(20);
}

export function randomBoolean(): boolean {
  return randomItem([false, true]);
}

export function randomEnum<T extends { [key: string | number]: T[keyof T] }>(enumClass: T) {
  return randomItem(Object.values(enumClass));
}

export function randomDate(): Date {
  const year = new Date().getFullYear();
  return new Date(
    year - randomInt(10),
    randomInt(11),
    randomInt(28),
    randomInt(23),
    randomInt(59),
    randomInt(59),
  );
}

/**
 * Generate multiple items using the provided generator function
 * @param howMany The amount of the item to generate
 * @param generator The item generator function
 * @returns A list of generated items
 */
export function generate<T>(howMany: number, generator: () => T): T[] {
  return range(1, howMany).map(generator);
}
