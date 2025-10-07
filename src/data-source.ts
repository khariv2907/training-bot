import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

if (!process.env.DB_HOST || !process.env.DB_PORT || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    throw new Error("Database configuration is not set. 222");
}

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    subscribers: [],
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    });

export async function initDatabase() {
    try {
      await AppDataSource.initialize();
      console.log("✅ MariaDB connected");
    } catch (err) {
      console.error("❌ Failed to connect to MariaDB:", err);
      process.exit(1);
    }
  }
