//"player_id","firstName","lastName","nationality","birthCity","primaryPosition","birthDate","link"
import { MatchReader } from "./MatchReader";
import { MatchPosition } from "./MatchPosition";
import { CSVReaderLoader } from "./CSVReaderLoader";
import { CountryPositionAnalysis } from "./Analysis/CountryPositionAnalysis";
import { CountryAgePlayerAnalysis } from "./Analysis/CountryAgePlayerAnalysis";
import { ConsoleReport } from "./OutputTarget/ConsoleReport";
import { Summary } from "./Summary";
import { HTMLReport } from "./OutputTarget/HTMLReport";

const csvReaderLoader = new CSVReaderLoader("player_info.csv");
const matchReader = new MatchReader(csvReaderLoader);
matchReader.load();

const posAnal = new CountryPositionAnalysis("USA", MatchPosition.RightWing);
const countryAgeAnal = new CountryAgePlayerAnalysis(
  "CAN",
  new Date(1990, 0, 1)
);
const consoleReport = new ConsoleReport();
const htmlReport = new HTMLReport("report.html");
const summaryWithAge = new Summary(countryAgeAnal, consoleReport);
const summaryPosAnalysis = new Summary(posAnal, consoleReport);
const summaryWithAgeHTML = new Summary(countryAgeAnal, htmlReport);

summaryWithAge.buildAndPrintReport(matchReader.matches);
summaryPosAnalysis.buildAndPrintReport(matchReader.matches);
summaryWithAgeHTML.buildAndPrintReport(matchReader.matches);
