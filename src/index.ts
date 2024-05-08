import { InteractionType, InteractionResponseType, verifyKey } from 'discord-interactions'
import { AutoRouter } from 'itty-router'
import type { IRequest } from 'itty-router'
import { getGrindReport } from './libs/atoma.ts'
import type { DiscordCommandOption, DiscordCommandOptionType, DiscordCommand } from './types/command.ts'

class JsonResponse extends Response {
  constructor(body: any, init?: any) {
    const jsonBody = JSON.stringify(body)
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }

    super(jsonBody, init)
  }
}

async function verifyDiscordRequest(request: IRequest, env: any) {
  const signature = request.headers.get('x-signature-ed25519')
  const timestamp = request.headers.get('x-signature-timestamp')
  const body = await request.text()

  const isValidRequest =
    signature &&
    timestamp &&
    verifyKey(body, signature, timestamp, env['DISCORD_PUBLIC_KEY'] ?? '')

  if (!isValidRequest) {
    return { isValid: false }
  }

  return { interaction: JSON.parse(body), isValid: true }
}

const router = AutoRouter()

router.get('/', async () => {
  return new Response(`👋 Hello`)
})

// router.get('/', async (_, env) => {
//   return new Response(await getGrindReport(env['ATOMA_ACCOUNT_ID'] ?? '', env['ATOMA_ACCESS_TOKEN'] ?? ''))
// })

router.post('/interactions', async (request, env) => {
  const { isValid, interaction } = await verifyDiscordRequest(request, env)

  if (!isValid || !interaction) {
    return new Response('Bad request signature.', { status: 401 })
  }

  if (interaction.type === InteractionType.PING) {
    console.log('Received ping')

    return new JsonResponse({
      type: InteractionResponseType.PONG
    })
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = interaction.data as DiscordCommand

    if (name === 'grind') {
      console.log('Received grind command')

      const tokenOption = options.length > 0 ? (options[0] as DiscordCommandOption<DiscordCommandOptionType.STRING>).value : ''
      const accountIdOption = options.length > 1 ?
        (options[1] as DiscordCommandOption<DiscordCommandOptionType.STRING>).value :
        (env['ATOMA_ACCOUNT_ID'] ?? '')
      const report = await getGrindReport(accountIdOption, tokenOption)

      return new JsonResponse({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: report
        }
      })
    }
  }

  return new JsonResponse({ error: 'Unknown Type' }, { status: 400 })
})

router.all('*', () => new Response('Not Found.', { status: 404 }))

const server = {
  fetch: router.fetch
}

export default server
