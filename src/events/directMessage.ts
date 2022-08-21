import { Middleware, SlackEventMiddlewareArgs } from '@slack/bolt'
import { logger } from '../clients/logger'

const directMessage: Middleware<SlackEventMiddlewareArgs<'message'>> = async ({
  say,
  payload,
}) => {
  try {
    logger.info(payload)
    await say(`:wave:`)
  } catch (error) {
    logger.error(error)
  }
}

export { directMessage }
