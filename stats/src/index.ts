import { MatchReader } from "./MatchReader";
// import{CsvFileReader} from './CsvFileReader'
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// создать объект кот имплиментирует DataReader interface
// const csvFileReader = new CsvFileReader('football.csv')

// создать объект MachReader и имплиментирует DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();


// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary1 = Summary.winsAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);


// итоги
// в MatchResult.ts  создаем Enum - enumeration(перечисление) в кот хранятся всевозможн варианты выиграл/проиград/ничья
// в MatchData.ts описание стр(из исходной таблицы) описывающей матч

// inheritance/ - подход при помощи наследования
// inheritance/CsvFileReader.ts -  использовали дженерики что-бы потом добавлять типы 'на лету'
// inheritance/MatchReader.ts  - сделали преобразование данных из исходной таблицы

// подход при помощи композиции
// MatchReader.ts -  DataReader -здесь как источник информации может быть из *.csv файда из API откуда угодно;  
//                   конвертация данных из одних типов в другие (преобразование данных)
// MatchReader - загружает данные из произ источника и конвертирует данные из одних типов в другие

// 2-ой тип композиции
//  в ф-ле Summary.ts  - управляет анализом и выводом отчетов он делигирует каждому содержащемуся в нем обьекту соответ функциональность