import { CSVReaderLoader } from "./CSVReaderLoader";
import { stringToDate } from "../utils";
import { MatchPosition } from "../MatchPosition";

type MatchData = [number, string, string, string, string, MatchPosition, Date];

export class MatchReader extends CSVReaderLoader<MatchData> {
  constructor(fileName: string) {
    super(fileName);
  }
  mapRow(row: string[]): MatchData {
    return [
      parseInt(row[0]),
      row[1],
      row[2],
      row[3],
      row[4],
      row[5] as MatchPosition,
      stringToDate(row[6])
    ];
  }
}
