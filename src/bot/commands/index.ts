import { bot } from "Src/bot";
import { BotKernel } from "Bot/kernel";
import { PublicCommandsGroup } from "Bot/commands/public";
import { AdminCommandsGroup } from "Bot/commands/admin";
import { BotModule } from "Src/types/botModule";

/**
 * Class CommandsModule
 */
export class CommandsModule implements BotModule {
    /**
     * Register all commands
     */
    async register(kernel: BotKernel) {
       await this.registerPublicCommands(kernel);

       // eslint-disable-next-line no-constant-condition
       if (true) {
        await this.registerAdminCommands(kernel);
       }
    }

    private async registerPublicCommands(kernel: BotKernel): Promise<void> {
        const commandsGroup = new PublicCommandsGroup().getCommandGroup();

        await commandsGroup.setCommands(bot);

        kernel.add(commandsGroup);
    }

    private async registerAdminCommands(kernel: BotKernel): Promise<void> {
        const commandsGroup = new AdminCommandsGroup().getCommandGroup();

        kernel.add(commandsGroup);
    }
}
