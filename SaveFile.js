
const fs = require('fs')
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');

module.exports = {
    savebat(processName,resource,Username,Userpassword,dbconname) {
        return promisse = new Promise((resolve, rejects) => {
            try {
                const contentString = "cd C:/Program Files/Blue Prism Limited/Blue Prism Automate/ \n"
                    + `start AutomateC.exe /run ${processName} /resource ${resource} /user ${Username} ${Userpassword} /dbconname ${dbconname}`;
                const path = `C:/Users/jonas/Desktop/API_Ajustado_V0.2/Files_Executions/${processName}.bat`;
                const PathRelative = `C:/Users/jonas/Desktop/API_Ajustado_V0.2/Files_Executions/${processName}.bat`;
                console.log(PathRelative)
                fs.writeFileSync(PathRelative, contentString)
                resolve(PathRelative);
            }
            catch
            {
                rejects(new error({ messege: "Failed" }));
            }
        });

    }
}





