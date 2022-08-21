import pino from 'pino'

const devOptions = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
}

export const logger = pino(
  process.env.NODE_ENV !== 'production' ? devOptions : {},
)
