import { browser } from "$app/environment";
import { PUBLIC_ENV } from "$env/static/public";
import pino, { type Logger, type LoggerOptions } from "pino";
import { readable, type Readable } from "svelte/store";

export type PinoLogger = Logger & {
	setLogLevel: () => LoggerOptions["level"];
};

// Default log level will be set to silent but will be modified as per the environment in context.
const defaultLogLevel = "silent";

// Create the logger with the correct type from the beginning
const loggerInstance: PinoLogger = (() => {
	let pinoOptions: LoggerOptions;

	if (browser) {
		// If logger is running in browser, pretty print it.
		pinoOptions = {
			browser: { asObject: false },
			level: defaultLogLevel, // set default log level
			// format the level in the log to be uppercase.
			formatters: {
				level: (label) => {
					return { level: label.toUpperCase() };
				}
			},
			transport: {
				target: "pino-pretty",
				options: {
					colorize: true, // show colors in log
					levelFirst: true, // show levels first in log
					translateTime: true // translate the time in human readable format
				}
			}
		};
	} else {
		// If logger is running in the server, do not pretty print it.
		pinoOptions = {
			level: defaultLogLevel,
			formatters: {
				level: (label) => {
					return { level: label.toUpperCase() };
				}
			}
		};
	}

	// Create the base logger
	const baseLogger = pino(pinoOptions);

	// Create our extended logger with the setLogLevel method
	const extendedLogger = Object.assign(baseLogger, {
		setLogLevel: function () {
			let logLevel: LoggerOptions["level"] = defaultLogLevel;

			switch (PUBLIC_ENV) {
				case "DEV":
				case "PREV":
					logLevel = "trace"; // for Development and Preview envs, use trace log level
					break;
				case "STG":
					logLevel = "info"; // info for Staging
					break;
				case "PROD":
					if (browser) {
						logLevel = "silent"; // for Production, silent in browser
					} else {
						logLevel = "info"; // and info in server
					}
					break;
			}

			baseLogger.info(`Logger log level will be set to "${logLevel}".`);
			baseLogger.level = logLevel;

			return logLevel;
		}
	}) as PinoLogger;

	// Set log level immediately
	extendedLogger.setLogLevel();

	return extendedLogger;
})();

// Create a Readable store for the logger
const pinoLoggerStore: Readable<PinoLogger> = readable<PinoLogger>(loggerInstance);

// Export the logger instance directly
export const logger = loggerInstance;

// The store can be accessed if needed for subscription
export const loggerStore = pinoLoggerStore;
