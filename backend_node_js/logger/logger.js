const fs = require("fs");
const os = require("os");
const eventEmitter = require("events");

class Logger extends eventEmitter {
  logMsg(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();

const addLogFile = (event) => {
  let logMessage = `log : ${event.message} \n`;
  fs.appendFileSync("./logFile.txt", logMessage);
};

logger.on("message", addLogFile);

setInterval(() => {
  let memUsage = (os.freemem / os.totalmem) * 100;
  logger.logMsg(`current memeory usage : ${memUsage}`);
}, 3000);

logger.logMsg("application started");
