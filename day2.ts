import _ from "lodash";

const input = await Bun.file("day2.txt").text();

const rounds = input.split("\n").map((r) => {
  const round: {
    opponent?: string;
    me?: string;
    score: number;
    outcome?: string;
  } = { score: 0 };

  if (r[0] === "A") round.opponent = "rock";
  if (r[0] === "B") round.opponent = "paper";
  if (r[0] === "C") round.opponent = "scissors";

  if (r[2] === "X") {
    round.me = "rock";
    round.score = 1;
  }
  if (r[2] === "Y") {
    round.me = "paper";
    round.score = 2;
  }
  if (r[2] === "Z") {
    round.me = "scissors";
    round.score = 3;
  }

  return round;
});

for (const round of rounds) {
  if (
    (round.opponent === "rock" && round.me === "paper") ||
    (round.opponent === "paper" && round.me === "scissors") ||
    (round.opponent === "scissors" && round.me === "rock")
  ) {
    round.score += 6;
  } else if (round.opponent === round.me) {
    round.score += 3;
  }
}

const totalScore = _.sum(rounds.map((r) => r.score));

console.log(totalScore);

for (const round of rounds) {
  if (round.me === "rock") {
    round.outcome = "lose";
    round.score = 0;
  } else if (round.me === "paper") {
    round.outcome = "draw";
    round.score = 3;
  } else if (round.me === "scissors") {
    round.outcome = "win";
    round.score = 6;
  }

  if (round.opponent === "rock" && round.outcome === "lose") {
    round.me = "scissors";
    round.score += 3;
  } else if (round.opponent === "rock" && round.outcome === "win") {
    round.me = "paper";
    round.score += 2;
  } else if (round.opponent === "paper" && round.outcome === "lose") {
    round.me = "rock";
    round.score += 1;
  } else if (round.opponent === "paper" && round.outcome === "win") {
    round.me = "scissors";
    round.score += 3;
  } else if (round.opponent === "scissors" && round.outcome === "lose") {
    round.me = "paper";
    round.score += 2;
  } else if (round.opponent === "scissors" && round.outcome === "win") {
    round.me = "rock";
    round.score += 1;
  } else {
    round.me = round.opponent;
    if (round.me === "rock") round.score += 1;
    if (round.me === "paper") round.score += 2;
    if (round.me === "scissors") round.score += 3;
  }
}

const totalScore2 = _.sum(rounds.map((r) => r.score));

console.log(totalScore2);
