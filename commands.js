import { HttpsProxyAgent } from 'https-proxy-agent'
import nodeFetch from 'node-fetch'

async function installGlobalCommands(commands, isProxy = false) {
  try {
    const endpoint = `applications/${process.env['DISCORD_APP_ID']}/commands`
    const url = `https://discord.com/api/v10/${endpoint}`
    const initParams = {
      headers: {
        Authorization: `Bot ${process.env['DISCORD_TOKEN'] ?? ''}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'DiscordBot',
      },
      method: 'PUT',
      body: JSON.stringify(commands),
    }

    if (isProxy) {
      initParams['agent'] = new HttpsProxyAgent('http://127.0.0.1:7890')
    }

    const response = await nodeFetch(url, initParams)

    if (!response.ok) {
      throw new Error(JSON.stringify(await response.json()))
    } else {
      console.log('true')
    }
  } catch (_) {
    console.log('false')
  }
}

const GRIND_COMMAND = {
  name: 'grind',
  description: 'Show weapons manifest now.',
  type: 1,
  options: [
    {
      "name": "token",
      "description": "The access token",
      "type": 3,
      "required": true
    },
    {
      "name": "id",
      "description": "The account id",
      "type": 3,
      "required": false
    }
  ]
}

const ALL_COMMANDS = [GRIND_COMMAND];

(async () => {
  const isProxy = process.argv.includes('--isproxy')
  await installGlobalCommands(ALL_COMMANDS, isProxy)
})()
