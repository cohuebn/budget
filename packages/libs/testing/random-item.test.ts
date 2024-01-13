import { randomIndex, randomItem } from "./random-item";
import { range } from "./range";
import { isBetween } from "./testing/is-between";

describe("randomIndex", () => {
  it("should return a random index from the array", () => {
    const items = ["a", "b", "c"];
    const selectedIndexes = range(1, 200).map(() => randomIndex(items));
    // Use call ratio to ensure similar distribution between items over a big enough selection spread
    const selectedIndexRatio = (index: number) => {
      const indexUsage = selectedIndexes.filter((selectedItem) => selectedItem === index).length;
      return (indexUsage * 1.0) / selectedIndexes.length; // Float conversion to prevent int division
    };
    const selectedIndexRatios = range(0, items.length - 1).map(selectedIndexRatio);
    expect(selectedIndexRatios).toHaveLength(3);
    isBetween(selectedIndexRatios[0], 0.1, 0.5);
    isBetween(selectedIndexRatios[1], 0.1, 0.5);
    isBetween(selectedIndexRatios[2], 0.1, 0.5);
  });
});

describe("randomItem", () => {
  it("should return a random item from the array", () => {
    const items = [1, 2, 3];
    const selectedItems = range(1, 200).map(() => randomItem(items));
    // Use call ratio to ensure similar distribution between items over a big enough selection spread
    const selectedItemRatio = (item: number) => {
      const urlUsage = selectedItems.filter((selectedItem) => selectedItem === item).length;
      return (urlUsage * 1.0) / selectedItems.length; // Float conversion to prevent int division
    };
    const selectedItemsRatio = items.map(selectedItemRatio);
    expect(selectedItemsRatio).toHaveLength(3);
    isBetween(selectedItemsRatio[0], 0.1, 0.5);
    isBetween(selectedItemsRatio[1], 0.1, 0.5);
    isBetween(selectedItemsRatio[2], 0.1, 0.5);
  });
});
