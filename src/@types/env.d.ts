declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SLACK_SIGNING_SECRET: string
      SLACK_BOT_TOKEN: string
      SLACK_APP_TOKEN: string
      NODE_ENV: 'production' | 'development'
    }
  }
}
export {}
