import _ from "lodash";

const input = await Bun.file("day1.txt").text();

const calories = input
  .split("\n\n")
  .map((cals) => cals.split("\n").map((cal) => parseInt(cal)));

const highest = _.max(calories.map((cals) => _.sum(cals)));

console.log(highest);

const sorted = calories.map((cals) => _.sum(cals)).toSorted((a, b) => b - a);

const sumOfTopThree = _.sum(sorted.slice(0, 3));

console.log(sumOfTopThree);
