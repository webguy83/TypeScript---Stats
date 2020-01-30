import { MatchData } from "./MatchData";

interface Analyzer {
  run(matches: MatchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  analyzer: Analyzer;
  outputTarget: OutputTarget;

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
  constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }
}
