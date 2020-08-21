const fs = require('fs')
const { resolve } = require('path');
const { rejects } = require('assert');
const { error } = require('console');

module.exports = {
    savebat(process, resource) {
        return promisse = new Promise((resolve, rejects) => {
            try {
                const contentString = "cd C:/Program Files/Blue Prism Limited/Blue Prism Automate/"
                    + `start AutomateC.exe /run ${process} /resource ${resource} /user admin Ee!41526388 /dbconname Blueprism`;
                const path = `G:/CHATBOT_BIA/API_Ajustado/Files_Executions/${process}.bat`;
                const PathRelative = `Files_Executions/${process}.bat`;
                fs.writeFileSync(path, contentString)
                resolve(PathRelative);
            }
            catch
            {
                rejects(new error({ messege: "Failed" }));
            }
        });

    }
}





