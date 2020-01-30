import { MatchData } from "../MatchData";

export class CountryAgePlayerAnalysis {
  constructor(public country: string, public birthday: Date) {}
  run(matches: MatchData[]): string {
    const result = matches.filter(player => {
      return (
        player[3] === this.country &&
        player[6].getFullYear() > this.birthday.getFullYear()
      );
    });
    return `The players from the country ${this.country} have ${
      result.length
    } born after ${this.birthday.getFullYear()}.`;
  }
}
