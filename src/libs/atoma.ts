import { lerp, steppedLerp } from './util.ts'
import { CharacterType } from '../types/character.ts'
import displayNames from '../configs/display_names.ts'

enum ShopType {
    ARMOURY_EXCHANGE = 'credits_store',
    MELK_REQUISITORIUM = 'marks_store',
}

const enum ManifestItemType {
    WEAPON = 'weapon',
    GADGET = 'gadget'
}

interface SKU {
    id: string
    displayPriority: number
    internalName: string
    name: string
    description: string
    category: string
    assetId: string
    tags: string[]
    dlcReq: string[]
}

interface Price {
    amount: {
        amount: number
        type: string
    }
    id: string
    priority: number
    priceFormula: string
}

interface Trait {
    id: string
    rarity: number
    value?: number
}

interface Perk {
    id: string
    rarity: number
}

interface BaseStat {
    name: string
    value: number
}

interface Overrides {
    ver: number
    rarity: number
    characterLevel: number
    itemLevel: number
    baseItemLevel: number
    traits: Trait[]
    perks: Perk[]
    base_stats?: BaseStat[]
}

interface Description {
    id: string
    gearId: string
    rotation: string
    type: ManifestItemType
    properties: Record<string, string>
    overrides: Overrides
}

interface ManifestItem {
    offerId: string
    sku: SKU
    entitlement: {
        id: string
        limit: number
        type: string
    }
    price: Price
    state: string
    description: Description
    media: string[]
}

interface Manifest {
    _links: {
        self: {
            href: string
        }
        config: {
            href: string
        }
    }
    catalog: {
        id: string
        name: string
        generation: number
        layoutRef: string
        validFrom: string
        validTo: string
    }
    name: string
    public: ManifestItem[]
    personal: ManifestItem[]
    rerollsThisRotation: number
    currentRotationEnd: string
}

interface WeaponInstanceBaseStat {
    name: string
    value: number
}

interface WeaponInstanceBlessing {
    id: string
    name: string
    level: number
}

interface WeaponInstance {
    id: string
    name: string
    baseStats: WeaponInstanceBaseStat[]
    blessings: WeaponInstanceBlessing[]
    shopType: ShopType
}

interface CurioInstanceBlessing {
    description: string
}

interface CurioInstance {
    blessing: CurioInstanceBlessing
    shopType: ShopType
}

interface GrindReportItem {
    expectedWeaponList: Record<string, WeaponInstance[]>
    highRankWeaponList: WeaponInstance[]
    curioList: CurioInstance[]
}

interface ExpectedWeaponItem {
    rejectType: CharacterType
    weapon: WeaponInstance
}

interface GrindReport {
    expectedWeapons: Record<string, ExpectedWeaponItem[]>
    manifest: { [key in CharacterType]?: GrindReportItem }
}

interface CharacterSummaryItem {
    id: string
    name: string
    gender: string
    archetype: string
    specialization: string
    level: number
}

interface CharacterSummary {
    _links: {
        self: {
            href: string
        }
    }
    username: string
    name: string
    discriminator: string
    allowRename: boolean
    email: {
        verified: boolean
    }
    linkedAccounts: Record<string, string>
    marketingPreferences: Record<string, boolean>
    characters: CharacterSummaryItem[]
}

type CharacterIds = Partial<Record<CharacterType, string>>

const HIGH_RANK_THRESHOLD = 370
const MAX_BLESSING_LEVEL = 4
const CURIO_RARITY_THRESHOLD = 0.7
const EXPECTED_WEAPON_ID_LIST: string[] = [
    'content/items/weapons/player/ranged/autogun_p1_m2'
]
const EXPECTED_BLESSING_ID_LIST: string[] = [
    'content/items/traits/bespoke_autogun_p1/consecutive_hits_increases_close_damage'
]

function getDisplayBlessingLevel(level: number): string {
    switch (level) {
        case 1:
            return '1️⃣'
        case 2:
            return '2️⃣'
        case 3:
            return '3️⃣'
        case 4:
            return '4️⃣'
        default:
            return '❓'
    }
}

function getDisplayShopIcon(shopType: ShopType): string {
    switch (shopType) {
        case ShopType.ARMOURY_EXCHANGE:
            return '🤖'
        case ShopType.MELK_REQUISITORIUM:
            return '🧔'
        default:
            return '❓'
    }
}

function getDisplayBool(value: boolean): string {
    if (value) {
        return '✅'
    } else {
        return '❌'
    }
}

function getDisplayCharacterIcon(characterType: CharacterType): string {
    switch (characterType) {
        case CharacterType.ZEALOT:
            return '👼'
        case CharacterType.VETERAN:
            return '🪖'
        case CharacterType.PSYKER:
            return '🧙'
        case CharacterType.OGRYN:
            return '💪'
        default:
            return '❓'
    }
}

function getDisplayCharacterName(characterType: CharacterType): string {
    switch (characterType) {
        case CharacterType.ZEALOT:
            return 'Zealot'
        case CharacterType.VETERAN:
            return 'Veteran'
        case CharacterType.PSYKER:
            return 'Psyker'
        case CharacterType.OGRYN:
            return 'Ogryn'
        default:
            return ''
    }
}

