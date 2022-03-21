const winston = require("winston");
const axios = require("axios");
const chalk = require("chalk");

export default async function (version: string) {

    type Data = {
        data: Object
    }

    const url = 'http://144.91.124.143:3004/ttvdropbot-dev';
    const req = await axios.get(url).then((data: Data) => {
            return data.data;
        }).catch((err: any) => winston.info(err));

    if (req.version !== version) {
        winston.info(" ")
        winston.info(chalk.green("New Version to download available...") + " | " + chalk.gray("Your Version: ") +  chalk.magenta(version + " (main)") + " | " + chalk.gray("Newest Version: ") +  chalk.magenta(req.version))
    }
    
    
}