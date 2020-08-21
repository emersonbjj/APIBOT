const fs = require('fs')
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');

module.exports = {
    savebat(process, resource) {
        return promisse = new Promise((resolve, rejects) => {
            try {
                const contentString = "cd C:/Program Files/Blue Prism Limited/Blue Prism Automate/ \n"
                    + `start AutomateC.exe /run ${process} /resource ${resource} /user admin Ee!41526388 /dbconname Blueprism`;
                const path = `C:/Users/jonas/Desktop/API_Ajustado_V0.2/Files_Executions/${process}.bat`;
                const PathRelative = `C:/Users/jonas/Desktop/API_Ajustado_V0.2/Files_Executions/${process}.bat`;
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





