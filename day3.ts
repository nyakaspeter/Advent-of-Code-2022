import _ from "lodash";

const input = await Bun.file("day3.txt").text();

const rucksacks = input.split("\n").map((r) => {
  const items = Array.from(r);

  const chunk1 = items.slice(0, items.length / 2);
  const chunk2 = items.slice(items.length / 2);

  const common = _.intersection(chunk1, chunk2);

  const priorities = common.map((item) => {
    if (item === item.toLowerCase()) {
      return item.charCodeAt(0) - 96;
    } else {
      return item.charCodeAt(0) - 38;
    }
  });

  const priority = _.sum(priorities);

  return { items, chunk1, chunk2, priority };
});

const sumOfPriorities = _.sum(rucksacks.map((r) => r.priority));

console.log(sumOfPriorities);

const groups = _.chunk(rucksacks, 3);
let sumOfPriorities2 = 0;

for (const group of groups) {
  const badge = _.intersection(
    group[0].items,
    group[1].items,
    group[2].items
  )[0];

  if (badge === badge.toLowerCase()) {
    sumOfPriorities2 += badge.charCodeAt(0) - 96;
  } else {
    sumOfPriorities2 += badge.charCodeAt(0) - 38;
  }
}

console.log(sumOfPriorities2);
