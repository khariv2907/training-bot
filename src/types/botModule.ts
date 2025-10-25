/* eslint-disable no-unused-vars */
import { BotKernel } from "Src/bot/kernel";

/**
 * Interface BotModule
 */
export interface BotModule {
    register(kernel: BotKernel): void | Promise<void>;
  }