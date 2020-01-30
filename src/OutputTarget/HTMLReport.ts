import fs from "fs";

export class HTMLReport {
  print(report: string) {
    const html = `<div id='container'>
            <h1>The Report</h1>
            <p>${report}</p>
        </div>`;

    fs.writeFileSync(this.reportPath, html);
  }

  constructor(public reportPath: string) {}
}
