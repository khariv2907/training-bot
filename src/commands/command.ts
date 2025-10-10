/* eslint-disable no-unused-vars */
import { Command } from "Src/enums/Command";
import { CommandGroup, LanguageCodes } from "@grammyjs/commands";
import { BotContext } from "Src/types/context";
import { I18n } from "@grammyjs/i18n";

/**
 * Class BaseCommand
 */
export abstract class BaseCommand {
    protected i18n: I18n<BotContext>;
    protected commandGroup: CommandGroup<BotContext>;

    protected abstract command: Command;

    /**
     * BaseCommand class cunstructor
     *
     * @param commandGroup - CommandGroup instance
     * @param i18n - Localization instance
     */
    constructor(commandGroup: CommandGroup<BotContext>, i18n: I18n<BotContext>) {
        this.commandGroup = commandGroup;
        this.i18n = i18n;
    }

    /**
     * Handle the command
     * 
     * @param ctx - bot context
     */
    protected abstract handle(ctx: BotContext): Promise<void>;

    /**
     * Register the command
     */
    public boot(): void {
        this.buildCommand(this.command, this.handle.bind(this));
      }

    /**
     * Build command
     *
     * @param command - command name
     * @param handler - command handler function
     */
    protected buildCommand(command: Command, handler: (ctx: BotContext) => Promise<void>) {
        this.commandGroup
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
        return this.i18n.fluent.translate(locale, `commands-${command}`);
    }
};