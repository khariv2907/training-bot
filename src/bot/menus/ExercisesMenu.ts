import { Menu } from "@grammyjs/menu";

export const ExercisesMenu = new Menu("my-menu-identifier")
    .text("A", (ctx) => ctx.reply("Вы нажали A!"))
    // .row()
    .text("B", (ctx) => ctx.reply("Вы нажали B!"));