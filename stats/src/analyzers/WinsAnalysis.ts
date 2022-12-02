import { Analyzer } from "../Summary"
import { MatchData } from "../MatchData";
import { MatchResult } from '../MatchResult'

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) { }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) { // 'Man United' победила в домашних матчах
        wins++
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) { // 'Man United' победила в выездных матчах
        wins++
      }
    }

    return `Tem ${this.team} won ${wins} times.`
  }

}