import _ from "lodash";

const input = await Bun.file("day4.txt").text();

const pairs = input.split("\n").map((pair) => {
  const firstRange = pair.split(",")[0];
  const firstStart = parseInt(firstRange.split("-")[0]);
  const firstEnd = parseInt(firstRange.split("-")[1]);
  const first = _.range(firstStart, firstEnd + 1);

  const secondRange = pair.split(",")[1];
  const secondStart = parseInt(secondRange.split("-")[0]);
  const secondEnd = parseInt(secondRange.split("-")[1]);
  const second = _.range(secondStart, secondEnd + 1);

  return { first, second };
});

const count = pairs.filter(
  (pair) =>
    _.difference(pair.first, pair.second).length === 0 ||
    _.difference(pair.second, pair.first).length === 0
).length;

console.log(count);

const count2 = pairs.filter(
  (pair) => _.intersection(pair.first, pair.second).length > 0
).length;

console.log(count2);
