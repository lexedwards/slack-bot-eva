import { logger } from './logger'
import { App, LogLevel } from '@slack/bolt'
import process from 'node:process'
export const slackClient = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logger: {
    debug: msgs => {
      logger.debug(msgs)
    },
    info: msgs => {
      logger.info(msgs)
    },
    warn: msgs => {
      logger.warn(msgs)
    },
    error: msgs => {
      logger.error(msgs)
    },
    setLevel: _level => {
      // Not empty
    },
    getLevel: () => {
      return LogLevel.INFO
    },
    setName: _name => {
      // Not empty
    },
  },
})
