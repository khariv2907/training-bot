import { Keyboard } from "grammy";

export const TestKeyboard = new Keyboard()
    .text("📅 План тренувань")
    .text("💾 Мій профіль")
    .row()
    .text("⚙️ Налаштування")
    .resized();