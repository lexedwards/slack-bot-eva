import { slackClient } from './clients/slack'
import { logger } from './clients/logger'
import { appMention } from './events/app_mention'
import { directMessage } from './events/directMessage'

slackClient.event('app_mention', appMention)
slackClient.message(directMessage)
;(async () => {
  await slackClient.start()
  logger.info(`⚡️ Slack App is starting...`)
})()
