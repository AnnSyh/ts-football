import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import{CsvFileReader} from './CsvFileReader'

// создать объект кот имплиментирует DataReader interface
const csvFileReader = new CsvFileReader('football.csv')

// создать объект MachReader и 
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// matchReader.matches - здесь содержится вся преобразованная инф-я

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) { // 'Man United' победила в домашних матчах
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { // 'Man United' победила в выездных матчах
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} times`);