import { CommandGroup } from "@grammyjs/commands";
import { CommandContract } from "Src/types/commands";
import { BotContext } from "Src/types/context";

/**
 * Class BaseCommandGroup
 */
export abstract class BaseCommandGroup {
    protected commandGroup: CommandGroup<BotContext>;

    /**
     * BaseCommandGroup constructor
     */
    public constructor() {
        this.commandGroup = this.createGroupInstance();

        // Register commands for the group
        this.register();
    }

    /**
     * Return lsit of group commands instances
     */
    protected abstract commands(): CommandContract[];

    /**
     * Return an instance of CommandGroup
     */
    protected createGroupInstance(): CommandGroup<BotContext> {
        return new CommandGroup<BotContext>();
    };

    /**
     * Register all commands
     */
    protected register(): void {
        this.commands().forEach((command: CommandContract) => command.register(this.commandGroup));
    }

    /**
     * Return the CommandGroup instance
     */
    public getCommandGroup(): CommandGroup<BotContext> {
        return this.commandGroup;
    }
}