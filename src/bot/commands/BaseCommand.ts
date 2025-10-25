/* eslint-disable no-unused-vars */
import { CommandGroup, LanguageCodes } from "@grammyjs/commands";
import { Command } from "Src/enums/Command";
import { BotContext } from "Src/types/context";
import { i18n } from "Src/bot/i18n";

/**
 * Class BaseCommand
 */
export abstract class BaseCommand {
    protected abstract command: Command;

    /**
     * Handle the command
     * 
     * @param ctx - bot context
     */
    protected abstract handle(ctx: BotContext): Promise<void>;

    /**
     * Register the command
     */
    public register(commandGroup: CommandGroup<BotContext>): void {
        this.buildCommand(commandGroup, this.command, this.handle.bind(this));
    }

    /**
     * Build command
     *
     * @param commandGroup - command group instance
     * @param command - command name
     * @param handler - command handler function
     */
    protected buildCommand(commandGroup: CommandGroup<BotContext>, command: Command, handler: (ctx: BotContext) => Promise<void>) {
        commandGroup
            .command(command, this.t(LanguageCodes.English, command))
            .localize(LanguageCodes.Ukrainian, command, this.t(LanguageCodes.Ukrainian, command))
            .addToScope({ type: "all_private_chats" }, handler);
    }

    /**
     * Helper function to get translation for command description
     *
     * @param locale - needed locale
     * @param command - needed command
     * @returns translated command description
     */
    private t(locale: string, command: Command): string
    {
        return i18n.fluent.translate(locale, `commands-${command}`);
    }
};