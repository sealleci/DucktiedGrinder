interface DisplayNameConfig {
    [key: string]: {
        display_name?: string
        description?: string
    }
}

const displayNames: DisplayNameConfig = {
    "forcestaff_p2_m1_size_of_flame_stat": {
        "display_name": "Cloud Radius"
    },
    "content/items/curios/curio_c_b02": {
        "display_name": "Gilded Mandible (Casket)",
        "description": "Looketh not to the God-Emperor for salvation, for he hath given thee the tools to claim it for thyself! \n\nAttributed to Saint Messelina \n>>timestamp -21.2.32.KE.M39<<"
    },
    "content/items/gadgets/defensive_gadget_15": {
        "display_name": "Laurel of the Righteous (Reliquary)"
    },
    "combatsword_p3_m2_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/traits/bespoke_combatsword_p3/dodge_grants_finesse_damage": {
        "display_name": "Precognition",
        "description": "+{damage:%s} Finesse Damage for {time:%s}s on successful Dodge."
    },
    "content/items/traits/bespoke_bolter_p1/stacking_power_bonus_on_staggering_enemies": {
        "display_name": "Pinning Fire",
        "description": "+{power_level:%s} Power for every Enemy you Stagger. Stacks {stacks:%s} times. "
    },
    "content/items/traits/bespoke_ogryn_club_p2/toughness_recovery_on_multiple_hits": {
        "display_name": "Momentum",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, restores {toughness:%s} toughness."
    },
    "combataxe_p3_m1_defence_stat": {
        "display_name": "Defences"
    },
    "powersword_p1_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/traits/bespoke_thumper_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/traits/bespoke_powermaul_p1/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/perks/melee_common/wield_increase_attack_speed": {
        "description": "+{attack_speed:%s} Melee Attack Speed"
    },
    "content/items/traits/bespoke_autogun_p1/improved_sprint_dodge": {
        "display_name": "Bug Out",
        "description": "+{movement_speed:%s} Sprint speed for {time:%s}s after Dodging a Ranged Attack."
    },
    "content/items/traits/bespoke_chainaxe_p1/targets_receive_rending_debuff": {
        "display_name": "Thunderous",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on Hit. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_autopistol_p1/stacking_crit_bonus_on_continuous_fire": {
        "display_name": "Cavalcade",
        "description": "+{crit_chance:%s} Critical Chance for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "ogryn_gauntlet_p1_m1_dps_stat": {
        "display_name": "Melee Damage"
    },
    "combataxe_p3_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "forcestaff_p2_m1_warp_charge_cost_stat": {
        "display_name": "Warp Resistance"
    },
    "content/items/perks/gadget_common/trait_gadget_cooldown": {
        "description": "+{ability_cooldown_modifier:%s} Combat Ability Regeneration"
    },
    "content/items/traits/bespoke_forcestaff_p1/rend_armor_on_aoe_charge": {
        "display_name": "Rending Shockwave",
        "description": "Target receives up to {stacks:%s} Stacks of {rending:%s} Brittleness, scaling with charge time of Secondary Attack. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_forcesword_p1/warp_burninating_on_crit": {
        "display_name": "Blazing Spirit",
        "description": "Enemy gains +{stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). "
    },
    "chainsword_2h_mobility_stat": {
        "display_name": "Mobility"
    },
    "combatknife_p1_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_ogryn_club_p1/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Brutal Momentum",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "content/items/curios/curio_a_h01": {
        "display_name": "Laurel of the Righteous (Caged)",
        "description": "Even from the first, Sister Messelina saw much that was hidden from others. Even from Cardinal Taric.\n\nFrom Caladoc's Life of Messelina, Vol. II"
    },
    "content/items/perks/ranged_common/wield_increase_super_armor_damage": {
        "description": "+{damage:%s} Damage (Carapace Armoured Enemies)"
    },
    "lasgun_p3_m3_control_stat": {
        "display_name": "Collateral"
    },
    "content/items/traits/bespoke_autogun_p1/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/power_bonus_on_chained_hits_on_single_target": {
        "display_name": "Overwhelming Fire",
        "description": "+{power:%s} Power for every {hit:%s} Single Target Hits. Lasts {time:%s}s and Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/increase_power_on_hit": {
        "display_name": "Headtaker",
        "description": "+{power_level:%s} Power for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "combatsword_p3_m2_finesse_stat": {
        "display_name": "Finesse"
    },
    "chainsword_p1_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_combatsword_p3/guaranteed_stagger_on_critical_hit": {
        "display_name": "Mighty Blow",
        "description": "Guaranteed Stagger (Next Attack) on Critical Hit."
    },
    "forcestaff_p2_m1_damage_stat": {
        "display_name": "Damage"
    },
    "lasgun_p3_m3_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_combataxe_p2/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "lasgun_p3_m1_stability_stat": {
        "display_name": "Stability"
    },
    "lasgun_p2_m2_dps_stat": {
        "display_name": "Damage"
    },
    "ogryn_thumper_p1_m2_explosion_damage_stat": {
        "display_name": "Blast Damage"
    },
    "content/items/perks/melee_common/wield_increase_armored_damage": {
        "description": "+{damage:%s} Damage (Flak Armoured Enemies)"
    },
    "autogun_p2_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/player/melee/combatsword_p2_m2": {
        "display_name": "Turtolsky Mk VII Heavy Sword",
        "description": "The curved, single-edged blades of Turtolsky swords are designed to deliver punishing, sweeping blows to massed foes, though their armour penetration can be poor."
    },
    "content/items/weapons/player/melee/combatknife_p1_m2": {
        "display_name": "Catachan Mk VI Combat Blade",
        "description": "Sometimes called the Catachan Fang, these hefty combat knives are known and feared across a thousand battle zones."
    },
    "content/items/weapons/player/melee/combatknife_p1_m1": {
        "display_name": "Catachan Mk III Combat Blade",
        "description": "They say a Catachan Jungle Fighter can take down a full-grown Cudbear with one of these knives. Well, anything they can do, the Moebian 100th can do better!\n- Major Neena Kolfex"
    },
    "content/items/weapons/player/melee/chainsword_p1_m2": {
        "display_name": "Cadia Mk XIIIg Assault Chainsword",
        "description": "The chainsword has developed little since the Dark Age of Technology. As a brutally effective tool against heresy, why fix what isn't broken?"
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/power_bonus_based_on_charge_time": {
        "display_name": "Pinpointing target",
        "description": "+{power_level:%s} Power every {time:%s} seconds while aiming, stacking {stacks:%s} times. Discharges all stacks upon firing."
    },
    "lasgun_p2_m2_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/weapons/player/ranged/ogryn_heavystubber_p1_m1": {
        "display_name": "Krourk Mk V Twin-Linked Heavy Stubber",
        "description": "Nothing gets an Ogryn's blood up quite like the deafening noise and high-power recoil of a full-auto heavy weapon, and they don't come much louder or more powerful than a twin-linked heavy stubber."
    },
    "autogun_p2_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/player/ranged/ogryn_heavystubber_p1_m2": {
        "display_name": "Gorgonum Mk IV Twin-Linked Heavy Stubber",
        "description": "The Tech-Adepts of Gorgonum see rapid-fire weaponry as something of a speciality, although making a heavy stubber durable enough for Ogryn use was something of a challenge."
    },
    "content/items/weapons/npc/forcesword_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_thumper_p2/toughness_on_elite_kills": {
        "display_name": "Gloryhunter",
        "description": "+{toughness:%s} Toughness on Elite Kill."
    },
    "powersword_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_forcesword_p1/dodge_grants_crit_chance": {
        "display_name": "Riposte",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge."
    },
    "content/items/weapons/player/melee/chainsword_p1_m1": {
        "display_name": "Cadia Mk IV Assault Chainsword",
        "description": "With their honed, monomolecular-edged teeth, chainswords are prized within the Astra Militarum, where they are often issued to squad sergeants as a symbol of authority."
    },
    "content/items/weapons/player/ranged/forcestaff_p4_m1": {
        "display_name": "Equinox Mk IV Voidstrike Force Staff",
        "description": "\rLet your mind be the weapon. The staff is merely there to light the darkness.\n\nPrimaris Psyker Glena Tor"
    },
    "content/items/traits/bespoke_stubrevolver_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/traits/bespoke_lasgun_p3/burninating_on_crit": {
        "display_name": "Infernus",
        "description": "+{stacks:%s} Burn Stack(s) on Critical Hit to a maximum of {max_stacks:%s} Stack(s)."
    },
    "content/items/traits/bespoke_thumper_p2/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every shot fired during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_thumper_p1/shot_power_bonus_after_weapon_special_cleave": {
        "display_name": "Punishing Fire",
        "description": "{power_level:%s} Power bonus on your ranged attack for {time:%s} seconds after cleaving through several enemies with your weapon's special attack."
    },
    "autogun_p3_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_thumper_p1/pass_past_armor_on_weapon_special": {
        "display_name": "Pierce",
        "description": "Special Attacks ignore Hit Mass Bonus from Armour."
    },
    "content/items/traits/bespoke_shotgun_p1/increase_close_damage_on_close_kill": {
        "display_name": "Fire Frenzy",
        "description": "Gain +{close_damage:%s} Close Damage for {time:%s} seconds after killing an enemy at close range, stacking {stacks:%s} times."
    },
    "content/items/curios/curio_b_h02": {
        "display_name": "Laurel of the Just (Reliquary)",
        "description": "Gloriana belongs to the Emperor. He that would rest while even one heretic draws breath defies the God-Emperor!\n\nAttributed to Saint Messelina \n>>timestamp -18.2.35.KE.M39<<"
    },
    "content/items/traits/bespoke_powersword_p1/increased_melee_damage_on_multiple_hits": {
        "display_name": "Rampage",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds."
    },
    "content/items/traits/bespoke_chainsword_2h_p1/pass_past_armor_on_crit": {
        "display_name": "Perfect Strike",
        "description": "Critical Hits ignore Hit Mass Bonus from Armour."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/suppression_on_continuous_fire": {
        "display_name": "Ceaseless Barrage",
        "description": "+{suppression:%s} Suppression for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/curios/curio_c_e02": {
        "display_name": "Gilded Inquisitorial Rosette (Casket)",
        "description": "Heresy ran deep through Komaris. Through blood and bond of every kind.\n\nFrom Caladoc's Life of Messelina, Vol. XV"
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/infinite_melee_cleave_on_crit": {
        "display_name": "Devastating Strike",
        "description": "+{hit_mass:%s} Cleave for {time:%s} seconds on Critical Hit."
    },
    "lasgun_p2_m1_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "content/items/perks/ranged_common/wield_increase_stamina": {
        "description": "+{stamina:%s} Stamina (Weapon is Active)"
    },
    "content/items/traits/bespoke_ogryn_club_p2/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_ogryn_club_p2/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_club_p2/ignore_stagger_reduction_on_punch_weakspot_hit": {
        "display_name": "Batter",
        "description": "-{stagger_reduction:%s} Target Stagger Resistance for {time:%s}s on Weak Spot Special Action Hit."
    },
    "content/items/traits/bespoke_laspistol_p1/count_as_dodge_vs_ranged_on_weakspot": {
        "display_name": "Ghost",
        "description": "Immune to Ranged Attacks for {time:%s}s on Weak Spot Hit."
    },
    "lasgun_p3_m2_control_stat": {
        "display_name": "Collateral"
    },
    "bolter_p1_m1_control_stat": {
        "display_name": "Collateral"
    },
    "content/items/traits/bespoke_lasgun_p2/burninating_on_crit": {
        "display_name": "Infernus",
        "description": "+{stacks:%s} Burn Stack(s) on Critical Hit to a maximum of {max_stacks:%s} Stack(s)."
    },
    "content/items/traits/bespoke_lasgun_p1/suppression_negation_on_weakspot": {
        "display_name": "Between the Eyes",
        "description": "Gain Suppression Immunity for {time:%s}s on Weak Spot Hit."
    },
    "content/items/traits/bespoke_lasgun_p1/stagger_count_bonus_damage": {
        "display_name": "No Respite",
        "description": "Up to +{damage:%s} Damage on Hit (Staggered Enemy), scaling with Stagger."
    },
    "content/items/traits/bespoke_lasgun_p1/power_bonus_on_first_shot": {
        "display_name": "Opening Salvo",
        "description": "+{power_level:%s} Power on Salvo's First shot."
    },
    "content/items/traits/bespoke_lasgun_p1/negate_stagger_reduction_on_weakspot": {
        "display_name": "Falter",
        "description": "+{stagger:%s} Target Stagger on Weak Spot Hit."
    },
    "content/items/traits/bespoke_thumper_p2/crit_chance_on_projectile_impact": {
        "display_name": "Quake Shot",
        "description": "+{crit_chance:%s} for {time:%s}s on hitting Armour."
    },
    "content/items/traits/bespoke_forcestaff_p3/uninterruptable_while_charging": {
        "display_name": "Focused Channelling",
        "description": "Your Secondary Attack cannot be interrupted."
    },
    "content/items/perks/gadget_common/trait_gadget_toughness_increase": {
        "description": "+{toughness_bonus:%s} Toughness"
    },
    "content/items/traits/bespoke_forcestaff_p3/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcestaff_p3/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/traits/bespoke_forcestaff_p2/uninterruptable_while_charging": {
        "display_name": "Focused Channelling",
        "description": "Your Secondary Attack cannot be interrupted."
    },
    "chainsword_p1_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_forcestaff_p2/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/traits/bespoke_forcestaff_p1/warpfire_burn_on_crit": {
        "display_name": "Blazing Spirit",
        "description": "Enemy gains +{stacks:%s} Stacks of Soulblaze on Critical Hit."
    },
    "content/items/traits/bespoke_forcestaff_p1/uninterruptable_while_charging": {
        "display_name": "Focused Channelling",
        "description": "Your Secondary Attack cannot be interrupted."
    },
    "content/items/traits/bespoke_forcestaff_p1/peril_vent_on_weakspot_hit": {
        "display_name": "Transfer Peril",
        "description": "Quell {warp_charge:%s} of your Peril on Weak Spot Hit."
    },
    "plasmagun_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "content/items/traits/bespoke_thumper_p2/increased_damage_on_staggered_enemies": {
        "display_name": "Finisher",
        "description": "+{damage:%s} Damage (Staggered Enemies)."
    },
    "combatsword_p3_m1_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/traits/bespoke_rippergun_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcestaff_p1/double_shot_on_crit": {
        "display_name": "Surge",
        "description": "{value:%s} Shots on Critical Hit."
    },
    "lasgun_p1_m2_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/traits/bespoke_forcestaff_p1/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/traits/bespoke_combatsword_p3/dodge_grants_crit_chance": {
        "display_name": "Riposte",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge."
    },
    "content/items/weapons/player/ranged/lasgun_p1_m2": {
        "display_name": "Kantrael MG IV Infantry Lasgun",
        "description": "The MG Mk IV was something of a short-lived experiment, sacrificing stopping power in favour of improved rate of fire."
    },
    "content/items/traits/bespoke_forcesword_p1/dodge_grants_finesse_damage": {
        "display_name": "Precognition",
        "description": "+{damage:%s} Finesse Damage for {time:%s}s on successful Dodge."
    },
    "laspistol_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/traits/bespoke_plasmagun_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every shot fired during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/hit_mass_consumption_reduction_on_kill": {
        "display_name": "Shock & Awe",
        "description": "-{hit_mass:%s} Enemy Hit Mass for {time:%s}s on Kill. "
    },
    "chainsword_p1_m2_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/traits/bespoke_autogun_p2/increased_sprint_speed": {
        "display_name": "Stripped Down",
        "description": "Gain Ranged Attack Immunity while sprinting with over {stamina:%s} Stamina."
    },
    "autogun_p2_m3_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/perks/ranged_common/wield_increase_disgustingly_resilient_damage": {
        "description": "+{damage:%s} Damage (Infested Enemies)"
    },
    "content/items/perks/ranged_common/wield_increase_special_enemy_damage": {
        "description": "+{damage:%s} Ranged Damage (Specialists)"
    },
    "content/items/traits/bespoke_ogryn_club_p1/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "ogryn_club_p1_m3_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_combatsword_p2/increase_power_on_hit": {
        "display_name": "Headtaker",
        "description": "+{power_level:%s} Power for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "chainsword_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_laspistol_p1/suppression_negation_on_weakspot": {
        "display_name": "Between the Eyes",
        "description": "Gain Suppression Immunity for {time:%s}s on Weak Spot Hit."
    },
    "content/items/traits/bespoke_combatsword_p1/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "forcesword_p1_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_combatsword_p1/increased_attack_cleave_on_multiple_hits": {
        "display_name": "Savage Sweep",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your cleave by {cleave:%s} for {time:%s} seconds."
    },
    "content/items/traits/bespoke_thumper_p2/crit_chance_on_aoe_hits": {
        "display_name": "Shrapnel",
        "description": "+{crit_chance:%s} Critical Chance for each Enemy Hit by the Blast."
    },
    "content/items/traits/bespoke_combatknife_p1/stacking_rending_on_weakspot": {
        "display_name": "Uncanny Strike",
        "description": "+{rending:%s} Rending on Enemy Weak Spot Hit for {time:%s}s. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcestaff_p4/double_shot_on_crit": {
        "display_name": "Surge",
        "description": "{value:%s} Shots on Critical Hit."
    },
    "content/items/traits/bespoke_forcestaff_p2/faster_charge_on_chained_secondary_attacks": {
        "display_name": "Warp Flurry",
        "description": "{charge_time:%s}  Charge Time on Chained Secondary Attack. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_chainsword_2h_p1/increased_melee_damage_on_multiple_hits": {
        "display_name": "Rampage",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds."
    },
    "combatsword_p2_m2_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/traits/bespoke_shotgun_p1/damage_bonus_on_stagger_count": {
        "display_name": "No Respite",
        "description": "Up to +{damage:%s} Damage on Hit (Staggered Enemy), scaling with Stagger."
    },
    "thunderhammer_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_combataxe_p3/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_combataxe_p3/power_bonus_scaled_on_stamina": {
        "display_name": "All or Nothing",
        "description": "Up to +{power_level:%s} Power, as Stamina depletes."
    },
    "content/items/traits/bespoke_combataxe_p2/power_bonus_scaled_on_stamina": {
        "display_name": "All or Nothing",
        "description": "Up to +{power_level:%s} Power, as Stamina depletes."
    },
    "content/items/traits/bespoke_combataxe_p2/chained_hits_increases_power": {
        "display_name": "Decimator",
        "description": "Continuously chaining more than 2 attacks gives +{power_level:%s} Power. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combataxe_p1/chained_hits_increases_power": {
        "display_name": "Decimator",
        "description": "Continuously chaining more than 2 attacks gives +{power_level:%s} Power. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combataxe_p1/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "autogun_p3_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_chainsword_p1/chained_hits_increases_cleave": {
        "display_name": "Wrath",
        "description": "+{cleave:%s} Cleave on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/crit_chance_on_first_shot": {
        "display_name": "Alpha Strike",
        "description": "+{crit_chance:%s} Critical Chance on first Hit from a Salvo."
    },
    "content/items/traits/bespoke_autogun_p3/crit_weakspot_finesse": {
        "display_name": "Deadly Accurate",
        "description": "+{crit_weakspot_damage:%s} Critical Weak Spot Damage."
    },
    "content/items/gadgets/defensive_gadget_13": {
        "display_name": "Wayfarer's Seal (Reliquary)"
    },
    "content/items/traits/bespoke_autogun_p2/increase_power_on_close_kill": {
        "display_name": "Deathspitter",
        "description": "+{power_level:%s} Power for {time:%s}s on Close Range Kill."
    },
    "content/items/traits/gadget_inate_trait/trait_inate_gadget_toughness": {
        "display_name": "Ferrocrete Hide",
        "description": "+{toughness_bonus:%s} Toughness"
    },
    "content/items/traits/bespoke_powermaul_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_autogun_p1/increased_sprint_speed": {
        "display_name": "Stripped Down",
        "description": "Gain Ranged Attack Immunity while sprinting with over {stamina:%s} Stamina."
    },
    "ogryn_club_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "shotgun_p1_m1_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/traits/bespoke_autogun_p1/increase_damage_on_close_kill": {
        "display_name": "Punisher",
        "description": "+{damage:%s} Damage for {time:%s} seconds on Kill."
    },
    "content/items/weapons/player/ranged/lasgun_p3_m2": {
        "display_name": "Accatran Mk VId Recon Lasgun",
        "description": "The Mk VI series is an evolutionary offshoot of the Mk IV, so beloved of the Elysian Drop Troops. The improved rate of fire from its more efficient charge pack comes at the expense of stopping power."
    },
    "combatknife_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "combataxe_p2_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_chainsword_p1/increased_attack_cleave_on_multiple_hits": {
        "display_name": "Savage Sweep",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your cleave by {cleave:%s} for {time:%s} seconds."
    },
    "ogryn_club_p1_m2_control_stat": {
        "display_name": "Crowd Control"
    },
    "content/items/curios/curio_b_e01": {
        "display_name": "Inquisitorial Rosette (Reliquary)",
        "description": "I see that thou are afeared. Be not so, for the God-Emperor hath shown me the path to victory.\n\nAttributed to Saint Messelina \n>>timestamp -18.2.37.KE.M39<<"
    },
    "content/items/traits/bespoke_combatknife_p1/dodge_grants_crit_chance": {
        "display_name": "Riposte",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge."
    },
    "autogun_p2_m3_dps_stat": {
        "display_name": "Damage"
    },
    "stubrevolver_armor_piercing_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_forcesword_p1/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_autogun_p3/count_as_dodge_vs_ranged_on_weakspot": {
        "display_name": "Ghost",
        "description": "Immune to Ranged Attacks for {time:%s}s on Weak Spot Hit."
    },
    "content/items/perks/ranged_common/wield_increase_unarmored_damage": {
        "description": "+{damage:%s} Damage (Unarmoured Enemies)"
    },
    "content/items/traits/bespoke_combatsword_p2/increased_crit_chance_on_weakspot_kill": {
        "display_name": "Chained Deathblow",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on Weak Spot Kill."
    },
    "content/items/traits/bespoke_autogun_p1/followup_shots_ranged_weakspot_damage": {
        "display_name": "Punishing Salvo",
        "description": "+{damage:%s} Weakspot Damage on Third and Fourth shots in a Salvo."
    },
    "lasgun_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_combatsword_p1/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/perks/ranged_common/wield_increase_resistant_damage": {
        "description": "+{damage:%s} Damage (Unyielding Enemies)"
    },
    "content/items/perks/ranged_common/wield_increase_horde_enemy_damage": {
        "description": "+{damage:%s} Ranged Damage (Groaners, Poxwalkers)"
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/toughness_on_crit_kills": {
        "display_name": "Reassuringly Accurate",
        "description": "+{toughness:%s} Toughness on Critical Hit Kill."
    },
    "content/items/traits/bespoke_ogryn_club_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/curios/curio_b_f01": {
        "display_name": "Blessed Bullet (Reliquary)",
        "description": "Thou needeth neither blade nor armour so long as thy hearts brim with hate.\n\nAttributed to Saint Messelina \n>>timestamp -11.3.36.KE.M39<<"
    },
    "shotgun_p1_m2_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/perks/ranged_common/wield_increase_damage": {
        "description": "+{damage:%s} Ranged Damage"
    },
    "content/items/perks/melee_common/wield_increase_roaming_enemy_damage": {
        "description": "+{damage:%s} Increased Melee Damage (Roamers)"
    },
    "content/items/perks/melee_common/wield_increase_resistant_damage": {
        "description": "+{damage:%s} Damage (Unyielding Enemies)"
    },
    "content/items/traits/bespoke_combataxe_p2/guaranteed_stagger_on_critical_hit": {
        "display_name": "Mighty Blow",
        "description": "Guaranteed Stagger (Next Attack) on Critical Hit."
    },
    "content/items/characters/player/human/cine_props/prologue_shovel_human_cinematic": {
        "display_name": "Munitorum Latrine Shovel",
        "description": "A soldier handed this particular tool knows they've found themselves at a low ebb..."
    },
    "content/items/traits/bespoke_combatsword_p1/consecutive_hits_increases_stagger": {
        "display_name": "Trauma",
        "description": "+{impact:%s} Impact for {time:%s} seconds on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/perks/melee_common/wield_increase_horde_enemy_damage": {
        "description": "+{damage:%s} Melee Damage (Groaners, Poxwalkers)"
    },
    "shotgun_p1_m3_ammo_stat": {
        "display_name": "Ammo"
    },
    "combatsword_p2_m2_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/gadgets/defensive_gadget_17": {
        "display_name": "Mechanicus Icon Exemplar (Casket)"
    },
    "content/items/perks/melee_common/wield_increase_berserker_damage": {
        "description": "+{damage:%s} Damage (Maniacs)"
    },
    "content/items/weapons/npc/lasgun_npc_03": {},
    "content/items/gadgets/defensive_gadget_4": {
        "display_name": "Gilded Mandible (Caged)"
    },
    "content/items/traits/gadget_inate_trait/trait_inate_gadget_health": {
        "display_name": "Vitality",
        "description": "+{max_health_modifier:%s} Max Health"
    },
    "content/items/traits/bespoke_forcestaff_p1/faster_charge_on_chained_secondary_attacks": {
        "display_name": "Warp Flurry",
        "description": "{charge_time:%s}  Charge Time on Chained Secondary Attack. Stacks {stacks:%s} times."
    },
    "powermaul_2h_control_stat": {
        "display_name": "Crowd Control"
    },
    "combataxe_p2_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/gadgets/defensive_gadget_7": {
        "display_name": "Scrap of Scripture (Caged)"
    },
    "combataxe_p3_m2_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/traits/bespoke_lasgun_p3/increased_sprint_speed": {
        "display_name": "Stripped Down",
        "description": "Gain Ranged Attack Immunity while sprinting with over {stamina:%s} Stamina."
    },
    "content/items/traits/bespoke_chainsword_p1/guaranteed_melee_crit_on_activated_kill": {
        "display_name": "Bloodthirsty",
        "description": "+{crit_chance:%s} Critical Chance on your next Melee Attack after Special Attack Kill."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/toughness_recovery_on_chained_attacks": {
        "display_name": "Confident Strike",
        "description": "+{toughness:%s} toughness on Chained Hit."
    },
    "content/items/curios/curio_c_k01": {
        "display_name": "Guardian Nocturnus (Casket)",
        "description": "And so, during the Firestorm of Komaris, she gave her life to Emperor. A martyrdom bright enough to blind the stars.\n\nFrom Caladoc's Life of Messelina, Vol. XXVI"
    },
    "content/items/curios/curio_c_j02": {
        "display_name": "Guardian of the Hateful (Casket)",
        "description": "And through treachery most foul, did the Saint's closest companions succeed where heretics had failed.\n\nFrom Caladoc's Life of Messelina, Vol. XXVI"
    },
    "content/items/curios/curio_c_i01": {
        "display_name": "Mechanicus Icon Exemplar (Casket)",
        "description": "But envy has ever been a font of heresy. Some among the Saint's retinue harboured wicked thoughts.\n\nFrom Caladoc's Life of Messelina, Vol. XXVI"
    },
    "content/items/traits/bespoke_combatknife_p1/bleed_on_non_weakspot_hit": {
        "display_name": "Lacerate",
        "description": "+{stacks:%s} Bleed Stacks on non-Weak Spot Hits."
    },
    "content/items/curios/curio_c_h02": {
        "display_name": "Laurel of the Just (Casket)",
        "description": "On each world redeemed arise statues in my image. I must holdeth true to humility.\n\nAttributed to Saint Messelina \n>>timestamp -13.8.11.KE.M39<<"
    },
    "content/items/curios/curio_c_h01": {
        "display_name": "Laurel of the Righteous (Casket)",
        "description": "Thus did Saint Messelina cut a swathe of gold and crimson across the Outer Domain, restoring the God-Emperor's sundered rule.\n\nFrom Caladoc's Life of Messelina, Vol. XX"
    },
    "content/items/traits/bespoke_ogryn_club_p2/toughness_recovery_on_chained_attacks": {
        "display_name": "Confident Strike",
        "description": "+{toughness:%s} toughness on Chained Hit."
    },
    "content/items/traits/bespoke_autopistol_p1/allow_flanking_and_increased_damage_when_flanking": {
        "display_name": "Raking Fire",
        "description": "+{damage:%s} Damage when shooting Enemies in the back."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/movement_speed_on_continuous_fire": {
        "display_name": "Roaring Advance",
        "description": "-{movement_speed:%s} Movement Speed Reduction for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/armor_rend_on_projectile_hit": {
        "display_name": "Shattering Impact",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on direct projectile hit. Lasts {time:%s}s"
    },
    "content/items/curios/curio_c_a01": {
        "display_name": "Saintly Fragment (Casket)",
        "description": "I sought neither plaudits nor glory, and now a world bears my name. I hath become a waystation on the idolator's road.\n\nAttributed to Saint Messelina \n>>timestamp -1.12.32.KE.M39<<"
    },
    "content/items/curios/curio_b_i02": {
        "display_name": "Mechanicus Icon Illustrious (Reliquary)",
        "description": "And lo! Did Gloriana once more find itself freed of traitors and heretics. But Messelina rejected all honours, for service was her sole reward.\n\nFrom Caladoc's Life of Messelina, Vol. IX"
    },
    "content/items/curios/curio_b_i01": {
        "display_name": "Mechanicus Icon Exemplar (Reliquary)",
        "description": "The touch of the holy is a balm to the faithful and bane of the corrupt.\n\nAttributed to Saint Messelina \n>>timestamp -13.1.35.KE.M39<<"
    },
    "content/items/traits/bespoke_shotgun_p1/cleave_on_crit": {
        "display_name": "Man-Stopper",
        "description": "Increased Cleave on Critical Hit."
    },
    "content/items/traits/bespoke_combataxe_p3/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_shotgun_p1/crit_chance_on_hitting_multiple_with_one_shot": {
        "display_name": "Scattershot",
        "description": "+{crit_chance:%s} Critical Chance for each Enemy Hit by your previous attack. Stacks {stacks:%s} times."
    },
    "content/items/curios/curio_b_h01": {
        "display_name": "Laurel of the Righteous (Reliquary)",
        "description": "Hatred holdeth power beyond mortal might. It shalt serve thee unto death.\n\nAttributed to Saint Messelina \n>>timestamp -20.9.35.KE.M39<<"
    },
    "content/items/perks/ranged_common/wield_increase_finesse_modifier": {
        "description": "+{finesse_modifier:%s} Finesse"
    },
    "content/items/curios/curio_b_g02": {
        "display_name": "Herald's Seal (Reliquary)",
        "description": "Let hatred be thy sword and shield. \n\nAttributed to Saint Messelina \n>>timestamp -20.9.35.KE.M39<<"
    },
    "shotgun_p1_m1_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/curios/curio_b_g01": {
        "display_name": "Wayfarer's Seal (Reliquary)",
        "description": "Even one righteous soul hath the power to command fate, so long as her courage ebbeth not.\n\nAttributed to Saint Messelina \n>>timestamp -21.9.35.KE.M39<<"
    },
    "stubrevolver_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/curios/curio_b_f02": {
        "display_name": "Obsidiax-Sheathed Bullet (Reliquary)",
        "description": "We were but a sorry band of twelve when she led us from the ruined shrine. By the time we reached the gates of the capital, we numbered millions.\n\nFrom Caladoc's Life of Messelina, Vol. IX"
    },
    "content/items/curios/curio_b_e02": {
        "display_name": "Gilded Inquisitorial Rosette (Reliquary)",
        "description": "Vigilance. Hatred. Fury. Let these be both thine watchwords and thy holy duty.\n\nAttributed to Saint Messelina \n>>timestamp -14.6.36.KE.M39<<"
    },
    "content/items/curios/curio_b_d01": {
        "display_name": "Scrap of Scripture (Reliquary)",
        "description": "Lowborn and lords alike bowed to her. Not for her victories, but out of fealty to destiny apparent.\n\nFrom Caladoc's Life of Messelina, Vol. IV"
    },
    "ogryn_thumper_p1_m2_explosion_antiarmor_stat": {
        "display_name": "Penetration (Blast)"
    },
    "plasmagun_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_autopistol_p1/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/gadgets/defensive_gadget_16": {
        "display_name": "Laurel of the Just (Reliquary)"
    },
    "content/items/weapons/npc/lasgun_npc_04": {},
    "content/items/perks/gadget_common/trait_gadget_reduced_sprint_cost": {
        "description": "+{sprinting_cost_multiplier:%s} Sprint Efficiency"
    },
    "content/items/traits/bespoke_bolter_p1/cleave_and_no_explode_on_unarmored": {
        "display_name": "Ripper Rounds",
        "description": "Shots Cleave and never Explode vs Unarmoured targets."
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/taunt_target_on_hit": {
        "display_name": "Taunt on stagger",
        "description": "Staggering enemies will make them prioritise you as a target over other players."
    },
    "content/items/curios/curio_b_b02": {
        "display_name": "Gilded Mandible (Reliquary)",
        "description": "The God-Emperor's Light shalt return.\n\nAttributed to Saint Messelina \n>>timestamp -2.3.39.KE.M39<<"
    },
    "content/items/curios/curio_b_b01": {
        "display_name": "Stalwart's Mandible (Reliquary)",
        "description": "Too long hath this world of Gloriana lain fallow, its prayers fallen silent through laxity and pride. No longer. \n\nAttributed to Saint Messelina \n>>timestamp -2.3.39.KE.M39<<"
    },
    "content/items/curios/curio_b_a02": {
        "display_name": "Gilded Fragment (Reliquary)",
        "description": "She took my hand and bade me rise from that mortis field. So many had died for her. For the God-Emperor.\n\nFrom Caladoc's Life of Messelina, Vol. III"
    },
    "content/items/curios/curio_b_a01": {
        "display_name": "Saintly Fragment (Reliquary)",
        "description": "In the hour of victory, Messelina stood among the slain, her white robes now blood-red, and a fearful light upon her brow.\n\nFrom Caladoc's Life of Messelina, Vol. III"
    },
    "ogryn_gauntlet_p1_m1_explosion_size": {
        "display_name": "Blast Radius"
    },
    "content/items/weapons/npc/autogun_npc_04": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_powersword_p1/stacking_rending_on_cleave": {
        "display_name": "Bladed Momentum",
        "description": "Hitting multiple enemies in one sweep gives {rending:%s} Rending for {time:%s} seconds. Stacks {stacks:%s} times."
    },
    "content/items/curios/curio_a_k02": {
        "display_name": "Guardian Gloriana (Caged)",
        "description": "In a voice like thunder, the novitiate bade us fight. And in that moment, our weariness fell away.\n\nFrom Caladoc's Life of Messelina, Vol. III"
    },
    "combataxe_p3_m3_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_combataxe_p3/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/curios/curio_a_e01": {
        "display_name": "Inquisitorial Rosette (Caged)",
        "description": "Each day, the God-Emperor's grace filleth our cloisters, but pilgrims warn of darkness beyond the walls.\n\nFrom the Journal of Novitiate Messelina "
    },
    "content/items/curios/curio_a_c02": {
        "display_name": "Redeemer's Gilded Hand (Caged)",
        "description": ">>Timestamp: -15.7.40.KE.M39<<\n>>Private Datastack: Taric/Dn<<\n\nShe never questions, this one. She sees the God-Emperor in each blaze of light and the cast of every shadow. A drab should know such solace."
    },
    "ogryn_club_p2_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_plasmagun_p1/armor_rend_on_projectile_hit": {
        "display_name": "Shattering Impact",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on direct projectile hit. Lasts {time:%s}s"
    },
    "content/items/curios/curio_a_b02": {
        "display_name": "Gilded Mandible (Caged)",
        "description": "My quarters offer humility, as they should. For is not humility next to hatred in the God-Emperor's sight?\n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/traits/bespoke_combatsword_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/crit_chance_on_push": {
        "display_name": "Bash",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on Pushing Enemies. "
    },
    "lasgun_p3_m1_control_stat": {
        "display_name": "Collateral"
    },
    "combataxe_p3_m2_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_combatknife_p1/increased_weakspot_damage_against_bleeding": {
        "display_name": "Mercy Killer",
        "description": "+{damage:%s} Weak Spot Damage (Enemies with Bleed Stacks)."
    },
    "lasgun_p2_m3_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/traits/bespoke_combatsword_p1/stacking_increase_impact_on_hit": {
        "display_name": "Hammerblow",
        "description": "+{impact:%s} Impact for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/curios/curio_a_a02": {
        "display_name": "Gilded Fragment (Caged)",
        "description": "Never hath I known such joy. Gloriana may be the lowliest moon in the domain, but it is surely the most blessed. \n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/traits/bespoke_combatsword_p3/dodge_count_reset_on_weakspot_hit": {
        "display_name": "Agile",
        "description": "Refreshed Dodge Efficiency on Weak Spot Hit."
    },
    "content/items/traits/bespoke_forcesword_p1/can_block_ranged": {
        "display_name": "Deflector",
        "description": "This weapon Blocks both Melee and Ranged attacks. Additionally, Block Cost is reduced by {block_cost:%s}."
    },
    "content/items/traits/bespoke_chainsword_p1/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/ranged/ogryn_rippergun_p1_m1": {
        "display_name": "Foe-Rend Mk II Ripper Gun",
        "description": "A ripper gun is, in essence, a heavy, automatic shotgun. They are built as simply and solidly as possible, because most Ogryns in the field forget about shooting, instead using whatever they have to hand as improvised melee weapons."
    },
    "content/items/traits/bespoke_stubrevolver_p1/crit_chance_based_on_aim_time": {
        "display_name": "Surgical",
        "description": "+{crit_chance:%s} Critical Chance for every {time:%s} second while aiming. Stacks {stacks:%s} times. Discharges all stacks upon firing."
    },
    "content/items/weapons/player/ranged/ogryn_thumper_p1_m2": {
        "display_name": "Lorenz Mk VI Rumbler",
        "description": "One of the simplest grenade launchers constructed in the Imperium, \"rumblers\" have more in common with primitive mortars than the usual weaponry made on the Lorenz forge world."
    },
    "combataxe_p2_m2_dps_stat": {
        "display_name": "Damage"
    },
    "flamer_p1_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_bolter_p1/armor_rend_on_projectile_hit": {
        "display_name": "Shattering Impact",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on direct projectile hit. Lasts {time:%s}s"
    },
    "content/items/traits/bespoke_plasmagun_p1/crit_chance_scaled_on_heat": {
        "display_name": "Gets Hot!",
        "description": "Up to +{crit_chance:%s} Critical Chance (scales on Heat Level)."
    },
    "content/items/traits/bespoke_stubrevolver_p1/power_bonus_on_chained_weakspot_hits": {
        "display_name": "Trickshooter",
        "description": "+{power_level:%s} Power on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. "
    },
    "content/items/traits/bespoke_autogun_p1/count_as_dodge_vs_ranged_on_close_kill": {
        "display_name": "Hit & Run",
        "description": "Immune to Ranged Attacks for {time:%s}s on Close Range Kill."
    },
    "content/items/traits/bespoke_powermaul_p1/ignore_stagger_reduction_on_weakspot_hit": {
        "display_name": "Crump!",
        "description": "-Target {stagger_reduction:%s} Stagger Resistance on Weak Spot Hit."
    },
    "content/items/traits/bespoke_chainsword_p1/movement_speed_on_activated_hit": {
        "display_name": "Hit & Run",
        "description": "+{movement_speed:%s} Movement Speed for {time:%s}s on Special Action Hit. "
    },
    "content/items/traits/bespoke_combataxe_p1/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "content/items/perks/gadget_common/trait_gadget_mission_xp_increase": {
        "description": "+{mission_reward_xp_modifier:%s} Experience"
    },
    "content/items/traits/bespoke_powermaul_2h_p1/chance_to_explode_enemy_on_activated_kill": {
        "display_name": "Rupture",
        "description": "+{proc_chance:%s}% chance enemy Explodes if killed by Special Attack."
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/increased_power_on_weapon_special_follow_up_hits": {
        "display_name": "Tenderiser",
        "description": "+{power:%s} Power (next attack) on Weapon Special attack Hit."
    },
    "content/items/traits/bespoke_combatsword_p1/increased_melee_damage_on_multiple_hits": {
        "display_name": "Rampage",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds."
    },
    "content/items/traits/bespoke_plasmagun_p1/toughness_on_elite_kills": {
        "display_name": "Gloryhunter",
        "description": "+{toughness:%s} Toughness on Elite Kill."
    },
    "autogun_p3_m1_stability_stat": {
        "display_name": "Stability"
    },
    "powermaul_2h_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/perks/gadget_common/trait_gadget_health_increase": {
        "description": "+{max_health_modifier:%s} Max Health"
    },
    "stubrevolver_reload_speed_stat": {
        "display_name": "Reload Speed"
    },
    "content/items/weapons/npc/flamer_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "Only the foolish do not fear a weapon that sprays out a swathing sheet of flame."
    },
    "content/items/weapons/player/melee/chainaxe_p1_m1": {
        "display_name": "Orestes Mk IV Assault Chainaxe",
        "description": "Inspired by the enormous chain weapons employed by the Legio Tempestus titans, Orestes chainaxes are brutal in their simplicity."
    },
    "content/items/curios/curio_a_g02": {
        "display_name": "Herald's Seal (Caged)",
        "description": "Preacher Caladoc now speaks openly of the paucity of our defences. Like many on Gloriana they are ill-maintained, and their watch slothful.\n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/weapons/player/ranged/shotgun_p1_m1": {
        "display_name": "Lawbringer Mk VI Combat Shotgun",
        "description": "Based on the ubiquitous weapon long carried by the Adeptus Arbites, this semi-automatic shotgun is deadly at short range."
    },
    "content/items/gadgets/defensive_gadget_12": {
        "display_name": "Obsidiax-Sheathed Bullet (Reliquary)"
    },
    "content/items/traits/bespoke_stubrevolver_p1/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/traits/bespoke_powermaul_2h_p1/stacking_increase_impact_on_hit": {
        "display_name": "Hammerblow",
        "description": "+{impact:%s} Impact for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_club_p1/pass_past_armor_on_crit": {
        "display_name": "Perfect Strike",
        "description": "Critical Hits ignore Hit Mass Bonus from Armour."
    },
    "content/items/traits/bespoke_lasgun_p2/negate_stagger_reduction_on_weakspot": {
        "display_name": "Falter",
        "description": "+{stagger:%s} Target Stagger on Weak Spot Hit."
    },
    "content/items/gadgets/defensive_gadget_5": {
        "display_name": "Redeemer's Hand (Caged)"
    },
    "content/items/curios/curio_c_c02": {
        "display_name": "Redeemer's Gilded Hand (Casket)",
        "description": "Such sights were seen on Komaris as would make a saint weep.\n\nFrom Caladoc's Life of Messelina, Vol. XV"
    },
    "content/items/traits/bespoke_lasgun_p3/reload_speed_on_slide": {
        "display_name": "Speedload",
        "description": "+{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_bolter_p1/toughness_on_continuous_fire": {
        "display_name": "Inspiring Barrage",
        "description": "+{toughness:%s} Toughness for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/increase_power_on_kill": {
        "display_name": "Slaughterer",
        "description": "+{power_level:%s} Power for {time:%s}s on Kill. Stacks {stacks:%s} times."
    },
    "content/items/gadgets/defensive_gadget_19": {
        "display_name": "Guardian of the Lost (Casket)"
    },
    "combatsword_p2_m3_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/traits/bespoke_autogun_p3/power_bonus_on_first_shot": {
        "display_name": "Opening Salvo",
        "description": "+{power_level:%s} Power on Salvo's First shot."
    },
    "lasgun_p2_m1_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/weapons/player/melee/combatsword_p3_m1": {
        "display_name": "Maccabian Mk II Duelling Sword",
        "description": "It is said that Saint Drusus (formerly Lord-General Militant Drusus) was a consummate swordsman, who wielded an ornate duelling sword unto his dying breath."
    },
    "content/items/traits/bespoke_chainsword_2h_p1/bleed_on_activated_hit": {
        "display_name": "Bloodletter",
        "description": "+{stacks:%s} Bleed Stacks from Special Attacks."
    },
    "content/items/curios/curio_b_k02": {
        "display_name": "Guardian Gloriana (Reliquary)",
        "description": "But one honour was bestowed upon the Saint without her knowledge. The world she had saved would ever after bear her name alongside its own.\n\nFrom Caladoc's Life of Messelina, Vol. IX"
    },
    "content/items/traits/bespoke_thumper_p2/armor_rend_on_projectile_hit": {
        "display_name": "Shattering Impact",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on direct projectile hit. Lasts {time:%s}s"
    },
    "content/items/traits/bespoke_lasgun_p3/stacking_crit_chance_on_weakspot": {
        "display_name": "Headhunter",
        "description": "+{crit_chance:%s} Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/ranged/ogryn_rippergun_p1_m2": {
        "display_name": "Foe-Rend Mk V Ripper Gun",
        "description": "A rare pattern of ripper gun, the Foe-Rend Mk V was an attempt to use a tightly focussed scatter shell to improve the Ogryns' aim at long range. Given the Ogryn propensity for charging wildly into combat, the experiment was quickly abandoned."
    },
    "content/items/weapons/npc/ogryn_thumper_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "The Thumper is striped down to the very basics so as to not confuse its simple owner."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/stacking_increase_impact_on_hit": {
        "display_name": "Hammerblow",
        "description": "+{impact:%s} Impact for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcestaff_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/weapons/player/ranged/autogun_p3_m1": {
        "display_name": "Vraks Mk III Headhunter Autogun",
        "description": "A prized autogun pattern from the vaunted manufactorums of Vraks, the Mk III sacrifices rate of fire in favour of increased range."
    },
    "content/items/perks/ranged_common/wield_increase_reload_speed": {
        "description": "+{reload_speed:%s} Reload Speed"
    },
    "combataxe_p3_m3_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/curios/curio_c_g01": {
        "display_name": "Wayfarer's Seal (Casket)",
        "description": "And only when Komaris was purged of corruption did sainted Messelina turn her gaze outward, to the lost worlds of the Domain.\n\nFrom Caladoc's Life of Messelina, Vol. XIX"
    },
    "content/items/traits/bespoke_combatsword_p2/increased_attack_cleave_on_multiple_hits": {
        "display_name": "Savage Sweep",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your cleave by {cleave:%s} for {time:%s} seconds."
    },
    "content/items/traits/bespoke_combatsword_p3/increased_melee_damage_on_multiple_hits": {
        "display_name": "Rampage",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds."
    },
    "content/items/characters/player/ogryn/cine_props/prologue_shovel_ogryn_cinematic": {
        "display_name": "Munitorum Latrine Shovel",
        "description": "Ogryns are big. Ogryn latrine shovels are big too. And where the Ogryns dig, human soldiers know well to avoid."
    },
    "lasgun_p3_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/perks/ranged_common/wield_increase_crit_chance": {
        "description": "Increase Ranged Critical Strike Chance by {crit_chance:%s}"
    },
    "content/items/perks/melee_common/wield_increase_finesse_modifier": {
        "description": "+{finesse_modifier:%s} Finesse"
    },
    "content/items/traits/bespoke_combataxe_p1/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Brutal Momentum",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "content/items/curios/curio_c_k02": {
        "display_name": "Guardian Gloriana (Casket)",
        "description": "I have been blind, but now see clearly the ruin that will be wrought in my name. May the God-Emperor forgive me.\n\nAttributed to Saint Messelina \n>>timestamp -0.0.0.KE.M39<<"
    },
    "combatknife_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p3_m2_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_forcesword_p1/guaranteed_melee_crit_on_activated_kill": {
        "display_name": "Bloodthirsty",
        "description": "+{crit_chance:%s} Critical Chance on your next Melee Attack after Special Attack Kill."
    },
    "content/items/traits/bespoke_lasgun_p1/burninating_on_crit": {
        "display_name": "Infernus",
        "description": "+{stacks:%s} Burn Stack(s) on Critical Hit to a maximum of {max_stacks:%s} Stack(s)."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/toughness_recovery_on_multiple_hits": {
        "display_name": "Momentum",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, restores {toughness:%s} toughness."
    },
    "content/items/weapons/player/melee/forcesword_p1_m2": {
        "display_name": "Deimos Mk IV Blaze Force Sword",
        "description": "Through a force sword, a psyker can channel a terrifying amount of Warp energy, with the blade acting as a lethal conduit between the psyker's mind and the enemy's flesh."
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/armor_rend_on_activated_attacks": {
        "display_name": "Supercharge",
        "description": "+{rend:%s} stacks of Brittleness on Energised Hit."
    },
    "content/items/weapons/player/melee/combataxe_p1_m3": {
        "display_name": "Achlys Mk VIII Combat Axe",
        "description": "Though hardly a graceful weapon, many a duellist has met their end after practising fancy swordplay on an axe-wielding zealot."
    },
    "content/items/traits/bespoke_chainsword_p1/bleed_on_activated_hit": {
        "display_name": "Bloodletter",
        "description": "+{stacks:%s} Bleed Stacks from Special Attacks."
    },
    "content/items/traits/bespoke_autogun_p1/consecutive_hits_increases_close_damage": {
        "display_name": "Dumdum",
        "description": "+{damage:%s} Close Range damage on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/explosion_on_activated_attacks_on_armor": {
        "display_name": "Power Surge",
        "description": "+1 Explosion on Energised Hit (Armoured Enemies)."
    },
    "content/items/traits/bespoke_forcestaff_p4/faster_charge_on_chained_secondary_attacks": {
        "display_name": "Warp Flurry",
        "description": "{charge_time:%s}  Charge Time on Chained Secondary Attack. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combataxe_p1/stacking_rending_on_one_hit_kills": {
        "display_name": "Decapitator",
        "description": "+{finesse:%s} Finesse for {time:%s}s on Enemy One-Shot. Stacks {stacks:%s} times."
    },
    "autogun_p1_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/weapons/player/melee/combatsword_p1_m1": {
        "display_name": "Catachan Mk I \"Devil's Claw\" Sword",
        "description": "The Catachans refer to these massive blades as knives. To everyone else, they're hefty swords."
    },
    "content/items/traits/bespoke_plasmagun_p1/no_vent_damage_but_slower": {
        "display_name": "Stable Cooling",
        "description": "Active Ventilation is slower but you don't take damage."
    },
    "ogryn_thumper_default_range_stat": {
        "display_name": "Range"
    },
    "content/items/weapons/player/melee/ogryn_powermaul_p1_m2": {},
    "content/items/traits/bespoke_chainsword_p1/infinite_melee_cleave_on_crit": {
        "display_name": "Devastating Strike",
        "description": "+{hit_mass:%s} Cleave for {time:%s} seconds on Critical Hit."
    },
    "content/items/traits/bespoke_stubrevolver_p1/reload_speed_on_slide": {
        "display_name": "Speedload",
        "description": "+{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times."
    },
    "content/items/curios/curio_a_i02": {
        "display_name": "Mechanicus Icon Illustrious (Caged)",
        "description": "The shrine hath fallen, drowned in the blood of its keepers. But I shalt not despair, for the God-Emperor granteth me hate. \n\nAttributed to Saint Messelina \n>>timestamp -5.3.49.KE.M39<<"
    },
    "content/items/traits/bespoke_forcestaff_p3/increased_crit_chance_scaled_on_peril": {
        "display_name": "Warp Nexus",
        "description": "Gain between {crit_chance:%s} and {crit_chance_max:%s} Critical Chance based on current level of peril."
    },
    "content/items/traits/bespoke_combatsword_p1/chained_hits_increases_cleave": {
        "display_name": "Wrath",
        "description": "+{cleave:%s} Cleave on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_autogun_p1/reload_speed_on_slide": {
        "display_name": "Speedload",
        "description": "+{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times."
    },
    "content/items/perks/melee_common/wield_increase_special_enemy_damage": {
        "description": "+{damage:%s} Increased Melee Damage (Specialists)"
    },
    "ogryn_combatblade_p1_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_forcestaff_p4/peril_vent_on_weakspot_hit": {
        "display_name": "Transfer Peril",
        "description": "Quell {warp_charge:%s} of your Peril on Weak Spot Hit."
    },
    "chainsword_p1_m1_sawing_stat": {
        "display_name": "Shredder"
    },
    "combatsword_p3_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_lasgun_p1/stacking_crit_chance_on_weakspot": {
        "display_name": "Headhunter",
        "description": "+{crit_chance:%s} Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combatsword_p2/chained_hits_increases_cleave": {
        "display_name": "Wrath",
        "description": "+{cleave:%s} Cleave on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_powersword_p1/chained_hits_increases_cleave": {
        "display_name": "Wrath",
        "description": "+{cleave:%s} Cleave on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_lasgun_p2/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/traits/bespoke_autogun_p2/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/weapons/player/ranged/autogun_p2_m3": {
        "display_name": "Agripinaa Mk VIII Braced Autogun",
        "description": "Exchanging the iron sights of the better known Agripinaa autogun for a heavy stock and counter-balanced barrel, this weapon is well-suited for mowing down hordes of foes."
    },
    "content/items/traits/bespoke_thumper_p2/pass_past_armor_on_weapon_special": {
        "display_name": "Pierce",
        "description": "Special Attacks ignore Hit Mass Bonus from Armour."
    },
    "powermaul_2h_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_stubrevolver_p1/toughness_on_elite_kills": {
        "display_name": "Gloryhunter",
        "description": "+{toughness:%s} Toughness on Elite Kill."
    },
    "content/items/traits/bespoke_powermaul_2h_p1/taunt_target_on_hit": {
        "display_name": "Taunt on stagger",
        "description": "Staggering enemies will make them prioritise you as a target over other players."
    },
    "content/items/traits/bespoke_forcestaff_p1/increased_crit_chance_scaled_on_peril": {
        "display_name": "Warp Nexus",
        "description": "Gain between {crit_chance:%s} and {crit_chance_max:%s} Critical Chance based on current level of peril."
    },
    "forcesword_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "rippergun_p1_m1_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/weapons/player/ranged/bolter_p1_m1": {
        "display_name": "Locke Mk IIb Spearhead Boltgun",
        "description": "A variant of an old Adeptus Arbites design, Lock-pattern boltguns are known for their reliability and stopping power."
    },
    "powersword_p1_m1_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "content/items/traits/bespoke_combataxe_p3/increased_weakspot_damage_on_push": {
        "display_name": "Take a Swing",
        "description": "+{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies."
    },
    "ogryn_combatblade_p1_m1_cleave_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/weapons/player/ranged/bot_zola_laspistol": {
        "display_name": "Accatran pattern lasgun MII variant",
        "description": "The laspistol supplies the same punch as the lasgun albeit at a reduced range. "
    },
    "content/items/weapons/player/ranged/forcestaff_p3_m1": {
        "display_name": "Nomanus Mk VI Surge Force Staff",
        "description": "A Force Staff grounds a Psyker, helping them resist daemonic possession."
    },
    "content/items/traits/bespoke_rippergun_p1/stacking_crit_bonus_on_continuous_fire": {
        "display_name": "Cavalcade",
        "description": "+{crit_chance:%s} Critical Chance for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_autogun_p3/stacking_crit_chance_on_weakspot": {
        "display_name": "Headhunter",
        "description": "+{crit_chance:%s} Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks {stacks:%s} times."
    },
    "ogryn_club_p1_m2_first_target_stat": {
        "display_name": "First Target"
    },
    "lasgun_p3_m3_stability_stat": {
        "display_name": "Stability"
    },
    "combatknife_p1_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "powersword_p1_m2_finesse_stat": {
        "display_name": "Finesse"
    },
    "thunderhammer_p1_m2_first_target_stat": {
        "display_name": "First Target"
    },
    "combataxe_p2_m3_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/perks/melee_common/wield_increase_elite_enemy_damage": {
        "description": "+{damage:%s} Melee Damage (Elites)"
    },
    "content/items/curios/curio_c_b01": {
        "display_name": "Stalwart's Mandible (Casket)",
        "description": "Messelina emerged from meditation renewed, blessed with a holy vision. She led, and we followed.\n\nFrom Caladoc's Life of Messelina, Vol. XIII"
    },
    "content/items/weapons/npc/powersword_npc_01": {},
    "content/items/weapons/player/melee/combatsword_p2_m3": {
        "display_name": "Turtolsky Mk IX Heavy Sword",
        "description": "Taking their design from the traditional shashka swords of the Vostroyan Astra Militarum regiments, these popular weapons are effective at both slashing and thrusting."
    },
    "ogryn_powermaul_slabshield_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/traits/bespoke_combataxe_p1/targets_receive_rending_debuff": {
        "display_name": "Thunderous",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on Hit. Lasts {time:%s}s."
    },
    "chainsword_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "lasgun_p1_m2_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/traits/gadget_inate_trait/trait_inate_gadget_health_segment": {
        "display_name": "Survivor",
        "description": "+{extra_max_amount_of_wounds:%s} Wound(s)"
    },
    "content/items/gadgets/defensive_gadget_18": {
        "display_name": "Mechanicus Icon Illustrious (Casket)"
    },
    "lasgun_p1_m1_dps_stat": {
        "display_name": "Dps"
    },
    "content/items/traits/bespoke_autopistol_p1/toughness_on_continuous_fire": {
        "display_name": "Inspiring Barrage",
        "description": "+{toughness:%s} Toughness for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "laspistol_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/npc/autogun_npc_05": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/curios/curio_a_e02": {
        "display_name": "Gilded Inquisitorial Rosette (Caged)",
        "description": "The soldier's warning of heretics reaving the mirelands was to be a greater burden than his passing.\n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/traits/bespoke_combatsword_p2/pass_past_armor_on_crit": {
        "display_name": "Perfect Strike",
        "description": "Critical Hits ignore Hit Mass Bonus from Armour."
    },
    "ogryn_gauntlet_p1_m1_explosion_damage": {
        "display_name": "Blast Damage"
    },
    "content/items/weapons/player/ranged/high_bot_lasgun_killshot": {},
    "autogun_p2_m2_stability_stat": {
        "display_name": "Stability"
    },
    "ogryn_club_p1_m2_defence_stat": {
        "display_name": "Defences"
    },
    "forcestaff_p4_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/toughness_recovery_on_multiple_hits": {
        "display_name": "Momentum",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, restores {toughness:%s} toughness."
    },
    "combatsword_p1_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "combatsword_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/more_power_on_longer_charge": {
        "display_name": "Mighty Smite",
        "description": "Up to +{damage:%s} Damage on Next Attack scaling with Charge Time (Heavy Attack)."
    },
    "content/items/weapons/player/ranged/autogun_p2_m2": {
        "display_name": "Graia Mk IV Braced Autogun",
        "description": "They say the forge world be cursed. Ha! Give me a hundred soldiers armed with such weapons, and by the Emperor I say it's the enemy who'll feel the curse!\n- Captain Jerzy Modamus"
    },
    "content/items/traits/bespoke_autogun_p2/reload_speed_on_slide": {
        "display_name": "Speedload",
        "description": "+{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcesword_p1/chained_weakspot_hits_increases_power": {
        "display_name": "Executor",
        "description": "+{power_level:%s} Power Level on Repeated Weak Spot Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_autogun_p1/reload_speed_on_dodge": {
        "display_name": "Quickloader",
        "description": "+{reload_speed:%s} Reload Speed after Dodging for {time:%s}s."
    },
    "content/items/traits/bespoke_forcesword_p1/chained_weakspot_hits_vents_warpcharge": {
        "display_name": "Exorcist",
        "description": "Quell {warp_charge:%s} of Peril on Repeated Weak Spot Hit."
    },
    "combatsword_p3_m3_finesse_stat": {
        "display_name": "Finesse"
    },
    "ogryn_club_p2_m3_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/perks/melee_common/wield_increase_unarmored_damage": {
        "description": "+{damage:%s} Damage (Unarmoured Enemies)"
    },
    "content/items/traits/bespoke_ogryn_slabshield_p1/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Brutal Momentum",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "content/items/traits/bespoke_forcestaff_p4/warpfire_burn_on_crit": {
        "display_name": "Blazing Spirit",
        "description": "Enemy gains +{stacks:%s} Stacks of Soulblaze on Critical Hit."
    },
    "content/items/curios/curio_c_j01": {
        "display_name": "Guardian of the Lost (Casket)",
        "description": "Thou thinketh me deceived, but no traitor may hideth long from my sight.\n\nAttributed to Saint Messelina \n>>timestamp -30.11.0.KE.M39<<"
    },
    "content/items/traits/bespoke_powermaul_2h_p1/burn_chance_on_activated_attacks_on_armour": {
        "display_name": "Ignite",
        "description": "+{proc_chance:%s} chance of +Burn {stacks:%s} on Special Attack (Mainstay Enemies)."
    },
    "content/items/traits/bespoke_powersword_p1/armor_rend_on_activated_attacks": {
        "display_name": "Supercharge",
        "description": "+{rend:%s} stacks of Brittleness on Energised Hit."
    },
    "content/items/perks/melee_common/wield_increase_weakspot_damage": {
        "description": "+{weakspot_damage:%s} Melee Weak Spot Damage"
    },
    "bolter_p1_m1_reload_speed_stat": {
        "display_name": "Reload Speed"
    },
    "lasgun_p3_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/curios/curio_c_a02": {
        "display_name": "Gilded Fragment (Casket)",
        "description": "I now deem Gloriana's renaming a necessary spur to action. Komaris languishes in heresy. It shall do so no longer.\n\nAttributed to Saint Messelina \n>>timestamp -34.11.32.KE.M39<<"
    },
    "autogun_p2_m2_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_lasgun_p1/increased_zoom": {
        "display_name": "Telescopic Sight",
        "description": "Increased Scope Zoom"
    },
    "content/items/traits/bespoke_chainsword_2h_p1/guaranteed_melee_crit_on_activated_kill": {
        "display_name": "Bloodthirsty",
        "description": "+{crit_chance:%s} Critical Chance on your next Melee Attack after Special Attack Kill."
    },
    "content/items/gadgets/defensive_gadget_9": {
        "display_name": "Inquisitorial Rosette (Reliquary)"
    },
    "content/items/curios/curio_a_j01": {
        "display_name": "Guardian of the Lost (Caged)",
        "description": "Immortal Emperor, Master of Mankind, grant me the strength to fight. Bless me with thy holy hate.\n\nAttributed to Saint Messelina \n>>timestamp -5.3.39.KE.M39<<"
    },
    "content/items/traits/bespoke_bolter_p1/power_bonus_on_chained_hits_on_single_target": {
        "display_name": "Overwhelming Fire",
        "description": "+{power:%s} Power for every {hit:%s} Single Target Hits. Lasts {time:%s}s and Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_chainsword_2h_p1/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/gadget_inate_trait/trait_inate_gadget_stamina": {
        "display_name": "Endurance",
        "description": "+{stamina_modifier:%s} Max Stamina"
    },
    "combataxe_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "content/items/curios/curio_c_i02": {
        "display_name": "Mechanicus Icon Illustrious (Casket)",
        "description": "Thou doubteth my word? I who stood at the burning gates of Cretoria? Who art thee to defy the God-Emperor's chosen?\n\nAttributed to Saint Messelina \n>>timestamp -30.11.0.KE.M39<<"
    },
    "content/items/weapons/npc/lasgun_npc_05": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_chainaxe_p1/increase_power_on_hit": {
        "display_name": "Headtaker",
        "description": "+{power_level:%s} Power for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/curios/curio_a_g01": {
        "display_name": "Wayfarer's Seal (Caged)",
        "description": "The very air resounds with raucous abandon. With heresy spoken and performed. The gates are barred, their aegis sealed. I fear it is not enough. \n\nFrom the Record of Novitiate Messelina "
    },
    "combatsword_p2_m1_dps_stat": {
        "display_name": "Damage"
    },
    "combatsword_p2_m2_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/weapons/npc/lasgun_npc_01": {},
    "content/items/curios/curio_a_f01": {
        "display_name": "Blessed Bullet (Caged)",
        "description": "This morn, the wind bore the screams of another town put to the sword. Where are the Emperor's soldiers? Why does no one fight? \n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/perks/gadget_common/trait_gadget_corruption_resistance": {
        "description": "+{corruption_taken_multiplier:%s} Corruption Resistance"
    },
    "combatknife_p1_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "chainaxe_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/perks/gadget_common/trait_gadget_stamina_regeneration": {
        "description": "+{stamina_regeneration_modifier:%s} Stamina Regeneration"
    },
    "content/items/traits/bespoke_flamer_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/weapons/npc/chainsword_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_powermaul_2h_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_laspistol_p1/toughness_on_crit_kills": {
        "display_name": "Reassuringly Accurate",
        "description": "+{toughness:%s} Toughness on Critical Hit Kill."
    },
    "combataxe_p3_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/test_trait": {
        "display_name": "++REDACTED++",
        "description": "++DILIGENCE IS DUTY++"
    },
    "content/items/traits/bespoke_bolter_p1/toughness_on_elite_kills": {
        "display_name": "Gloryhunter",
        "description": "+{toughness:%s} Toughness on Elite Kill."
    },
    "ogryn_thumper_reload_speed_stat": {
        "display_name": "Reload Speed"
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_flamer": {
        "description": "+{damage_reduction:%s} Damage Resistance (Tox Flamers)"
    },
    "content/items/perks/gadget_common/trait_gadget_reduced_block_cost": {
        "description": "+{block_cost_multiplier:%s}  Block Efficiency"
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_grenadiers": {
        "description": "+{damage_reduction:%s} Damage Resistance (Bombers)"
    },
    "ogryn_club_p1_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/pass_past_armor_on_crit": {
        "display_name": "Perfect Strike",
        "description": "Critical Hits ignore Hit Mass Bonus from Armour."
    },
    "content/items/perks/melee_common/wield_increase_stamina": {
        "description": "+{stamina:%s} Stamina"
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/increased_attack_cleave_on_multiple_hits": {
        "display_name": "Savage Sweep",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your cleave by {cleave:%s} for {time:%s} seconds."
    },
    "content/items/weapons/player/melee/bot_combatsword_linesman_p2": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_thumper_p1/weapon_special_power_bonus_after_one_shots": {
        "display_name": "Expansive",
        "description": "+{power_level:%s}Melee Power for  {time:%s}s on Hitting 3+ Enemies with a Ranged Attack."
    },
    "powersword_p1_m2_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "chainsword_2h_sawing_stat": {
        "display_name": "Shredder"
    },
    "combatsword_p2_m2_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "ogryn_club_p2_m3_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p3_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_forcestaff_p4/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "forcestaff_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/curios/curio_b_c02": {
        "display_name": "Redeemer's Gilded Hand (Reliquary)",
        "description": "I asketh nothing thou hath not already pledged through thy lowly birth: a voice to offer praise, and the will to take up arms.\n\nAttributed to Saint Messelina \n>>timestamp -25.7.37.KE.M39<<"
    },
    "combataxe_p3_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "stubrevolver_crit_stat": {
        "display_name": "Critical Bonus"
    },
    "content/items/weapons/npc/powersword_2h_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_combataxe_p1/increase_power_on_hit": {
        "display_name": "Headtaker",
        "description": "+{power_level:%s} Power for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combataxe_p3/stacking_rending_on_weakspot": {
        "display_name": "Uncanny Strike",
        "description": "+{rending:%s} Rending on Enemy Weak Spot Hit for {time:%s}s. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_flamer_p1/ignore_stagger_reduction_with_primary_on_burning": {
        "display_name": "Fan the Flames",
        "description": "Primary Attack ignores {stagger_reduction:%s} Stagger Resistance on Burning Enemies, as well as dealing +{impact_modifier:%s} Impact."
    },
    "content/items/traits/bespoke_shotgun_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/characters/player/human/cine_props/chainsword_p1_m1_left": {
        "display_name": "Cadia Mk III Assault Chainsword",
        "description": "There's definitely something wrong with the motor, but as long is it chews heretic flesh, where's the harm?\n- Captain Jerzy Modamus"
    },
    "combataxe_p2_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_combataxe_p3/chained_hits_increases_power": {
        "display_name": "Decimator",
        "description": "Continuously chaining more than 2 attacks gives +{power_level:%s} Power. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/melee/thunderhammer_2h_p1_m2": {
        "display_name": "\rIronhelm Mk IV Thunder Hammer",
        "description": "Unlike other power weapons, Thunder Hammers conserve energy by only activating their power fields upon impact, often with a booming crack that gives the weapon its name."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/targets_receive_rending_debuff": {
        "display_name": "Thunderous",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on Hit. Lasts {time:%s}s."
    },
    "forcesword_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_forcesword_p1/stacking_rending_on_weakspot": {
        "display_name": "Uncanny Strike",
        "description": "+{rending:%s} Rending on Enemy Weak Spot Hit for {time:%s}s. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_chainsword_2h_p1/increased_attack_cleave_on_multiple_hits": {
        "display_name": "Savage Sweep",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your cleave by {cleave:%s} for {time:%s} seconds."
    },
    "content/items/perks/melee_common/wield_reduce_sprint_cost": {
        "description": "+{sprinting_cost_multiplier:%s} Sprint Efficiency"
    },
    "content/items/curios/curio_a_c01": {
        "display_name": "Redeemer's Hand (Caged)",
        "description": ">>Timestamp: -3.11.40.KE.M39<<\n>>Private Datastack: Taric/Dn<<\n\nSister Messelina is a diligent soul, rightly modest."
    },
    "content/items/weapons/npc/ogryn_powermaul_slabshield_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/perks/melee_common/wield_increase_impact": {
        "description": "+{impact_power:%s} Impact (Melee)"
    },
    "content/items/curios/curio_b_k01": {
        "display_name": "Guardian Nocturnus (Reliquary)",
        "description": "Fire offers strength, redemption and purification. It is the very essence of holiness. \n\nAttributed to Saint Messelina \n>>timestamp -10.12.32.KE.M39<<"
    },
    "content/items/traits/bespoke_chainsword_2h_p1/chained_hits_increases_cleave": {
        "display_name": "Wrath",
        "description": "+{cleave:%s} Cleave on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/toughness_on_elite_kills": {
        "display_name": "Gloryhunter",
        "description": "+{toughness:%s} Toughness on Elite Kill."
    },
    "content/items/traits/bespoke_chainaxe_p1/bleed_on_activated_hit": {
        "display_name": "Bloodletter",
        "description": "+{stacks:%s} Bleed Stacks from Special Attacks."
    },
    "combataxe_p1_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/curios/curio_c_g02": {
        "display_name": "Herald's Seal (Casket)",
        "description": "Goeth forth and drive out the heretic and the xenos, for these worlds belong to the God-Emperor, and to no other.\n\n\nAttributed to Saint Messelina \n>>timestamp -20.5.-29.KE.M39<<"
    },
    "content/items/curios/curio_a_d01": {
        "display_name": "Scrap of Scripture (Caged)",
        "description": ">>Timestamp: -10.3.40.KE.M39<<\n>>Private Datastack: Taric/Dn<<\n\nAlas that Messelina will never amount to much. Still, service to the God-Emperor is its own reward."
    },
    "content/items/traits/bespoke_ogryn_slabshield_p1/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/gadgets/defensive_gadget_20": {
        "display_name": "Guardian of the Hateful (Casket)"
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_gunners": {
        "description": "+{damage_reduction:%s} Damage Resistance (Gunners)"
    },
    "content/items/perks/melee_common/wield_increase_monster_enemy_damage": {
        "description": "+{damage:%s} Melee Damage (Monstrosities)"
    },
    "content/items/traits/bespoke_powersword_p1/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Brutal Momentum",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "content/items/traits/bespoke_ogryn_club_p1/ignore_stagger_reduction_on_punch_hit": {
        "display_name": "Heavy Handed",
        "description": "-{stagger_reduction:%s} Target Stagger Resistance for {time:%s}s on Special Action Hit."
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_bursters": {
        "description": "+{damage_reduction:%s} Damage Resistance (Poxbursters)."
    },
    "content/items/weapons/player/melee/combataxe_p3_m2": {
        "display_name": "Munitorum Mk III Sapper Shovel",
        "description": "Dig! Dig for victory!\n- The Spirit of Tertium"
    },
    "content/items/traits/bespoke_lasgun_p3/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/weapons/player/melee/combatsword_p3_m3": {
        "display_name": "Maccabian Mk V Duelling Sword",
        "description": "Most Imperial swords are simple, heavy affairs, designed for the unskilled NCO to use with lethal effect. Not so Maccabian sabres, which require years of practice to master."
    },
    "content/items/perks/gadget_common/trait_gadget_toughness_regen_delay": {
        "description": "+{toughness_regen_delay_multiplier:%s} Toughness Regeneration Speed"
    },
    "content/items/traits/bespoke_thumper_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every shot fired during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_flamer_p1/toughness_on_continuous_fire": {
        "display_name": "Inspiring Barrage",
        "description": "+{toughness:%s} Toughness for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/weapons/npc/lasgun_npc_02": {},
    "content/items/weapons/player/melee/combatsword_p2_m1": {
        "display_name": "Turtolsky Mk VI Heavy Sword",
        "description": "Originally created for the Vostroyan Firstborn, the Turtolsky heavy sword became a popular weapon amongst navy crews and Rogue Traders."
    },
    "content/items/traits/bespoke_lasgun_p1/crit_weakspot_finesse": {
        "display_name": "Deadly Accurate",
        "description": "+{crit_weakspot_damage:%s} Critical Weak Spot Damage."
    },
    "content/items/weapons/player/ranged/autogun_p3_m3": {
        "display_name": "Agripinaa Mk IX Headhunter Autogun",
        "description": "One of the newest autogun STCs to be uncovered by the Tech-Priests of Agripinaa, the Mk VIII couples excellent range with a devastating burst firing mode."
    },
    "content/items/traits/bespoke_powermaul_p1/consecutive_hits_increases_stagger": {
        "display_name": "Trauma",
        "description": "+{impact:%s} Impact for {time:%s} seconds on Repeated Hit. Stacks {stacks:%s} times."
    },
    "lasgun_p2_m3_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/weapons/player/melee/thunderhammer_2h_p1_m1": {
        "display_name": "\rCrucis Mk II Thunder Hammer",
        "description": "Power weapons of ancient design, Thunder Hammers are devastating, bone-shattering close combat weapons, though heavy and unwieldy."
    },
    "content/items/traits/bespoke_combataxe_p1/power_bonus_on_first_attack": {
        "display_name": "Limbsplitter",
        "description": "+{power_level:%s} Power on your First Attack every {cooldown:%s} seconds."
    },
    "content/items/traits/bespoke_combataxe_p2/power_bonus_on_first_attack": {
        "display_name": "Limbsplitter",
        "description": "+{power_level:%s} Power on your First Attack every {cooldown:%s} seconds."
    },
    "content/items/perks/ranged_common/wield_increase_monster_enemy_damage": {
        "description": "+{damage:%s} Ranged Damage (Monstrosities)"
    },
    "combataxe_p1_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_shotgun_p1/power_bonus_on_hitting_single_enemy_with_all": {
        "display_name": "Full Bore",
        "description": "+{power_level:%s} Power for {time:%s}s when every bullet in a shot hits the same enemy."
    },
    "content/items/traits/bespoke_combataxe_p2/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Brutal Momentum",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "content/items/traits/bespoke_forcesword_p1/elite_kills_grants_stackable_power": {
        "display_name": "Superiority",
        "description": "+{power_level:%s} Power for {time:%s} s on Elite Kill. Stacks {stacks:%s} times, deteriorating one at a time."
    },
    "content/items/traits/bespoke_autogun_p1/allow_flanking_and_increased_damage_when_flanking": {
        "display_name": "Raking Fire",
        "description": "+{damage:%s} Damage when shooting Enemies in the back."
    },
    "content/items/traits/bespoke_lasgun_p1/count_as_dodge_vs_ranged_on_weakspot": {
        "display_name": "Ghost",
        "description": "Immune to Ranged Attacks for {time:%s}s on Weak Spot Hit."
    },
    "chainaxe_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/perks/gadget_common/trait_gadget_mission_credits_increase": {
        "description": "+{mission_reward_credit_modifier:%s} Ordo Dockets (Mission Rewards)"
    },
    "content/items/weapons/npc/ogryn_combatblade_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_powermaul_p1/taunt_target_on_hit": {
        "display_name": "Taunt on stagger",
        "description": "Staggering enemies will make them prioritise you as a target over other players."
    },
    "content/items/traits/bespoke_ogryn_club_p2/targets_receive_rending_debuff": {
        "display_name": "Thunderous",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on Hit. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_forcesword_p1/warp_charge_power_bonus": {
        "display_name": "Unstable Power",
        "description": "Up to +{power_level:%s} Power, scaling with Peril."
    },
    "content/items/traits/bespoke_combatknife_p1/chained_weakspot_hits_increases_power": {
        "display_name": "Executor",
        "description": "+{power_level:%s} Power Level on Repeated Weak Spot Hit. Stacks {stacks:%s} times."
    },
    "ogryn_thumper_power_stat": {
        "display_name": "Stopping Power"
    },
    "combatknife_p1_m2_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/weapons/player/melee/combataxe_p2_m1": {
        "display_name": "Atrox Mk II Tactical Axe",
        "description": "Derived from ancient hunting weapon designs, tactical axes are simple and cheap to produce, and deadly in the hands of a trained warrior."
    },
    "content/items/traits/bespoke_combataxe_p1/power_bonus_scaled_on_stamina": {
        "display_name": "All or Nothing",
        "description": "Up to +{power_level:%s} Power, as Stamina depletes."
    },
    "combataxe_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/weapons/player/melee/ogryn_club_p1_m1": {
        "display_name": "Brute-Brainer Mk III Latrine Shovel",
        "description": "It's a dirty job, but someone's got to do it. And nine times out of ten, that someone is an Ogryn."
    },
    "content/items/weapons/player/melee/ogryn_club_p1_m2": {
        "display_name": "Brute-Brainer Mk XIX Latrine Shovel",
        "description": "Supplying oversized shovels to front-line forces is a logistical nightmare, but, in the hands of Ogryn regiments, entire trench networks can be dug in a fraction of the usual time."
    },
    "autogun_p2_m1_stability_stat": {
        "display_name": "Stability"
    },
    "lasgun_p2_m1_power_stat": {
        "display_name": "Stopping Power"
    },
    "shotgun_p1_m2_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/weapons/player/melee/ogryn_club_p1_m3": {
        "display_name": "Brute-Brainer Mk V Latrine Shovel",
        "description": "An Ogryn's first job in the Astra Militarum is usually digging: latrines or trenches, it matters not. Some Ogryns get a bit attached to their shovel, believing it to be a treasured gift from the \"Emp'Rah\"."
    },
    "content/items/weapons/player/melee/ogryn_club_p2_m1": {
        "display_name": "\"Brunt Special\" Mk I Bully Club",
        "description": "Junk? Oo called it junk? Extra special club, this is. My own design. I got two meself just like it.\n- Gurry \u201CBrunt\u201D Cernik"
    },
    "combataxe_p2_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/player/melee/ogryn_club_p2_m3": {
        "display_name": "\"Brunt's Basher\" Mk IIIb Bully Club",
        "description": "One of a variety of weapons constructed by the Mourningstar's formidable quartermaster, Gurry \u201CBrunt\u201D Cernik, which he reserves for his favourite Ogryn customers."
    },
    "content/items/gadgets/defensive_gadget_1": {
        "display_name": "Saintly Fragment (Caged)"
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/weapons/npc/autogun_npc_02": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/weapons/player/melee/ogryn_slabshield_p1_m1": {},
    "ogryn_thumper_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_combatsword_p1/infinite_melee_cleave_on_crit": {
        "display_name": "Devastating Strike",
        "description": "+{hit_mass:%s} Cleave for {time:%s} seconds on Critical Hit."
    },
    "content/items/traits/bespoke_thumper_p2/grenades_stick_to_monsters": {
        "display_name": "Adhesive Charge",
        "description": "Your Grenades stick to Ogryns and Monstrosities"
    },
    "content/items/curios/curio_a_b01": {
        "display_name": "Stalwart's Mandible (Caged)",
        "description": "The Shrine of the Emperor's Tears is the grandest of buildings. A thousand statues hold their spears aloft to distant Terra.\n\nFrom the Record of Novitiate Messelina"
    },
    "content/items/gadgets/defensive_gadget_21": {
        "display_name": "Guardian Nocturnus (Casket)"
    },
    "shotgun_p1_m3_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/traits/bespoke_powersword_p1/increase_power_on_kill": {
        "display_name": "Slaughterer",
        "description": "+{power_level:%s} Power for {time:%s}s on Kill. Stacks {stacks:%s} times."
    },
    "shotgun_p1_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/perks/ranged_common/wield_increase_elite_enemy_damage": {
        "description": "+{damage:%s} Ranged Damage (Elites)"
    },
    "lasgun_p2_m1_dps_stat": {
        "display_name": "Damage"
    },
    "lasgun_p1_m1_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/weapons/player/melee/powersword_p1_m1": {
        "display_name": "Munitorum Mk III Power Sword",
        "description": "When activated, a power sword is wreathed in a hazy energy field, allowing the blade to slice through armour and flesh alike."
    },
    "content/items/weapons/player/melee/powersword_p1_m2": {
        "display_name": "Munitorum Mk VI Power Sword",
        "description": "Munitorum power swords are issued to senior officers of the Astra Militarum, as both badge of office and powerful melee weapon."
    },
    "combatsword_p3_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_combatsword_p3/stacking_rending_on_weakspot": {
        "display_name": "Uncanny Strike",
        "description": "+{rending:%s} Rending on Enemy Weak Spot Hit for {time:%s}s. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_lasgun_p3/count_as_dodge_vs_ranged_on_close_kill": {
        "display_name": "Hit & Run",
        "description": "Immune to Ranged Attacks for {time:%s}s on Close Range Kill."
    },
    "combatsword_p3_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_autogun_p3/damage_bonus_on_stagger_count": {
        "display_name": "No Respite",
        "description": "Up to +{damage:%s} Damage on Hit (Staggered Enemy), scaling with Stagger."
    },
    "combataxe_p2_m2_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/curios/curio_b_c01": {
        "display_name": "Redeemer's Hand (Reliquary)",
        "description": "To the dispossessed, she offered hope. To the indolent, purpose. To all, the glory of the God-Emperor.\n\nFrom Caladoc's Life of Messelina, Vol. IV"
    },
    "content/items/curios/curio_a_f02": {
        "display_name": "Obsidiax-Sheathed Bullet (Caged)",
        "description": "Cardinal Taric hath made his intolerance of rumour most profound. We art forbidden to speak of heretics, even as the horizon falls to smoke and fire.\n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/weapons/player/ranged/autogun_p1_m1": {
        "display_name": "Agripinaa Mk I Infantry Autogun",
        "description": "Unsubtle weapons, known for their excessive kick and bright muzzle flash, Agripinaa autoguns are still popular due to their stopping power and reliability."
    },
    "content/items/weapons/player/ranged/autogun_p1_m2": {
        "display_name": "Columnus Mk V Infantry Autogun",
        "description": "A rarity in the Moebian Domain, Columnus autoguns are prized for their high rate of fire, if somewhat deafening report."
    },
    "autogun_p3_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/weapons/player/ranged/autogun_p1_m3": {
        "display_name": "Graia Mk VIII Infantry Autogun",
        "description": "Well-regarded for their high rate of fire and sturdy construction, these autoguns are in short supply after a series of calamities befell the forge world of Graia."
    },
    "forcesword_p1_m1_weapon_special_warp_charge_cost": {
        "display_name": "Warp Resistance"
    },
    "content/items/traits/bespoke_ogryn_club_p2/heavy_chained_hits_increases_killing_blow_chance": {
        "display_name": "Haymaker",
        "description": "+{proc_chance:%s} to Instakill human-sized enemies on Chained Heavy Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/pass_past_armor_on_heavy_attack": {
        "display_name": "Unstoppable Force",
        "description": "Fully Charged Heavy Attacks ignore Enemy Hit Mass."
    },
    "content/items/weapons/player/melee/ogryn_combatblade_p1_m2": {
        "display_name": "Bull Butcher Mk III Cleaver",
        "description": "In the hands of an Ogryn, these massive, crude cleavers can rend a grown man in half with a single swipe."
    },
    "combatsword_p3_m3_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcesword_p1/increase_power_on_kill": {
        "display_name": "Slaughterer",
        "description": "+{power_level:%s} Power for {time:%s}s on Kill. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combataxe_p2/increase_power_on_hit": {
        "display_name": "Headtaker",
        "description": "+{power_level:%s} Power for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/ranged/autopistol_p1_m1": {
        "display_name": "Ius Mk III Shredder Autopistol",
        "description": "More popular with hive gangers than Moebian military forces, this autopistol's devastating rate of fire is near-legendary."
    },
    "combatknife_p1_m2_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/curios/curio_a_k01": {
        "display_name": "Guardian Nocturnus (Caged)",
        "description": "I had never seen Sister Messelina as I had that day. Timid no longer, but reborn in wrath.\n\nFrom Caladoc's Life of Messelina, Vol. III"
    },
    "chainsword_2h_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/increase_power_on_close_kill": {
        "display_name": "Deathspitter",
        "description": "+{power_level:%s} Power for {time:%s}s on Close Range Kill."
    },
    "content/items/curios/curio_a_i01": {
        "display_name": "Mechanicus Icon Exemplar (Caged)",
        "description": "Cardinal Taric's disappearance remains a mystery. Worse is the empty reliquary.\n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/weapons/player/melee/combataxe_p2_m2": {
        "display_name": "Atrox Mk IV Tactical Axe",
        "description": "Axes, hammers, knives, sticks and stones. These are the weapons of humble, working folk. These are the tools of our liberation.\n- Jax Groll"
    },
    "content/items/weapons/player/ranged/bot_autogun_killshot": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/weapons/player/ranged/bot_laspistol_killshot": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/curios/curio_c_e01": {
        "display_name": "Inquisitorial Rosette (Casket)",
        "description": "When the gates of Cretoria fell, Messelina's work had scarcely begun.\n\nFrom Caladoc's Life of Messelina, Vol. XV"
    },
    "content/items/weapons/player/melee/chainaxe_p1_m2": {
        "display_name": "Orestes Mk XII Assault Chainaxe",
        "description": "An extended chainguard represents one of few \"safety measures\" introduced in the Mk VII, offering at least some protection from the weapon's notorious kickback."
    },
    "combataxe_p1_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/weapons/player/ranged/flamer_p1_m1": {
        "display_name": "Artemia Mk III Purgation Flamer",
        "description": "Hailing from the same forge world as the mighty Hellhound flame tank, this weapon uses volatile promethium to scour heretics with fire."
    },
    "content/items/weapons/player/ranged/forcestaff_p1_m1": {
        "display_name": "Equinox Mk III Trauma Force Staff",
        "description": "Through the intricate psi-convectors of a force staff, a psyker harnesses the pure energy of the Warp, unleashing it upon their enemies in ferocious psychic cavalcades. "
    },
    "content/items/weapons/player/ranged/forcestaff_p2_m1": {
        "display_name": "Rifthaven Mk II Purgatus Force Staff",
        "description": "The Inquisitor leads the way with words of benevolence, his force staff held like a symbol of faith. But make no mistake: they are no shepherds of the meek. They are destroyers of worlds.\n- High Ecclesiarch Renald Kothar"
    },
    "content/items/traits/bespoke_thumper_p1/crit_chance_based_on_aim_time": {
        "display_name": "Surgical",
        "description": "+{crit_chance:%s} Critical Chance for every {time:%s} second while aiming. Stacks {stacks:%s} times. Discharges all stacks upon firing."
    },
    "content/items/traits/bespoke_forcestaff_p4/uninterruptable_while_charging": {
        "display_name": "Focused Channelling",
        "description": "Your Secondary Attack cannot be interrupted."
    },
    "content/items/weapons/player/ranged/ogryn_rippergun_p1_m3": {
        "display_name": "Foe-Rend Mk VI Ripper Gun",
        "description": "Compensating for the Ogryns' lack of focus, this ripper gun variant combines a wide scattershot with a semi-auto burst mode, causing very loud, very messy carnage at close range."
    },
    "content/items/traits/bespoke_chainaxe_p1/power_bonus_based_on_charge_time": {
        "display_name": "Thrust",
        "description": "Up to +{power_level:%s} Power based on the charge time of your heavy attacks. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/ranged/ogryn_gauntlet_p1_m1": {
        "display_name": "Blastoom Mk III Grenadier Gauntlet",
        "description": "A heavy grenade launcher beloved of Bullgryn units, grenadier gauntlets are strapped to their user's arm simply to prevent the slow-witted Ogryn from losing them..."
    },
    "content/items/traits/bespoke_powersword_p1/weakspot_bonus_on_activated_attacks": {
        "display_name": "Exploit Weakness",
        "description": "+{damage:%s} Damage on Weak Spot Special Action Hit."
    },
    "content/items/traits/bespoke_lasgun_p1/first_shot_ammo_cost_reduction": {
        "display_name": "Efficiency",
        "description": "+{ammo:%s} Reduced Ammo use after not shooting for {time:%s}s."
    },
    "content/items/traits/bespoke_forcestaff_p3/faster_charge_on_chained_secondary_attacks": {
        "display_name": "Warp Flurry",
        "description": "{charge_time:%s}  Charge Time on Chained Secondary Attack. Stacks {stacks:%s} times."
    },
    "combataxe_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/player/ranged/lasgun_p1_m3": {
        "display_name": "Kantrael MG XII Infantry Lasgun",
        "description": "With its improved charge pack and focussing array, the MG XII is amongst the most powerful lasguns to come out of the manufactorums of Kantrael, albeit somewhat slower to fire than its cousins."
    },
    "content/items/weapons/player/ranged/lasgun_p2_m1": {
        "display_name": "Lucius Mk I Helbore Lasgun",
        "description": "Most Lucius-pattern lasguns operate in the 21 megathoule range, discharging a more powerful shot, but draining their power packs more rapidly."
    },
    "shotgun_default_range_stat": {
        "display_name": "Range"
    },
    "content/items/weapons/player/ranged/lasgun_p3_m1": {
        "display_name": "Accatran Mk II Recon Lasgun",
        "description": "Accatran lasguns are typified by their short, almost carbine-like profile, and high rate of fire, which make them ideal for use in the confines of boarding actions, cityfights, or trench warfare."
    },
    "content/items/traits/bespoke_autogun_p3/crit_chance_based_on_ammo_left": {
        "display_name": "Crucian Roulette",
        "description": "+{crit_chance:%s} Critical Chance for each expended round in your weapon (resets on reload)."
    },
    "content/items/weapons/player/ranged/lasgun_p3_m3": {
        "display_name": "Accatran Mk VIIa Recon Lasgun",
        "description": "They say the lasgun is a \"humble\" weapon. I say it's the most efficient tool in the galaxy. Billions of liberated souls can't be wrong. - Lord Militant Ennic Baross"
    },
    "content/items/perks/melee_common/wield_increase_disgustingly_resilient_damage": {
        "description": "+{damage:%s} Damage (Infested Enemies)"
    },
    "content/items/weapons/player/melee/combatsword_p1_m2": {
        "display_name": "Catachan Mk IV \"Devil's Claw\" Sword",
        "description": "Named after the Catachan Devil, a fearsome predator from the Catachan jungles, this massive blade is the most prized weapon of the eponymous regiment."
    },
    "content/items/weapons/player/ranged/laspistol_p1_m1": {
        "display_name": "Accatran MG Mk II Heavy Laspistol",
        "description": "Used by officers of the Astra Militarum throughout the galaxy, this heavy laspistol packs a considerable punch."
    },
    "content/items/weapons/player/ranged/laspistol_p1_m3": {
        "display_name": "Kantrael Mk X Heavy Laspistol",
        "description": "Dubbed the 'defender', the Kantrael MG is the sidearm of choice for Cadian regiments, and has likewise found favour amongst the Moebian Steepleguard."
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/consecutive_hits_increases_stagger": {
        "display_name": "Trauma",
        "description": "+{impact:%s} Impact for {time:%s} seconds on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_flamer_p1/faster_reload_on_empty_clip": {
        "display_name": "Quickflame",
        "description": "+{reload_speed:%s} Reload Speed if empty."
    },
    "content/items/curios/curio_a_j02": {
        "display_name": "Guardian of the Hateful (Caged)",
        "description": "No mercy for the heretic! Not one drop of remorse. Not one tear shed. \n\nAttributed to Saint Messelina \n>>timestamp -5.3.39.KE.M39<<"
    },
    "content/items/traits/bespoke_ogryn_club_p1/toughness_recovery_on_chained_attacks": {
        "display_name": "Confident Strike",
        "description": "+{toughness:%s} toughness on Chained Hit."
    },
    "bolter_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_rippergun_p1/toughness_on_continuous_fire": {
        "display_name": "Inspiring Barrage",
        "description": "+{toughness:%s} Toughness for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/melee/ogryn_club_p2_m2": {
        "display_name": "\"Brunt's Pride\" Mk II Bully Club",
        "description": "Best club I ever made, dis. Modelled after me favourite club dat I lost on Fortanis. Eaten by a bleedin' Tyranid. Nearly brought me to tears, I tell ya.\n- Gurry \u201CBrunt\u201D Cernik"
    },
    "ogryn_club_p2_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_combataxe_p3/consecutive_hits_increases_stagger": {
        "display_name": "Trauma",
        "description": "+{impact:%s} Impact for {time:%s} seconds on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/perks/melee_common/wield_increase_power_modifier": {
        "description": "+{power_mod:%s} Power"
    },
    "content/items/traits/bespoke_autopistol_p1/recoil_reduction_and_suppression_increase_on_close_kills": {
        "display_name": "Powderburn",
        "description": "+{damage:%s} Damage against Suppressed Enemies, +{suppression:%s} Suppression and -{recoil_reduction:%s} Recoil on Close Range Kill."
    },
    "autogun_p1_m1_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/traits/bespoke_ogryn_slabshield_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "lasgun_p1_m1_power_stat": {
        "display_name": "Power"
    },
    "content/items/weapons/player/ranged/plasmagun_p1_m1": {
        "display_name": "M35 Magnacore Mk II Plasma Gun",
        "description": "Firing an energized ball of hydrogen-based plasma along a linear electromagnetic accelerator, plasma guns are deadly, if prone to dangerous overheating."
    },
    "content/items/traits/bespoke_stubrevolver_p1/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "lasgun_p2_m3_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/weapons/npc/thunderhammer_d7_zealot_f": {},
    "content/items/weapons/player/melee/ogryn_powermaul_p1_empty": {
        "display_name": "[Empty]",
        "description": "[Empty]"
    },
    "content/items/traits/bespoke_forcestaff_p4/increased_crit_chance_scaled_on_peril": {
        "display_name": "Warp Nexus",
        "description": "Gain between {crit_chance:%s} and {crit_chance_max:%s} Critical Chance based on current level of peril."
    },
    "forcestaff_p4_m1_vent_speed_stat": {
        "display_name": "Quell Speed"
    },
    "content/items/traits/bespoke_combatknife_p1/heavy_chained_hits_increases_killing_blow_chance": {
        "display_name": "Haymaker",
        "description": "+{proc_chance:%s} to Instakill human-sized enemies on Chained Heavy Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/ammo_refill_from_reserve_on_crit": {
        "display_name": "Charmed Reload",
        "description": "+{bullet_amount:%s} bullets loaded from Reserve on Critical Hit."
    },
    "content/items/traits/bespoke_autogun_p1/increase_power_on_close_kill": {
        "display_name": "Deathspitter",
        "description": "+{power_level:%s} Power for {time:%s}s on Close Range Kill."
    },
    "flamer_p1_m1_burninating_stat": {
        "display_name": "Burn"
    },
    "content/items/weapons/player/ranged/shotgun_p1_m2": {
        "display_name": "Agripinaa Mk VII Combat Shotgun",
        "description": "Combat shotguns are ideally suited for battle in the close confines of a hive city."
    },
    "plasmagun_p1_m1_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/traits/bespoke_plasmagun_p1/lower_overheat_gives_faster_charge": {
        "display_name": "Volatile",
        "description": "+{charge_speed:%s}Charge Speed on low Overheat. Stacks up to {stacks:%s} times. "
    },
    "content/items/traits/bespoke_lasgun_p3/increase_power_on_close_kill": {
        "display_name": "Deathspitter",
        "description": "+{power_level:%s} Power for {time:%s}s on Close Range Kill."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/armor_rend_on_chained_hits": {
        "display_name": "Perforate",
        "description": "+{rend:%s} Rending (Armoured Enemies) on Repeated Hit."
    },
    "content/items/perks/ranged_common/wield_reduce_sprint_cost": {
        "description": "+{sprinting_cost_multiplier:%s} Sprint Efficiency"
    },
    "content/items/weapons/player/melee/ogryn_combatblade_p1_m1": {
        "display_name": "Krourk Mk VI Cleaver",
        "description": "Rather than waste precious forge world resources on the manufacture of Ogryn blades, a variety of crude tribal knives and cleavers are forged by half-competent Bone 'Ead smiths for their compatriots."
    },
    "content/items/weapons/npc/autogun_npc_01": {
        "display_name": "The autogun can fire an impressive amount of solid rounds in rapid fashion. Whether or not you hit anything, well that's up to you...",
        "description": "Graia Mk II Autogun"
    },
    "content/items/weapons/player/ranged/stubrevolver_p1_m1": {
        "display_name": "Zarona Mk IIa Quickdraw Stub Revolver",
        "description": "One of the most ancient pistol designs, stub revolvers endure across myriad frontier worlds thanks to their durability, simplicity and effectiveness."
    },
    "content/items/weapons/player/ranged/stubrevolver_p1_m2": {
        "display_name": "Agripinaa Mk XIV Quickdraw Stub Revolver",
        "description": "A surprisingly weighty, high-calibre pistol, the stopping power of an Agripinaa stub revolver belies its compact size. "
    },
    "content/items/curios/curio_c_c01": {
        "display_name": "Redeemer's Hand (Casket)",
        "description": "On Komaris, as on the reborn Messelina Gloriana, the faithful flocked to her, giving their lives for God-Emperor.\n\nFrom Caladoc's Life of Messelina, Vol. XV"
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Brutal Momentum",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "content/items/weapons/player/melee/combataxe_p1_m2": {
        "display_name": "Antax Mk V Combat Axe",
        "description": "Issued to planetary defenders during trench warfare, light axes are used not just for clearing paths and chopping firewood on long campaigns, but also for hacking away at invaders during desperate close actions."
    },
    "content/items/traits/bespoke_rippergun_p1/increase_close_damage_on_close_kill": {
        "display_name": "Fire Frenzy",
        "description": "Gain +{close_damage:%s} Close Damage for {time:%s} seconds after killing an enemy at close range, stacking {stacks:%s} times."
    },
    "content/items/traits/bespoke_ogryn_heavystubber_p1/toughness_on_continuous_fire": {
        "display_name": "Inspiring Barrage",
        "description": "+{toughness:%s} Toughness for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/melee/combatsword_p3_m2": {
        "display_name": "Maccabian Mk IV Duelling Sword",
        "description": "Maccabian swords are renowned for their light weight, keen edge and ostentatious detailing. The Mk IV is a particular favourite of Navy commanders, Rogue Traders and Lord Inquisitors alike."
    },
    "content/items/traits/bespoke_chainaxe_p1/movement_speed_on_activation": {
        "display_name": "Rev it Up",
        "description": "+{movement_speed:%s} Movement Speed for {time:%s}s on Weapon Special Activation."
    },
    "lasgun_p3_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "ogryn_gauntlet_p1_m1_explosion_antiarmor": {
        "display_name": "Penetration (Blast)"
    },
    "content/items/traits/bespoke_chainaxe_p1/increase_power_on_kill": {
        "display_name": "Slaughterer",
        "description": "+{power_level:%s} Power for {time:%s}s on Kill. Stacks {stacks:%s} times."
    },
    "combatknife_p1_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/weapons/player/melee/forcesword_p1_m1": {
        "display_name": "Obscurus Mk II Blaze Force Sword",
        "description": "An elegant weapon, made powerful indeed in the hands of a psyker. "
    },
    "content/items/traits/bespoke_powermaul_2h_p1/consecutive_hits_increases_stagger": {
        "display_name": "Trauma",
        "description": "+{impact:%s} Impact for {time:%s} seconds on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_chainsword_p1/increased_melee_damage_on_multiple_hits": {
        "display_name": "Rampage",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds."
    },
    "content/items/curios/curio_a_a01": {
        "display_name": "Saintly Fragment (Caged)",
        "description": "I hath journeyed far on a pilgrimage of wonder to this most distant Moebian Domain. May the God-Emperor watch over me. \n\nFrom the Record of Novitiate Messelina "
    },
    "content/items/traits/bespoke_laspistol_p1/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/perks/melee_common/wield_reduce_block_cost": {
        "description": "+{reduced_block_cost:%s} Block Efficiency"
    },
    "content/items/perks/ranged_common/wield_increase_berserker_damage": {
        "description": "+{damage:%s} Damage (Maniacs)"
    },
    "content/items/traits/bespoke_flamer_p1/crit_chance_on_hitting_multiple": {
        "display_name": "Purge",
        "description": "Hitting multiple enemies increases critical hit chance by {crit_chance:%s} for {time:%s} seconds."
    },
    "content/items/traits/bespoke_laspistol_p1/burninating_on_crit": {
        "display_name": "Infernus",
        "description": "+{stacks:%s} Burn Stack(s) on Critical Hit to a maximum of {max_stacks:%s} Stack(s)."
    },
    "content/items/traits/bespoke_autogun_p2/increase_close_damage_on_close_kill": {
        "display_name": "Fire Frenzy",
        "description": "Gain +{close_damage:%s} Close Damage for {time:%s} seconds after killing an enemy at close range, stacking {stacks:%s} times."
    },
    "forcestaff_p3_m1_crit_stat": {
        "display_name": "Critical Bonus"
    },
    "content/items/traits/bespoke_chainsword_2h_p1/movement_speed_on_activation": {
        "display_name": "Rev it Up",
        "description": "+{movement_speed:%s} Movement Speed for {time:%s}s on Weapon Special Activation."
    },
    "content/items/traits/bespoke_powermaul_p1/stacking_increase_impact_on_hit": {
        "display_name": "Hammerblow",
        "description": "+{impact:%s} Impact for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combatsword_p2/increased_melee_damage_on_multiple_hits": {
        "display_name": "Rampage",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds."
    },
    "content/items/perks/melee_common/wield_increase_super_armor_damage": {
        "description": "+{damage:%s} Damage (Carapace Armoured Enemies)"
    },
    "content/items/traits/bespoke_bolter_p1/stacking_crit_bonus_on_continuous_fire": {
        "display_name": "Cavalcade",
        "description": "+{crit_chance:%s} Critical Chance for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "shotgun_p1_m3_power_stat": {
        "display_name": "Stopping Power"
    },
    "autopistol_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "chainaxe_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_thumper_p1/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "combataxe_p2_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_rippergun_p1/toughness_on_close_range_kills": {
        "display_name": "Born in Blood",
        "description": "+{toughness:%s} Toughness on Close Range Kill."
    },
    "ogryn_powermaul_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p2_m1_dps_stat": {
        "display_name": "Damage"
    },
    "ogryn_heavystubber_range_stat": {
        "display_name": "Range"
    },
    "lasgun_p3_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/npc/ogryn_rippergun_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "lasgun_p3_m1_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p2_m2_crit_stat": {
        "display_name": "Critical Bonus"
    },
    "ogryn_heavystubber_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_autopistol_p1/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/traits/bespoke_lasgun_p3/followup_shots_ranged_weakspot_damage": {
        "display_name": "Punishing Salvo",
        "description": "+{damage:%s} Weakspot Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_mutants": {
        "description": "+{damage_reduction:%s} Damage Resistance (Mutants)"
    },
    "content/items/weapons/npc/lasgun_d7_veteran_m": {},
    "autogun_p2_m3_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_powermaul_p1/burn_chance_on_activated_attacks_on_armour": {
        "display_name": "Ignite",
        "description": "+{proc_chance:%s} chance of +Burn {stacks:%s} on Special Attack (Mainstay Enemies)."
    },
    "thunderhammer_p1_m1_defence_stat": {
        "display_name": "Defences"
    },
    "lasgun_p2_m3_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "content/items/weapons/player/ranged/lasgun_p2_m2": {
        "display_name": "Lucius Mk II Helbore Lasgun",
        "description": "A more elegant design of the Lucius Mk I. Once the preserve of officers in the Death Korps of Krieg, this aging but reliable model has found its way into the hands of soldiers across the galaxy."
    },
    "content/items/gadgets/defensive_gadget_6": {
        "display_name": "Redeemer's Gilded Hand (Caged)"
    },
    "content/items/traits/bespoke_combatsword_p2/infinite_melee_cleave_on_weakspot_kill": {
        "display_name": "Deathblow",
        "description": "+{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass."
    },
    "ogryn_club_p1_m1_control_stat": {
        "display_name": "Crowd Control"
    },
    "powersword_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_autogun_p3/crit_chance_based_on_aim_time": {
        "display_name": "Surgical",
        "description": "+{crit_chance:%s} Critical Chance for every {time:%s} second while aiming. Stacks {stacks:%s} times. Discharges all stacks upon firing."
    },
    "content/items/traits/bespoke_lasgun_p3/consecutive_hits_increases_close_damage": {
        "display_name": "Dumdum",
        "description": "+{damage:%s} Close Range damage on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcestaff_p1/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/weapons/player/ranged/autogun_p3_m2": {
        "display_name": "Vraks Mk VII Headhunter Autogun",
        "description": "Heavily modified to combat snipers during siege actions, the Vraks Headhunter is an unusual single-shot autogun designed for high-accuracy takedowns."
    },
    "content/items/traits/bespoke_shotgun_p1/increase_power_on_close_kill": {
        "display_name": "Deathspitter",
        "description": "+{power_level:%s} Power for {time:%s}s on Close Range Kill."
    },
    "autogun_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_autopistol_p1/stacking_power_bonus_on_staggering_enemies": {
        "display_name": "Pinning Fire",
        "description": "+{power_level:%s} Power for every Enemy you Stagger. Stacks {stacks:%s} times. "
    },
    "content/items/traits/bespoke_thumper_p2/suppression_on_continuous_fire": {
        "display_name": "Ceaseless Barrage",
        "description": "+{suppression:%s} Suppression for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "content/items/weapons/npc/autogun_npc_03": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/weapons/npc/ogryn_gauntlet_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/toughness_recovery_on_chained_attacks": {
        "display_name": "Confident Strike",
        "description": "+{toughness:%s} toughness on Chained Hit."
    },
    "laspistol_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_combatknife_p1/increased_crit_chance_on_staggered_weapon_special_hit": {
        "display_name": "Smackdown",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on Special Action Hit (Staggered Enemy)."
    },
    "content/items/weapons/player/melee/bot_combatsword_linesman_p1": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_flamer_p1/chance_to_explode_elites_on_kill": {
        "display_name": "Showstopper",
        "description": "{proc_chance:%s}% chance Elite and Special enemies Explode on kill."
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_combataxe_p2/dodge_grants_crit_chance": {
        "display_name": "Riposte",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on successful Dodge."
    },
    "shotgun_p1_m3_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p3_m3_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/weapons/player/melee/ogryn_powermaul_slabshield_p1_m1": {
        "display_name": "Orox Mk II Battle Maul & Mk III Slab Shield",
        "description": "Simple but effective, a slab shield turns an Ogryn into a wall of walking cover, near impervious to enemy attacks."
    },
    "content/items/traits/bespoke_ogryn_club_p1/targets_receive_rending_debuff": {
        "display_name": "Thunderous",
        "description": "Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on Hit. Lasts {time:%s}s."
    },
    "chainaxe_defence_stat": {
        "display_name": "Defences"
    },
    "chainsword_2h_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_forcestaff_p4/followup_shots_ranged_damage": {
        "display_name": "Sustained Fire",
        "description": "+{damage:%s} Damage on Third and Fourth shots in a Salvo."
    },
    "content/items/curios/curio_b_j01": {
        "display_name": "Guardian of the Lost (Reliquary)",
        "description": "A hand raised in the God-Emperor's service is worth more than gold.\n\nAttributed to Saint Messelina \n>>timestamp -10.12.34.KE.M39<<"
    },
    "plasmagun_p1_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/curios/curio_c_f02": {
        "display_name": "Obsidiax-Sheathed Bullet (Casket)",
        "description": "Those I sent to the flame were steeped in perfidy. Heretics one and all. I am bereft of guilt.\n\nAttributed to Saint Messelina \n>>timestamp -6.7.32.KE.M39<<"
    },
    "flamer_p1_m1_size_of_flame_stat": {
        "display_name": "Cloud Radius"
    },
    "content/items/traits/bespoke_autogun_p2/count_as_dodge_vs_ranged_on_close_kill": {
        "display_name": "Hit & Run",
        "description": "Immune to Ranged Attacks for {time:%s}s on Close Range Kill."
    },
    "content/items/gadgets/defensive_gadget_14": {
        "display_name": "Herald's Seal (Reliquary)"
    },
    "content/items/traits/bespoke_rippergun_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "ogryn_club_p2_m3_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/weapons/player/melee/chainsword_2h_p1_m2": {
        "display_name": "Tigrus Mk XV Heavy Eviscerator",
        "description": "Strength alone is not enough to effectively wield an Eviscerator, but zeal and rage can compensate. As such, it has become associated with righteous fury, and is a favoured weapon of firebrand preachers."
    },
    "content/items/gadgets/defensive_gadget_11": {
        "display_name": "Blessed Bullet (Reliquary)"
    },
    "ogryn_powermaul_slabshield_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_ogryn_slabshield_p1/taunt_target_on_hit": {
        "display_name": "Taunt on stagger",
        "description": "Staggering enemies will make them prioritise you as a target over other players."
    },
    "laspistol_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_chainsword_2h_p1/toughness_recovery_on_multiple_hits": {
        "display_name": "Momentum",
        "description": "Hitting at least {multiple_hit:%s} enemies with an attack, restores {toughness:%s} toughness."
    },
    "content/items/traits/bespoke_rippergun_p1/bleed_on_crit": {
        "display_name": "Flechette",
        "description": "+{stacks:%s} Bleed Stacks on Critical Hit."
    },
    "content/items/traits/bespoke_chainaxe_p1/guaranteed_melee_crit_on_activated_kill": {
        "display_name": "Bloodthirsty",
        "description": "+{crit_chance:%s} Critical Chance on your next Melee Attack after Special Attack Kill."
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/crit_chance_on_cleaving_melee": {
        "display_name": "Scattering Strike",
        "description": "Cleaving trough several enemies with gauntlet melee attack increases crit chance by {crit_chance:%s} for {time:%s} seconds."
    },
    "content/items/weapons/player/ranged/bot_lasgun_killshot": {
        "display_name": "Kantrael Mk IV Lasgun",
        "description": "The lasgun is the mainstay weapon of the Astra Militarum, and is considered solid and reliable."
    },
    "lasgun_p3_m2_dps_stat": {
        "display_name": "Damage"
    },
    "forcestaff_p1_m1_warp_charge_cost_stat": {
        "display_name": "Warp Resistance"
    },
    "content/items/traits/unknown_trait": {
        "display_name": "NEW Blessing",
        "description": "Consecrating this item will add a Blessing."
    },
    "ogryn_powermaul_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/weapons/player/ranged/high_bot_autogun_killshot": {},
    "ogryn_powermaul_slabshield_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/traits/bespoke_lasgun_p2/crit_chance_based_on_aim_time": {
        "display_name": "Surgical",
        "description": "+{crit_chance:%s} Critical Chance for every {time:%s} second while aiming. Stacks {stacks:%s} times. Discharges all stacks upon firing."
    },
    "content/items/traits/bespoke_autogun_p3/negate_stagger_reduction_on_weakspot": {
        "display_name": "Falter",
        "description": "+{stagger:%s} Target Stagger on Weak Spot Hit."
    },
    "ogryn_club_p1_m3_dps_stat": {
        "display_name": "Damage"
    },
    "plasmagun_charge_cost_stat": {
        "display_name": "Thermal Resistance"
    },
    "ogryn_thumper_p1_m2_ammo_stat": {
        "display_name": "Ammo"
    },
    "ogryn_thumper_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/perks/ranged_common/wield_increase_weakspot_damage": {
        "description": "+{weakspot_damage:%s} Ranged Weak Spot Damage"
    },
    "content/items/traits/bespoke_combatsword_p3/chained_hits_increases_crit_chance": {
        "display_name": "Shred",
        "description": "+{crit_chance:%s} Bonus Critical Chance on Chained Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_forcestaff_p4/allow_hipfire_while_sprinting": {
        "display_name": "Run 'n' Gun",
        "description": "You can Hipfire with this weapon while Sprinting."
    },
    "content/items/traits/bespoke_combatknife_p1/dodge_grants_finesse_damage": {
        "display_name": "Precognition",
        "description": "+{damage:%s} Finesse Damage for {time:%s}s on successful Dodge."
    },
    "ogryn_thumper_p1_m2_explosion_size_stat": {
        "display_name": "Blast Radius"
    },
    "combatknife_p1_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "autopistol_p1_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "thunderhammer_p1_m1_control_stat": {
        "display_name": "Crowd Control"
    },
    "chainsword_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "combatsword_p2_m1_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "content/items/traits/bespoke_ogryn_powermaul_p1/staggered_targets_receive_increased_damage_debuff": {
        "display_name": "Skullcrusher",
        "description": "Target receives {stacks:%s} Stack(s) of +{damage:%s} Damage if already Staggered. Lasts {time:%s}s."
    },
    "content/items/traits/bespoke_autogun_p3/suppression_negation_on_weakspot": {
        "display_name": "Between the Eyes",
        "description": "Gain Suppression Immunity for {time:%s}s on Weak Spot Hit."
    },
    "autogun_p2_m1_control_stat": {
        "display_name": "Collateral"
    },
    "combatsword_p3_m2_dps_stat": {
        "display_name": "Damage"
    },
    "combatknife_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "autogun_p2_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/player/ranged/lasgun_p1_m1": {
        "display_name": "Kantrael MG Ia Infantry Lasgun ",
        "description": "The lasgun is cheap to manufacture and its rugged frame stands up well to the abuses of a long military campaign. "
    },
    "ogryn_powermaul_control_stat": {
        "display_name": "Crowd Control"
    },
    "content/items/weapons/player/ranged/ogryn_heavystubber_p1_m3": {
        "display_name": "Achlys Mk VII Twin-Linked Heavy Stubber",
        "description": "Heavy stubbers are crude weapons, hearkening to an earlier age. Twin-linked heavy stubbers are cumbersome to boot, requiring either a weapon carriage or an Ogryn to carry into battle."
    },
    "shotgun_p1_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_shotgun_p1/bleed_on_crit": {
        "display_name": "Flechette",
        "description": "+{stacks:%s} Bleed Stacks on Critical Hit."
    },
    "autogun_p2_m2_control_stat": {
        "display_name": "Collateral"
    },
    "combatsword_p3_m3_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "ogryn_club_p1_m3_control_stat": {
        "display_name": "Crowd Control"
    },
    "combatsword_p2_m3_dps_stat": {
        "display_name": "Damage"
    },
    "forcestaff_p4_m1_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "content/items/weapons/player/melee/combataxe_p2_m3": {
        "display_name": "Atrox Mk VII Tactical Axe",
        "description": "After seeing the effectiveness of simple axes in small melee actions, the Inquisitors of Crucis ordered a large custom shipment from Atrox with which to equip their strike teams."
    },
    "autopistol_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/weapons/player/melee/ogryn_powermaul_p1_m1": {
        "display_name": "Achlys Mk I Power Maul",
        "description": "Essentially a mace surrounded by a power field, the power maul's concussive strikes can be overcharged into a mighty blow, generating a powerful shockwave."
    },
    "autogun_p2_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/weapons/player/ranged/shotgun_p1_m3": {
        "display_name": "Kantrael Mk IX Combat Shotgun",
        "description": "In a packed hive tunnel this weapon can unleash some serious damage."
    },
    "content/items/gadgets/defensive_gadget_10": {
        "display_name": "Gilded Inquisitorial Rosette (Reliquary)"
    },
    "forcestaff_p3_m1_warp_charge_cost_stat": {
        "display_name": "Warp Resistance"
    },
    "content/items/perks/melee_common/wield_increase_damage": {
        "description": "+{damage:%s} Melee Damage"
    },
    "content/items/traits/bespoke_bolter_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "autogun_p1_m1_stability_stat": {
        "display_name": "Stability"
    },
    "forcestaff_p3_m1_vent_speed_stat": {
        "display_name": "Quell Speed"
    },
    "chainsword_p1_m2_sawing_stat": {
        "display_name": "Shredder"
    },
    "lasgun_p3_m2_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_powermaul_p1/chance_to_explode_enemy_on_activated_kill": {
        "display_name": "Rupture",
        "description": "+{proc_chance:%s}% chance enemy Explodes if killed by Special Attack."
    },
    "content/items/traits/bespoke_stubrevolver_p1/rending_on_crit": {
        "display_name": "Hand-Cannon",
        "description": "+{rend:%s} Rending on Critical Hit."
    },
    "ogryn_combatblade_p1_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/weapons/player/melee/forcesword_p1_m3": {
        "display_name": "Illisi Mk V Blaze Force Sword",
        "description": "Favoured by the Ordo Hereticus, Illisi force swords contain a tightly woven psi-matrix within their carbosteel blades, making the weapon highly resistant to corruption."
    },
    "content/items/traits/bespoke_lasgun_p2/faster_charge_on_chained_attacks": {
        "display_name": "Onslaught",
        "description": "Chaining Charged Attacks reduces their Charge Time by {charge_time:%s}. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_autopistol_p1/reload_speed_on_slide": {
        "display_name": "Speedload",
        "description": "+{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times."
    },
    "shotgun_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/curios/curio_c_d01": {
        "display_name": "Scrap of Scripture (Casket)",
        "description": "Messelina bore each act of heresy as a personal wound. \n\nFrom Caladoc's Life of Messelina, Vol. XV"
    },
    "autogun_p2_m3_stability_stat": {
        "display_name": "Stability"
    },
    "content/items/gadgets/defensive_gadget_2": {
        "display_name": "Gilded Fragment (Caged)"
    },
    "content/items/weapons/player/melee/combataxe_p1_m1": {
        "display_name": "Rashad Mk II Combat Axe",
        "description": "The humble combat axe is an unfashionable but effective weapon, its weighted head often doing far more damage on the swing that the blade itself."
    },
    "combatsword_p3_m3_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/perks/melee_common/wield_increase_crit_chance": {
        "description": "+{crit_chance:%s} Melee Critical Hit Chance"
    },
    "shotgun_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_ogryn_combatblade_p1/increase_power_on_kill": {
        "display_name": "Slaughterer",
        "description": "+{power_level:%s} Power for {time:%s}s on Kill. Stacks {stacks:%s} times."
    },
    "content/items/weapons/player/ranged/lasgun_p2_m3": {
        "display_name": "Lucius Mk III Helbore Lasgun",
        "description": "With their extended barrels and bayonet loops, Lucius-pattern lasguns are well-regarded by assault troops who seek out melee after discharging a few volleys."
    },
    "ogryn_club_p2_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/gadgets/defensive_gadget_22": {
        "display_name": "Guardian Gloriana (Casket)"
    },
    "content/items/traits/bespoke_combatknife_p1/bleed_on_crit": {
        "display_name": "Flesh Tearer",
        "description": "+{stacks:%s} Bleed Stacks on Critical Hit."
    },
    "content/items/weapons/player/melee/combataxe_p3_m1": {
        "display_name": "Standard-issue Munitorum Sapper Shovel",
        "description": "A sturdy shovel, typically with one sharp edge for cutting, is a standard piece of kit in an infantry platoon's support gear."
    },
    "thunderhammer_p1_m2_control_stat": {
        "display_name": "Crowd Control"
    },
    "content/items/weapons/player/ranged/autogun_p2_m1": {
        "display_name": "Columnus Mk II Braced Autogun",
        "description": "A commander's prime concern is strategy. A soldier's duty is to plant their feet and blaze away.\n- Lord Militant Ennic Baross"
    },
    "lasgun_p1_m3_power_stat": {
        "display_name": "Stopping Power"
    },
    "ogryn_powermaul_power_output_stat": {
        "display_name": "Power Output"
    },
    "thunderhammer_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/weapons/player/melee/ogryn_combatblade_p1_m3": {
        "display_name": "Krourk Mk IV Cleaver",
        "description": "These enormous blades are almost too heavy for a guardsman to lift, but in the hands of an Ogryn they're little more than lightweight daggers."
    },
    "content/items/curios/curio_c_f01": {
        "display_name": "Blessed Bullet (Casket)",
        "description": "In Messelina's name, I rousted every tainted soul and gave them the redemption of fire.\n\nFrom Caladoc's Life of Messelina, Vol. XV"
    },
    "combataxe_p2_p3_crit_stat": {
        "display_name": "Critical Bonus"
    },
    "powersword_p1_m2_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "combatsword_p1_m1_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "shotgun_p1_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "ogryn_club_p2_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "rippergun_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "combatsword_p1_m1_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "lasgun_p1_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "combatsword_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "combataxe_p2_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "combataxe_p3_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "ogryn_heavystubber_stability_stat": {
        "display_name": "Stability"
    },
    "lasgun_p3_m2_stability_stat": {
        "display_name": "Stability"
    },
    "flamer_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "forcestaff_p3_m1_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "combatsword_p2_m1_defence_stat": {
        "display_name": "Defences"
    },
    "shotgun_p1_m2_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_thumper_p1/power_bonus_on_hitting_single_enemy_with_all": {
        "display_name": "Full Bore",
        "description": "+{power_level:%s} Power for {time:%s}s when every bullet in a shot hits the same enemy."
    },
    "content/items/perks/ranged_common/wield_increase_critical_strike_damage": {
        "description": "+{crit_damage:%s} Ranged Critical Hit Damage"
    },
    "ogryn_club_p1_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "forcestaff_p1_m1_explosion_size_stat": {
        "display_name": "Blast Radius"
    },
    "thunderhammer_p1_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/perks/melee_common/wield_increase_critical_strike_damage": {
        "description": "+{crit_damage:%s} Melee Critical Hit Damage"
    },
    "ogryn_club_p1_m1_defence_stat": {
        "display_name": "Defences"
    },
    "lasgun_p1_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "combatsword_p2_m3_cleave_targets_stat": {
        "display_name": "Cleave Targets"
    },
    "ogryn_club_p2_m2_finesse_stat": {
        "display_name": "Finesse"
    },
    "autogun_p3_m1_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/perks/ranged_common/wield_increase_roaming_enemy_damage": {
        "description": "+{damage:%s} Increased Ranged Damage (Roamers)"
    },
    "bolter_p1_m1_stability_stat": {
        "display_name": "Stability"
    },
    "powersword_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "lasgun_p1_m3_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/curios/curio_a_h02": {
        "display_name": "Laurel of the Just (Caged)",
        "description": ">>Timestamp: -10.3.39.KE.M39<<\n>>Private Datastack: Taric/Dn<<\n\nThe shrine cannot be held. Emperor protect me, but I must make arrangements for its treasures to be preserved elsewhere."
    },
    "content/items/weapons/player/melee/bot_combataxe_linesman": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "forcestaff_p3_m1_dps_stat": {
        "display_name": "Damage"
    },
    "forcestaff_p1_m1_vent_speed_stat": {
        "display_name": "Quell Speed"
    },
    "content/items/traits/bespoke_stubrevolver_p1/crit_chance_bonus_on_melee_kills": {
        "display_name": "Point Blank",
        "description": "+{crit_chance:%s} Ranged Critical Chance after Melee Kill for {time:%s} seconds."
    },
    "content/items/weapons/player/trinkets/preview_trinket": {
        "display_name": "Weapon Trinket",
        "description": "++REDACTED++"
    },
    "lasgun_p2_m2_stability_stat": {
        "display_name": "Stability"
    },
    "chainsword_p1_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/perks/unknown_perk": {
        "description": "NEW Perk"
    },
    "content/items/traits/bespoke_ogryn_club_p2/increased_crit_chance_on_staggered_weapon_special_hit": {
        "display_name": "Smackdown",
        "description": "+{crit_chance:%s} Critical Chance for {time:%s}s on Special Action Hit (Staggered Enemy)."
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_hounds": {
        "description": "+{damage_reduction:%s} Damage Resistance (Pox Hounds)"
    },
    "content/items/weapons/player/melee/powermaul_2h_p1_m1": {
        "display_name": "Indignatus Mk IVe Crusher",
        "description": "Wot's better than a power maul for bashin' a heretic's skull in? I'll tell ya: A bigger power maul!\n- Gurry \u201CBrunt\u201D Cernik"
    },
    "content/items/perks/gadget_common/trait_gadget_revive_speed": {
        "description": "+{revive_speed_modifier:%s} Revive Speed (Ally)"
    },
    "autopistol_p1_m1_power_stat": {
        "display_name": "Stopping Power"
    },
    "content/items/traits/bespoke_combataxe_p3/power_bonus_on_first_attack": {
        "display_name": "Limbsplitter",
        "description": "+{power_level:%s} Power on your First Attack every {cooldown:%s} seconds."
    },
    "content/items/traits/bespoke_laspistol_p1/consecutive_hits_increases_close_damage": {
        "display_name": "Dumdum",
        "description": "+{damage:%s} Close Range damage on Repeated Hit. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_thumper_p2/armor_rend_on_aoe_crit": {
        "display_name": "Shattering Detonation",
        "description": "+{rend:%s} Rending on Critical Hit (explosion only)"
    },
    "content/items/traits/bespoke_chainsword_p1/movement_speed_on_activation": {
        "display_name": "Rev it Up",
        "description": "+{movement_speed:%s} Movement Speed for {time:%s}s on Weapon Special Activation."
    },
    "combataxe_p2_m1_crit_stat": {
        "display_name": "Critical Bonus"
    },
    "combatsword_p2_m3_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/curios/curio_b_j02": {
        "display_name": "Guardian of the Hateful (Reliquary)",
        "description": "Gloriana had fallen but the faithful saw it reclaimed. If thou be true of heart, thou shalt ever find thy path in flame! \n\nAttributed to Saint Messelina \n>>timestamp -10.12.32.KE.M39<<"
    },
    "laspistol_power_stat": {
        "display_name": "Stopping Power"
    },
    "ogryn_combatblade_p1_m1_dps_stat": {
        "display_name": "Damage"
    },
    "ogryn_club_p2_m2_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/traits/bespoke_forcestaff_p2/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "lasgun_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "forcestaff_p1_m1_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "content/items/weapons/player/melee/combataxe_p3_m3": {
        "display_name": "Munitorum Mk VII Sapper Shovel",
        "description": "Yeah, the tank crews get all the glory. But it's the poor saps in the infantry platoons who have to dig 'em out every time they get mired.\n- Captain Jerzy Modamus"
    },
    "lasgun_p2_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "ogryn_club_p2_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "combatsword_p2_m2_dps_stat": {
        "display_name": "Damage"
    },
    "lasgun_p1_m3_stability_stat": {
        "display_name": "Stability"
    },
    "ogryn_club_p2_m2_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p2_m3_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "thunderhammer_p1_m1_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/traits/bespoke_thunderhammer_2h_p1/taunt_target_on_hit": {
        "display_name": "Taunt on stagger",
        "description": "Staggering enemies will make them prioritise you as a target over other players."
    },
    "shotgun_p1_m1_control_stat": {
        "display_name": "Collateral"
    },
    "lasgun_p3_m3_dps_stat": {
        "display_name": "Damage"
    },
    "bolter_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/perks/gadget_common/trait_gadget_mission_reward_gear_instead_of_weapon_increase": {
        "display_name": "++REDACTED++",
        "description": "+{mission_reward_gear_instead_of_weapon_modifier:%s} chance of Curio as Mission Reward (instead of Weapon)"
    },
    "combataxe_p3_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every shot fired during continuous fire. Stacks {stacks:%s} times."
    },
    "combatsword_p2_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_combatknife_p1/rending_on_backstabs": {
        "display_name": "Ruthless Backstab",
        "description": "+{rending:%s} Rending on Backstab Hit."
    },
    "lasgun_p2_m3_ammo_stat": {
        "display_name": "Ammo"
    },
    "thunderhammer_p1_m1_first_target_stat": {
        "display_name": "First Target"
    },
    "powersword_p1_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_autogun_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "ogryn_powermaul_slabshield_control_stat": {
        "display_name": "Crowd Control"
    },
    "content/items/traits/bespoke_stubrevolver_p1/crit_chance_based_on_ammo_left": {
        "display_name": "Crucian Roulette",
        "description": "+{crit_chance:%s} Critical Chance for each expended round in your weapon (resets on reload)."
    },
    "ogryn_club_p2_m3_finesse_stat": {
        "display_name": "Finesse"
    },
    "ogryn_club_p1_m3_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "powermaul_2h_defence_stat": {
        "display_name": "Defences"
    },
    "ogryn_club_p2_m1_defence_stat": {
        "display_name": "Defences"
    },
    "ogryn_powermaul_slabshield_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "lasgun_p1_m2_ammo_stat": {
        "display_name": "Ammo"
    },
    "combataxe_p3_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "flamer_p1_m1_damage_stat": {
        "display_name": "Damage"
    },
    "thunderhammer_p1_m2_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/traits/bespoke_combataxe_p3/stacking_increase_impact_on_hit": {
        "display_name": "Hammerblow",
        "description": "+{impact:%s} Impact for {time:%s}s on Hit. Stacks {stacks:%s} times."
    },
    "combatsword_p2_m3_first_target_stat": {
        "display_name": "First Target"
    },
    "content/items/traits/bespoke_thumper_p1/toughness_on_continuous_fire": {
        "display_name": "Inspiring Barrage",
        "description": "+{toughness:%s} Toughness for every shot fired during continuous fire. Stacks {stacks:%s} times."
    },
    "ogryn_gauntlet_p1_m1_ammo": {
        "display_name": "Ammo"
    },
    "chainaxe_sawing_stat": {
        "display_name": "Shredder"
    },
    "shotgun_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "forcestaff_p2_m1_burninating_stat": {
        "display_name": "Burn"
    },
    "ogryn_club_p1_m2_dps_stat": {
        "display_name": "Damage"
    },
    "ogryn_club_p1_m2_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "content/items/weapons/npc/laspistol_npc_01": {
        "display_name": "++ PERDITUM SANCTUS ++",
        "description": "++ PERDITUM SANCTUS ++"
    },
    "content/items/traits/bespoke_autopistol_p1/suppression_on_close_kill": {
        "display_name": "Terrifying Barrage",
        "description": "Suppress Enemies within {range:%s} Radius on Close Range Kill."
    },
    "content/items/traits/bespoke_forcestaff_p2/increased_crit_chance_scaled_on_peril": {
        "display_name": "Warp Nexus",
        "description": "Gain between {crit_chance:%s} and {crit_chance_max:%s} Critical Chance based on current level of peril."
    },
    "content/items/gadgets/defensive_gadget_8": {
        "display_name": "Scrap of Scripture (Reliquary)"
    },
    "content/items/traits/bespoke_rippergun_p1/armor_rending_bayonette": {
        "display_name": "Can Opener",
        "description": "Target receives {stacks:%s} stacks of {rending:%s} Brittleness on weapon special hit. Lasts {time:%s}s"
    },
    "content/items/traits/bespoke_ogryn_gauntlet_p1/increased_damage_on_staggered_enemies": {
        "display_name": "Finisher",
        "description": "+{damage:%s} Damage (Staggered Enemies)."
    },
    "ogryn_heavystubber_control_stat": {
        "display_name": "Collateral"
    },
    "content/items/perks/gadget_common/trait_gadget_grim_corruption_resistance": {
        "description": "+{permanent_damage_converter_resistance:%s} Corruption Resistance (Grimoires)"
    },
    "chainsword_2h_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "combataxe_p3_m3_dps_stat": {
        "display_name": "Damage"
    },
    "combataxe_p2_m3_finesse_stat": {
        "display_name": "Finesse"
    },
    "powersword_p1_m1_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "content/items/weapons/player/melee/chainsword_2h_p1_m1": {
        "display_name": "Tigrus Mk II Heavy Eviscerator",
        "description": "An obscenely oversized chainsword, the Eviscerator utilizes a low-power disruption field  to enhance its incredibly messy, destructive capabilities."
    },
    "autopistol_p1_m1_control_stat": {
        "display_name": "Collateral"
    },
    "content/items/perks/ranged_common/wield_increase_armored_damage": {
        "description": "+{damage:%s} Damage (Flak Armoured Enemies)"
    },
    "combatsword_p3_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "combatsword_p3_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "lasgun_p1_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_powermaul_2h_p1/ignore_stagger_reduction_on_weakspot_hit": {
        "display_name": "Crump!",
        "description": "-Target {stagger_reduction:%s} Stagger Resistance on Weak Spot Hit."
    },
    "content/items/traits/bespoke_autogun_p1/increase_close_damage_on_close_kill": {
        "display_name": "Fire Frenzy",
        "description": "Gain +{close_damage:%s} Close Damage for {time:%s} seconds after killing an enemy at close range, stacking {stacks:%s} times."
    },
    "ogryn_combatblade_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "autogun_p1_m1_mobility_stat": {
        "display_name": "Mobility"
    },
    "forcesword_p1_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "combatsword_p3_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/traits/bespoke_shotgun_p1/count_as_dodge_vs_ranged_on_close_kill": {
        "display_name": "Hit & Run",
        "description": "Immune to Ranged Attacks for {time:%s}s on Close Range Kill."
    },
    "content/items/traits/bespoke_autopistol_p1/power_bonus_on_continuous_fire": {
        "display_name": "Blaze Away",
        "description": "+{power_level:%s} Power for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times."
    },
    "combatsword_p3_m1_dps_stat": {
        "display_name": "Damage"
    },
    "content/items/traits/bespoke_powersword_p1/extended_activation_duration_on_chained_attacks": {
        "display_name": "Power Cycler",
        "description": "+{extra_hits:%s} Extra Chained Energised Hits."
    },
    "autogun_p2_m2_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_flamer_p1/power_scales_with_clip_percentage": {
        "display_name": "Overpressure",
        "description": "Up to +{power_level:%s} Power, scaling with remaining Ammunition. Stacks {stacks:%s} times. "
    },
    "content/items/weapons/player/melee/ogryn_powermaul_p1_empty_base": {},
    "ogryn_powermaul_defence_stat": {
        "display_name": "Defences"
    },
    "content/items/gadgets/defensive_gadget_3": {
        "display_name": "Stalwart's Mandible (Caged)"
    },
    "lasgun_p1_m3_ammo_stat": {
        "display_name": "Ammo"
    },
    "content/items/traits/bespoke_ogryn_slabshield_p1/toughness_recovery_on_chained_attacks": {
        "display_name": "Confident Strike",
        "description": "+{toughness:%s} toughness on Chained Hit."
    },
    "ogryn_club_p1_m3_defence_stat": {
        "display_name": "Defences"
    },
    "autogun_p2_m1_ammo_stat": {
        "display_name": "Ammo"
    },
    "lasgun_p2_m2_ammo_stat": {
        "display_name": "Ammo"
    },
    "combatsword_p2_m1_cleave_damage_stat": {
        "display_name": "Cleave Damage"
    },
    "stubrevolver_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/perks/gadget_common/trait_gadget_dr_vs_snipers": {
        "description": "+{damage_reduction:%s} Damage Resistance (Snipers)"
    },
    "content/items/traits/bespoke_laspistol_p1/allow_flanking_and_increased_damage_when_flanking": {
        "display_name": "Raking Fire",
        "description": "+{damage:%s} Damage when shooting Enemies in the back."
    },
    "content/items/traits/bespoke_bolter_p1/crit_chance_based_on_aim_time": {
        "display_name": "Surgical",
        "description": "+{crit_chance:%s} Critical Chance for every {time:%s} second while aiming. Stacks {stacks:%s} times. Discharges all stacks upon firing."
    },
    "forcestaff_p4_m1_explosion_size_stat": {
        "display_name": "Blast Radius"
    },
    "content/items/traits/bespoke_ogryn_club_p2/pass_past_armor_on_crit": {
        "display_name": "Perfect Strike",
        "description": "Critical Hits ignore Hit Mass Bonus from Armour."
    },
    "content/items/traits/bespoke_lasgun_p2/stagger_count_bonus_damage": {
        "display_name": "No Respite",
        "description": "Up to +{damage:%s} Damage on Hit (Staggered Enemy), scaling with Stagger."
    },
    "chainsword_p1_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/perks/ranged_common/wield_increase_power_modifier": {
        "description": "+{power_mod:%s} Power"
    },
    "ogryn_thumper_p1_m2_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_powermaul_2h_p1/staggered_targets_receive_increased_stagger_debuff": {
        "display_name": "Thunderstrike",
        "description": "Target receives {stacks:%s} Stack(s) of +{impact:%s} Impact if already Staggered. Lasts {time:%s}s."
    },
    "content/items/weapons/player/melee/combatsword_p1_m3": {
        "display_name": "Catachan Mk VII \"Devil's Claw\" Sword",
        "description": "Closer to a sword than a knife, the Devil's Claw's blade is hollow and half-filled with mercury, making it surprisingly lightweight while lending it greater swinging power."
    },
    "content/items/traits/bespoke_ogryn_club_p2/taunt_target_on_hit": {
        "display_name": "Taunt on stagger",
        "description": "Staggering enemies will make them prioritise you as a target over other players."
    },
    "ogryn_powermaul_armor_pierce_stat": {
        "display_name": "Penetration"
    },
    "ogryn_heavystubber_dps_stat": {
        "display_name": "Damage"
    },
    "lasgun_p2_m2_charge_speed_stat": {
        "display_name": "Charge Rate"
    },
    "ogryn_club_p2_m1_finesse_stat": {
        "display_name": "Finesse"
    },
    "content/items/weapons/player/ranged/ogryn_thumper_p1_m1": {
        "display_name": "Lorenz Mk V Kickback",
        "description": "The orbital manufactorum Lorenz is most well-known for forging heavy ordnance for the Imperial Navy. As a sideline, however, its Tech-Adepts create Ogryn-proof field weapons based on primitive designs."
    },
    "forcestaff_p4_m1_warp_charge_cost_stat": {
        "display_name": "Warp Resistance"
    },
    "ogryn_club_p2_m3_mobility_stat": {
        "display_name": "Mobility"
    },
    "content/items/traits/bespoke_laspistol_p1/reload_speed_on_slide": {
        "display_name": "Speedload",
        "description": "+{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times."
    },
    "content/items/traits/bespoke_combatsword_p1/increase_stagger_per_hit_in_sweep": {
        "display_name": "Vicious Slice",
        "description": "+{impact:%s} Impact to Target for each Enemy already Hit by the same Attack"
    },
    "content/items/traits/bespoke_powersword_p1/infinite_armor_cleave_on_activated_attacks": {
        "display_name": "Sunder",
        "description": "Your Energised Attacks have increased Cleave"
    }
}

export default displayNames
