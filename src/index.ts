import { InteractionType, InteractionResponseType } from 'discord-interactions'
import { Elysia } from 'elysia'
import { getGrindReport } from './libs/atoma.ts'
import { verifyDiscordRequest } from './libs/util.ts'
import type { DiscordCommandRequest, DiscordCommandOption, DiscordCommandOptionType } from './types/command.ts'

const PORT = 3000

const app = new Elysia().onError(
  ({ error }) => {
    console.error(error)

    return new Response(error.toString())
  }
).guard({
  beforeHandle({ request, set, body }) {
    const isValid = verifyDiscordRequest(process.env['PUBLIC_KEY'] ?? '', request, JSON.stringify(body))

    console.log(isValid ? 'Valid request' : 'Invalid request')

    if (!isValid) {
      return (set.status = 'Unauthorized')
    }
  }
}, (app) => app.post('/interactions', async ({ body, error }) => {
  const requestBody = body as DiscordCommandRequest

  if (requestBody.type === InteractionType.PING) {
    console.log('Received ping')

    return new Response(JSON.stringify({ type: InteractionResponseType.PONG }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  if (requestBody.type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = requestBody.data

    if (name === 'grind') {
      console.log('Received grind command')

      const tokenOption = options[0] as DiscordCommandOption<DiscordCommandOptionType.STRING>
      let report = await getGrindReport(tokenOption.value)

      if (report.length > 2000) {
        report = report.slice(0, 2000)
      }

      return new Response(JSON.stringify({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: report
        }
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }

  return error(404)
})).listen(PORT)

console.log(`Running at ${app.server?.port} ...`)
