import { Middleware, SlackCommandMiddlewareArgs } from '@slack/bolt'

export const sayHi: Middleware<SlackCommandMiddlewareArgs> = async ({
  ack,
  say,
  payload,
}) => {
  await ack()
  say({ text: `Hi <@${payload.user_id}> :wave:`, reply_broadcast: false })
}
