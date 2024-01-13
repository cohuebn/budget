/**
 * Select a random index for an array
 * @param items The items to select an index from
 * @returns A random index from the array
 */
export function randomIndex<T>(items: T[]): number {
  return Math.floor(Math.random() * items.length);
}

/**
 * Select a random item from an array
 * @param items The items to select from
 * @returns A random item from the array
 */
export function randomItem<T>(items: T[]): T {
  return items[randomIndex(items)];
}