function getCurioBlessingDescription(id: string, value: number, rawDescription: string): string {
    function calculateGadgetTraitStrength(traitId: string, value: number) {
        let traitStrength = ''

        switch (traitId) {
            case 'content/items/traits/gadget_inate_trait/trait_inate_gadget_toughness':
                traitStrength = `${(parseFloat(lerp(0.05, 0.2, value).toFixed(2)) * 100).toFixed()}%`
                break
            case 'content/items/traits/gadget_inate_trait/trait_inate_gadget_health':
                traitStrength = `${(parseFloat(lerp(0.05, 0.25, value).toFixed(2)) * 100).toFixed()}%`
                break
            case 'content/items/traits/gadget_inate_trait/trait_inate_gadget_health_segment':
                traitStrength = '1'
                break
            case 'content/items/traits/gadget_inate_trait/trait_inate_gadget_stamina':
                traitStrength = steppedLerp([1, 2, 3], value).toString()
                break
        }

        return traitStrength
    }

    return rawDescription.replace(/\{.+?\}/g, calculateGadgetTraitStrength(id, value))
}

async function getCharacterIds(accountId: string, accessToken: string): Promise<CharacterIds> {
    const url = `https://bsp-td-prod.atoma.cloud/web/${accountId}/summary`
    const characterIds: CharacterIds = {}
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (response.ok) {
        const summary = (await response.json()) as CharacterSummary

        for (const character of summary.characters) {
            characterIds[character.archetype as CharacterType] = character.id
        }
    }

    return characterIds
}

async function retrieveWeaponsManifest(
    accessToken: string,
    characterType: CharacterType,
    shopType: ShopType,
    accountId: string,
    characterId: string
): Promise<Manifest | null> {
    const url = `https://bsp-td-prod.atoma.cloud/store/storefront/${shopType}_${characterType}?accountId=${accountId}&personal=true&characterId=${characterId}`
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    if (!response.ok) {
        return null
    }

    return (await response.json()) as Manifest
}

async function retrieveRejectReport(
    accessToken: string,
    characterType: CharacterType,
    accountId: string,
    characterId: string
): Promise<GrindReportItem | null> {
    const reportItem: GrindReportItem = {
        expectedWeaponList: {},
        highRankWeaponList: [],
        curioList: []
    }

    for (const weaponId of EXPECTED_WEAPON_ID_LIST) {
        reportItem.expectedWeaponList[displayNames[weaponId]['display_name'] ?? ''] = []
    }

    let isRetrieved: boolean = false

    for (const shopType of Object.values(ShopType)) {
        const manifest = await retrieveWeaponsManifest(accessToken, characterType, shopType, accountId, characterId)

        if (manifest === null) {
            continue
        }

        isRetrieved = true

        const weaponList: WeaponInstance[] = manifest.personal.filter((item) => item.description.type === ManifestItemType.WEAPON).map((item) => ({
            id: item.description.id,
            name: displayNames[item.description.id]['display_name'] ?? '',
            baseStats: item.description.overrides.base_stats ? item.description.overrides.base_stats.map((desc) => ({ name: displayNames[desc.name]['display_name'] ?? '', value: Math.round(desc.value * 100) })) : [],
            blessings: item.description.overrides.traits.map((trait) => ({ id: trait.id, name: displayNames[trait.id]['display_name'] ?? '', level: trait.rarity })),
            shopType: shopType
        }))

        for (const weaponId of EXPECTED_WEAPON_ID_LIST) {
            const weaponName: string = displayNames[weaponId]['display_name'] ?? ''

            reportItem.expectedWeaponList[weaponName] = reportItem.expectedWeaponList[weaponName].concat(weaponList.filter((item) => item.id === weaponId))
        }

        reportItem.highRankWeaponList = reportItem.highRankWeaponList.concat(weaponList.filter((item) => item.baseStats.reduce((a, b) => a + b.value, 0) >= HIGH_RANK_THRESHOLD))

        reportItem.curioList = reportItem.curioList.concat(manifest.personal.filter((item) => item.description.type === ManifestItemType.GADGET && (item.description.overrides.traits[0].value ?? 0.0) >= CURIO_RARITY_THRESHOLD).map((item) => ({
            blessing: item.description.overrides.traits.map((trait) => ({ description: getCurioBlessingDescription(trait.id, trait.value ?? 0.0, displayNames[trait.id]['description'] ?? '') }))[0],
            shopType: shopType
        })))
    }

    return isRetrieved ? reportItem : null
}

