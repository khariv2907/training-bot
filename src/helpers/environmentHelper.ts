import { Environment } from "Src/enums/Environment";
import "dotenv/config";

/**
 * Whether the environment is production
 *
 * @returns true if prduction
 */
export const isProduction = () => process.env.NODE_ENV === Environment.PRODUCTION;