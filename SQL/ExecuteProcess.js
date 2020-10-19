//Esse arquivo é responsável por executar um arquivo do tipo .BAT, recebemdp seu caminho como parâmetro (path)
//O retorno dele é um JSON 


const { spawn } = require('child_process');
module.exports = {
    ExecutionProcess(path) {
        const bat = spawn('cmd.exe', ['/c', path]);
        return new Promise((resolveExecution, rejectExecution) => {
            try {
                var codefinal
                bat.stdout.on('data', (data) => {
                    console.log(data.toString());
                });
                bat.stderr.on('data', (data) => {
                    console.error(data.toString());
                });
                bat.on('exit', (code) => {
                    console.log(`Child exited with code ${code}`);
                   codefinal = code;
                });
                if(codefinal != 1){
                    resolveExecution({ message: "Sucesso!" });
                }else{
                    rejectExecution({ message: "Erro ao executar processo" })
                }
            } catch{
                rejectExecution({ message: "Erro ao executar processo" })
            }
        });
    }
}