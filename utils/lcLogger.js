'use strict;'

import * as winston from 'winston';
import BrowserConsole from 'winston-transport-browserconsole';

const winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'makers' },
    transports: [
      new BrowserConsole()
    ]
});

if (process.server) {
    winstonLogger.add(new winston.transports.File({ filename: 'testLog.log' }));
}

//export { winstonLogger };

const logger = {
    debug: winstonLogger.debug,
    info: winstonLogger.info,
    warn: winstonLogger.warn,
    error: winstonLogger.error
};

export { logger };
