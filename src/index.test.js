import { sortAnimals } from ".";

it("GIVEN sortAnimals, WHEN is invoked THEN should return even length animals list", () => {
  expect(sortAnimals().length % 2).toBe(0);
});

it("GIVEN sortAnimals, WHEN is invoked THEN should return sorted animals list", () => {
  const sortedAnimals = [
    { animal: "cat", type: "mammal" },
    { animal: "dog", type: "mammal" },
    { animal: "dolphin", type: "mammal" },
    { animal: "eagle", type: "bird" },
    { animal: "elephant", type: "mammal" },
    { animal: "frog", type: "amphibian" },
    { animal: "lion", type: "mammal" },
    { animal: "penguin", type: "bird" },
    { animal: "shark", type: "fish" },
    { animal: "snake", type: "reptile" },
  ];
  expect(sortAnimals()).toEqual(sortedAnimals);
});
