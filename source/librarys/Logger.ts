import { resolve } from 'path';
import winston, { createLogger, format, transports } from 'winston';
import { LoggerInterface } from '../types/System';

class Logger implements LoggerInterface {
  private logger: winston.Logger;

  constructor() {
    this.logger = createLogger({
      format: format.combine(
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`),
      ),
      transports: [
        new transports.Console(),
        new transports.File({
          filename: resolve('logs', 'duduce.log'),
        }),
      ],
      exitOnError: false,
    });
  }

  public log(msg: string): void {
    this.logger.info(msg);
  }

  public info(msg: string): void {
    this.logger.info(msg);
  }

  public notice(msg: string): void {
    this.logger.notice(msg);
  }

  public debug(msg: string): void {
    this.logger.debug(msg);
  }

  public warn(msg: string): void {
    this.logger.warn(msg);
  }

  public error(msg: string): void {
    this.logger.error(msg);
  }
}

export default Logger;
