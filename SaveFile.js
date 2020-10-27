const chalk = require('chalk');
const fs = require('fs')
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');
const Time = new Date().toLocaleDateString('pt-Br', { timeStyle: 'full' })
const WriteFileLog = require('./Savelog')

module.exports = {
    savebat(processName,resource) {
        return Promisse = new Promise((resolve, rejects) => {
            try {
                const Username = process.env.USERNAMEBP;
                const Userpassword = process.env.USERPASSWORD;
                const dbconname = process.env.DBCONNAME;
                
                const contentString = "cd C:/Program Files/Blue Prism Limited/Blue Prism Automate/ \n"
                    + `start AutomateC.exe /run ${processName} /resource ${resource} /user ${Username} ${Userpassword} /dbconname ${dbconname}`;
                const PathRelative = `U:/APIBOT/Files_Executions/${processName}.bat`;
                fs.writeFileSync(PathRelative, contentString)
                console.log(chalk.green(Time + " [Process]")+" O arquivo foi gravado com esses parâmetros: Process name: " + chalk.yellow(`${processName}`)+ ", Resource name: " + chalk.yellow(`${resource}`)) 
                WriteFileLog.SaveLog(Time + ` [Process] O arquivo foi gravado com esses parâmetros: Process name: ${processName} Resource name: ${resource}\r\n`)
                resolve(PathRelative);
                
            }
            catch
            {
               rejects({message:"Failed"});
            }
        });

    }
}