function formatGrindReport(report: GrindReport): string {
    const MAX_TEXT_LENGTH: number = 2000
    let expectedSectionString: string = '# Expected\n'
    let isExpectedExist: boolean = false

    for (const [weaponName, weaponList] of Object.entries(report.expectedWeapons)) {
        const filteredWeaponList = weaponList.filter(expectedWeapon => expectedWeapon.weapon.blessings.length > 0)

        if (filteredWeaponList.length > 0) {
            isExpectedExist = true
            expectedSectionString += `## ${weaponName}\n`

            for (const expectedWeapon of filteredWeaponList) {
                expectedSectionString += `- ${getDisplayCharacterName(expectedWeapon.rejectType as CharacterType)}: ${getDisplayShopIcon(expectedWeapon.weapon.shopType)}\n`

                for (const blessing of expectedWeapon.weapon.blessings) {
                    const isExpectedBlessing: string = EXPECTED_BLESSING_ID_LIST.find(blessingId => blessingId === blessing.id) !== undefined && blessing.level >= MAX_BLESSING_LEVEL ? `${getDisplayBool(true)} ` : ''

                    expectedSectionString += `  - ${isExpectedBlessing}${getDisplayBlessingLevel(blessing.level)} ${blessing.name}\n`
                }
            }
        }
    }

    if (!isExpectedExist) {
        expectedSectionString += '😴 Nothing ...\n'
    }

    if (expectedSectionString.length >= MAX_TEXT_LENGTH) {
        return expectedSectionString.slice(0, MAX_TEXT_LENGTH)
    }

    const remainingLength = MAX_TEXT_LENGTH - expectedSectionString.length
    const MANIFEST_TITLE: string = '# Manifest\n'
    let manifestSectionString: string = MANIFEST_TITLE
    let isCompact: boolean = false

    while (true) {
        let isCharactersExist: boolean = false

        for (const [characterType, reportItem] of Object.entries(report.manifest)) {
            let curSectionString = `## ${getDisplayCharacterIcon(characterType as CharacterType)} ${getDisplayCharacterName(characterType as CharacterType)}\n`
            let isSectionEmpty: boolean = true

            if (reportItem.highRankWeaponList.length > 0) {
                isSectionEmpty = false
                curSectionString += `### High Rank\n`

                for (const weapon of reportItem.highRankWeaponList.sort((weapon1, weapon2) => weapon2.baseStats.reduce((x, y) => x + y.value, 0) - weapon1.baseStats.reduce((x, y) => x + y.value, 0))) {
                    curSectionString += `- ${getDisplayShopIcon(weapon.shopType)} ${weapon.name}\n`
                    curSectionString += `  - 🔷 ${weapon.baseStats.reduce((a, b) => a + b.value, 0)}\n`

                    for (const stat of weapon.baseStats.sort((a, b) => b.value - a.value)) {
                        curSectionString += `    - ${stat.value} ${stat.name}\n`
                    }

                    if (weapon.blessings.length > 0) {
                        curSectionString += `  - ⭐\n`

                        for (const blessing of weapon.blessings) {
                            curSectionString += `    - ${getDisplayBlessingLevel(blessing.level)} ${blessing.name}\n`
                        }
                    }

                    if (isCompact) {
                        // just show one item if compact
                        break
                    }
                }
            }

            if (reportItem.curioList.length > 0) {
                isSectionEmpty = false
                curSectionString += `### Curios\n`

                for (const curio of reportItem.curioList) {
                    curSectionString += `- ${getDisplayShopIcon(curio.shopType)} ${curio.blessing.description}\n`

                    if (isCompact) {
                        // just show one item if compact
                        break
                    }
                }
            }

            if (!isSectionEmpty) {
                isCharactersExist = true
                manifestSectionString += curSectionString
            }
        }

        if (!isCharactersExist) {
            manifestSectionString += '😴 Nothing ...\n'
        }

        if (manifestSectionString.length <= remainingLength) {
            break
        } else {
            if (!isCompact) {
                manifestSectionString = MANIFEST_TITLE
                isCompact = true
            } else {
                manifestSectionString = manifestSectionString.slice(0, remainingLength)
                break
            }
        }
    }

    return manifestSectionString + expectedSectionString
}

async function getGrindReport(accountId: string, accessToken: string): Promise<string> {
    try {
        const report: GrindReport = {
            expectedWeapons: {},
            manifest: {}
        }

        const characterTypeList = Object.values(CharacterType)
        const characterIds = await getCharacterIds(accountId, accessToken)
        const reportItemList = await Promise.all(characterTypeList.map((rejectType) => retrieveRejectReport(accessToken, rejectType, accountId, characterIds[rejectType] ?? '')))

        for (let i = 0; i < characterTypeList.length; i += 1) {
            const reportItem = reportItemList[i]

            if (reportItem === null) { continue }

            report.manifest[characterTypeList[i]] = reportItem
        }

        for (const weaponId of EXPECTED_WEAPON_ID_LIST) {
            const weaponName: string = displayNames[weaponId]['display_name'] ?? ''

            report.expectedWeapons[weaponName] = []

            for (const characterType of Object.values(CharacterType)) {
                if (!report.manifest[characterType]) { continue }

                for (const weapon of report.manifest[characterType].expectedWeaponList[weaponName]) {
                    report.expectedWeapons[weaponName].push({
                        rejectType: characterType,
                        weapon: weapon
                    })
                }
            }
        }

        return formatGrindReport(report)
    } catch (error) {
        console.log(error)
        return '😭 Retrieving grind report failed...'
    }
}

export { getGrindReport }
