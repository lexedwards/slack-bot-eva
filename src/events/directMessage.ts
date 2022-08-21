import { Middleware, SlackEventMiddlewareArgs } from '@slack/bolt'
import { logger } from '../clients/logger'

const directMessage: Middleware<SlackEventMiddlewareArgs<'message'>> = async ({
  say,
  payload,
}) => {
  logger.info(payload)
  await say(`:wave:`)
}

export { directMessage }
