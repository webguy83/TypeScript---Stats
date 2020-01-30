import { MatchData } from "../MatchData";
import { MatchPosition } from "../MatchPosition";

export class CountryPositionAnalysis {
  constructor(public country: string, public position: MatchPosition) {}

  run(matches: MatchData[]): string {
    const results = matches.filter(player => {
      return player[3] === this.country && player[5] === this.position;
    });

    return `The country of ${this.country} has ${results.length} players at the ${this.position} position.`;
  }
}
