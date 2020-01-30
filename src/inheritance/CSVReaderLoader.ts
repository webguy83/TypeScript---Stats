import fs from "fs";

export abstract class CSVReaderLoader<T> {
  fileName: string;
  data: T[] = [];

  abstract mapRow(row: string[]): T;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
