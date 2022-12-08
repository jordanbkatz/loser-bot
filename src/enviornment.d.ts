declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_URI: string;
            BOT_TOKEN: string;
        }
    }
}

export {}