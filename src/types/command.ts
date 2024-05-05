const enum DiscordCommandOptionType {
    STRING = 3
}

interface DiscordCommandOptionMapping {
    3: string
}

interface DiscordCommandOption<T extends DiscordCommandOptionType = DiscordCommandOptionType.STRING> {
    name: string
    type: DiscordCommandOptionType
    value: DiscordCommandOptionMapping[T]
}

interface DiscordCommand {
    id: string
    name: string
    type: number
    options: DiscordCommandOption[]
}

interface DiscordCommandRequest {
    type: number
    id: string
    data: DiscordCommand
}

interface DiscordCommandOptionDefinition {
    name: string
    description: string
    type: DiscordCommandOptionType
    required: boolean
}


interface DiscordCommandDefinition {
    name: string
    description: string
    type: number
    options: DiscordCommandOptionDefinition[]
}

export type { DiscordCommandRequest, DiscordCommand, DiscordCommandOption, DiscordCommandOptionType, DiscordCommandDefinition }
