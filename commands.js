import { HttpsProxyAgent } from 'https-proxy-agent'
import nodeFetch from 'node-fetch'
import 'dotenv/config'

async function installGlobalCommands(appId, commands) {
  try {
    const endpoint = `applications/${appId}/commands`
    const url = `https://discord.com/api/v10/${endpoint}`

    const response = await nodeFetch(url, {
      headers: {
        Authorization: `Bot ${process.env['DISCORD_TOKEN'] ?? ''}`,
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'DiscordBot',
      },
      method: 'PUT',
      body: JSON.stringify(commands),
      agent: new HttpsProxyAgent('http://127.0.0.1:7890')
    })

    if (!response.ok) {
      console.log(response.status)
      throw new Error(JSON.stringify(await response.json()))
    } else {
      console.log("Put discord request successfully")
    }
  } catch (_error) {
    console.error(_error)
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
    }
  ]
}

const ALL_COMMANDS = [GRIND_COMMAND];

(async () => {
  await installGlobalCommands(process.env['APP_ID'], ALL_COMMANDS)
})()
