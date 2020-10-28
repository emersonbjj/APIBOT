const fs = require('fs')
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');
const WriteFileLog = require('./Savelog')

module.exports = {
    savebat(processName, resource) {
        return Promisse = new Promise((resolve, rejects) => {
            try {
                const Username = process.env.USERNAMEBP;
                const Userpassword = process.env.USERPASSWORD;
                const dbconname = process.env.DBCONNAME;

                const contentString = "cd C:/Program Files/Blue Prism Limited/Blue Prism Automate/ \n"
                    + `start AutomateC.exe /run ${processName} /resource ${resource} /user ${Username} ${Userpassword} /dbconname ${dbconname}`;
                const PathRelative = `U:/APIBOT/Files_Executions/${processName}.bat`;
                fs.writeFileSync(PathRelative, contentString)
                WriteFileLog.SaveLog(`[Process] O arquivo foi gravado com esses parâmetros: Process name: ${processName} Resource name: ${resource}`)
                resolve(PathRelative);
            }
            catch
            {
                rejects({ message: "Failed" });
            }
        });

    }
}





