import { stringToDate } from "./utils";
import { MatchPosition } from "./MatchPosition";
import { MatchData } from "./MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  reader: DataReader;
  constructor(reader: DataReader) {
    this.reader = reader;
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.mapRow);
  }

  private mapRow(row: string[]): MatchData {
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
