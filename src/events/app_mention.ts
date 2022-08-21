import { Middleware, SlackEventMiddlewareArgs } from '@slack/bolt'
import { logger } from '../clients/logger'

const appMention: Middleware<SlackEventMiddlewareArgs<'app_mention'>> = async ({
  client,
  payload,
  context,
}) => {
  try {
    logger.info(payload)
    await client.chat.postMessage({
      channel: payload.channel,
      text: `Hey <@${payload.user}> :wave:`,
    })
  } catch (error) {
    logger.error(error)
  }
}

export { appMention }
