const chalk = require('chalk');
const { resolve } = require('path');
const { rejects } = require('assert');
const fs = require('fs');


function SaveLog(Content) {
    
        try {
            const date = new Date()
            const DataAtual = date.toLocaleDateString('pt-br', { dateStyle: 'short' });
            const PathFolderLog = `U:/APIBOT/Logs/LOG_${DataAtual}.TXT`


            FileExist(PathFolderLog)
                .then(resolvePath => {

                    LoadLog(resolvePath)
                        .then(resolveString => {
                            const NewString = resolveString + Content
                            fs.writeFileSync(PathFolderLog, NewString)
                        })
                        .catch(() => {
                            console.log("Algo deu erro")

                        })
                })
                .catch(() => {
                    fs.writeFileSync(PathFolderLog, Content)
                    console.log(chalk.green("[LOG]") + " Um novo arquivo de Log foi registrado com sucesso")
                })

        } catch {
          console.log(chalk.red("[FATAL]") + " Não foi possivel registrar o LOG")
        }
};

function LoadLog(Path) {
    return Promisse = new Promise((resolve, rejects) => {
        try {
            const fileBuffer = fs.readFileSync(Path, 'utf-8')
            const StringContentFile = fileBuffer;
            resolve(StringContentFile)
        }
        catch  {
            rejects(console.log(chalk.green("[LOG]") + " Não foi possivel ler o arquivo de LOG"))
        }
    });

}
function FileExist(FilePath) {
    return Promisse = new Promise((resolve, rejects) => {
        try {
            if (fs.existsSync(FilePath)) {
                resolve(FilePath)
            } else {
                rejects(chalk.green("[LOG]") + " File Not Found")
            }
        } catch {
            rejects(chalk.red("[FATAL]") + " Erro ao buscar arquivo")

        }

    });
}




module.exports = {
    SaveLog
}

