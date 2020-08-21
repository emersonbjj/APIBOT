const { spawn } = require('child_process');
module.exports = {
    ExecutionProcess(path) {
        const bat = spawn('cmd.exe', ['/c', 'Files_Executions/BSA.bat']);
        return new Promise((resolveExecution, rejectExecution) => {
            try {
                bat.stdout.on('data', (data) => {
                    console.log(data.toString());
                });
                bat.stderr.on('data', (data) => {
                    console.error(data.toString());
                });
                bat.on('exit', (code) => {
                    console.log(`Child exited with code ${code}`);
                });
                resolveExecution({ message: "Sucess in Execution" });
            } catch{
               
                rejectExecution({ message: "Deu ruim" })
            }
        });
    }
}