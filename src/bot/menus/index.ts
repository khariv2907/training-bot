import { BotKernel } from "Src/bot/kernel";
import { BotModule } from "Src/types/botModule";
import { ExercisesMenu } from "Src/bot/menus/ExercisesMenu";

/**
 * Class MenusModule
 */
export class MenusModule implements BotModule {
    /**
     * Register all menus
     */
    async register(kernel: BotKernel) {
        kernel.add(ExercisesMenu);
    }
}
