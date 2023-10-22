import countries from "./countries.json" assert { type: "json" };
import chalk from "chalk";
for (let index = 0; index < countries.length; index++) {
    const element = countries[index];
    // if (element.name === "P") {
    console.log(`Country Name:` + chalk.white.bgCyan.italic.bold(element.name) + `Country Code` + chalk.white.bgRed.italic.bold(element.code));
    // }
}
chalk.white.bgCyan.italic.bold();
