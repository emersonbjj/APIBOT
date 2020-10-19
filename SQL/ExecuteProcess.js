//Esse arquivo é responsável por executar um arquivo do tipo .BAT, recebemdp seu caminho como parâmetro (path)
//O retorno dele é um JSON 


const { spawn } = require('child_process');
module.exports = {
    ExecutionProcess(path) {//Aqui ele recebe o caminho do arquivo como parâmetro
        const bat = spawn('cmd.exe', ['/c', path]);//Aqui ele executa o arquivo .bat no CMD
        return new Promise((resolveExecution, rejectExecution) => {
            try {
                var codefinal
                bat.stdout.on('data', (data) => {
                    console.log(data.toString());
                });
                bat.stderr.on('data', (data) => {
                    console.error(data.toString());//Aqui ele printa o console.erro no terminal
                });
                bat.on('exit', (code) => {
                    console.log(`Child exited with code ${code}`);//Aqui ele printa o code no terminal
                   codefinal = code;
                });
                if(codefinal != 1){ //Aqui ele verifica se o code é diferente de "1"(sucesso) e retorna a respectiva mensagem 
                    resolveExecution({ message: "Sucesso!" }); //Aqui ele retorna mensagem de sucesso no formato JSON para resposta
                }else{
                    rejectExecution({ message: "Erro ao executar processo" })//Aqui ele retorna mensagem de erro no formanto JSON para envio
                }
            } catch{
                rejectExecution({ message: "Erro ao executar processo" })//Aqui ele retorna mensagem de erro no formanto JSON para envio
            }
        });
    }
}