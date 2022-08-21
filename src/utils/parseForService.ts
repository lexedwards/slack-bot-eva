import { Context } from '@slack/bolt'

interface ParseOptions {
  message: string
  context: Context
  userId?: string
}

export enum ERROR_CODE {
  NO_MESSAGE,
  NO_COMMAND,
}

export function parseForService({
  message = '',
  context,
  userId,
}: ParseOptions) {
  if (!message) {
    return {
      botId: context.botUserId,
      userId,
      error: {
        code: ERROR_CODE.NO_MESSAGE,
        message: 'No Message recieved',
      },
    }
  }
  const BOT_MENTION = `<@${context.botUserId}>`
  const postMention = message.split(BOT_MENTION)[1]
  const [command, ...args] = postMention.split(' ')

  if (!command) {
    return {
      botId: context.botUserId,
      userId,
      error: {
        code: ERROR_CODE.NO_COMMAND,
        message: 'No command recieved',
      },
    }
  }

  return {
    botId: context.botUserId,
    userId,
    command,
    args,
  }
}
