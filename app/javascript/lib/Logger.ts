/** Signature of a logging function */
export interface LogFn {
  (message?: any, ...optionalParams: any[]): void;
}

/** Basic logger interface */
export interface LoggerInterface {
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
}

const LOG_LEVELS = {
  DEBUG: "debug",
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
};

/** Log levels */
export type LogLevel = "debug" | "info" | "warn" | "error";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NO_OP: LogFn = (message?: any, ...optionalParams: any[]) => {};

/** Logger which outputs to the browser console */
export class Logger implements LoggerInterface {
  readonly debug: LogFn;

  readonly info: LogFn;

  readonly warn: LogFn;

  readonly error: LogFn;

  constructor(options?: { level?: LogLevel }) {
    const { level } = options || {};

    // eslint-disable-next-line no-console
    this.error = console.error.bind(console);

    // eslint-disable-next-line no-console
    console.log("Log Level set to:", level);

    if (level === LOG_LEVELS.ERROR) {
      this.warn = NO_OP;
      this.info = NO_OP;
      this.debug = NO_OP;

      return;
    }

    // eslint-disable-next-line no-console
    this.warn = console.warn.bind(console);

    if (level === LOG_LEVELS.WARN) {
      this.info = NO_OP;
      this.debug = NO_OP;

      return;
    }

    // eslint-disable-next-line no-console
    this.info = console.log.bind(console);

    if (level === LOG_LEVELS.INFO) {
      this.debug = NO_OP;

      return;
    }

    // TODO: Temporarily setting this to log
    // eslint-disable-next-line no-console
    this.debug = console.log.bind(console);
  }
}

export const logger = new Logger({ level: LOG_LEVELS.DEBUG });
