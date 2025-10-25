import { BotKernel } from "./kernel";
import { CommandsModule } from "Bot/commands";
import { MenusModule } from "Bot/menus";

/**
 * Bootstrap the bot modules
 */
export async function bootstrap() {
  const kernel = new BotKernel();

  await kernel.bootstrap([
    new MenusModule(),
    new CommandsModule(),
  ]);
}