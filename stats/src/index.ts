import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader('football.csv');
reader.read();

// console.log('reader.data = ', reader.data );

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { // 'Man United' победила в домашних матчах
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { // 'Man United' победила в выездных матчах
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} times`);