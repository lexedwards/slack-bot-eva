import { slackClient } from './clients/slack'
import { logger } from './clients/logger'
import { appMention } from './events/app_mention'
import { directMessage } from './events/directMessage'
import { sayHi } from './slashCommands/sayhi'

slackClient.event('app_mention', appMention)
slackClient.message(directMessage)
slackClient.command(`/hieva`, sayHi)
;(async () => {
  await slackClient.start()
  logger.info(`⚡️ Slack App is starting...`)
})()
