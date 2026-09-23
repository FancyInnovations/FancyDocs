---
title: /world
description: Usage of the /world command
---

## Finding worlds and commands

### Show world help

Shows the available `/world` commands and their usage, seven entries per page.

- **Permission**: `fancyworlds.commands.world.help`
- **Syntax**: `/world help [page]`
    - `[page]`: page number, starting at 1; defaults to 1.
- **Examples**:
    - `/world help 2`: shows the second page of world commands.

### List worlds

Lists worlds managed by FancyWorlds, including unloaded ones. Loaded worlds show their player, entity, and loaded chunk counts. `/worlds` is a shortcut.

- **Permission**: `fancyworlds.commands.world.list`
- **Syntax**: `/world list` or `/worlds`
- **Examples**:
    - `/world list`: shows managed worlds and which ones are loaded.

### Show world seed

Shows the seed of a Bukkit world. Players can omit the world to use the world they are in; the console must provide one. `/seed` is a shortcut.

- **Permission**: `fancyworlds.commands.world.seed`
- **Syntax**: `/world seed [--world <world>]` or `/seed [--world <world>]`
    - `--world <world>`: world whose seed to show; defaults to the player's current world.
- **Examples**:
    - `/world seed --world survival`: shows the seed of `survival`.
    - `/seed`: shows the player's current world seed.

## Creating and registering worlds

### Create world

Creates a new world and registers it with FancyWorlds. The name must not already be registered or exist as a world folder. You can choose the seed, environment, generator, and whether structures generate. After creation, the optional pre-generation radius starts generating chunks around the world's spawn. Omitted options use FancyWorlds defaults: seed `0`, `NORMAL` environment, default generator, and structures enabled.

- **Permission**: `fancyworlds.commands.world.create`
- **Syntax**: `/world create <name> [--seed <number>] [--environment <environment>] [--generator <generator>] [--structures] [--pre-generate <radius>]`
    - `<name>`: name of the new world.
    - `--seed <number>`: numeric world seed; defaults to `0`.
    - `--environment <environment>`: Bukkit world environment, such as `NORMAL`, `NETHER`, or `THE_END`; defaults to `NORMAL`.
    - `--generator <generator>`: generator name; suggested values are `normal`, `flat`, `amplified`, and `large_biomes`. Defaults to `default`.
    - `--structures`: switch for structure generation (`-x` is its shorthand); structures are enabled when omitted.
    - `--pre-generate <radius>`: start generating chunks within this radius in blocks around spawn; accepts `1` through `29,999,984`.
- **Examples**:
    - `/world create adventure`: creates and registers a world named `adventure`.
    - `/world create flat_build --generator flat --pre-generate 1000`: creates a flat world and starts generating chunks around spawn.

### Load world

Loads a world folder from disk and registers it with FancyWorlds. It can also load a previously registered world that is currently unloaded. Creation options apply when the world has not yet been registered; a registered world keeps its saved settings. The world must already have a folder on disk.

- **Permission**: `fancyworlds.commands.world.load`
- **Syntax**: `/world load <name> [--seed <number>] [--environment <environment>] [--generator <generator>] [--structures]`
    - `<name>`: existing world folder to load.
    - `--seed <number>`: numeric seed used when first registering the world.
    - `--environment <environment>`: environment used when first registering the world, such as `NORMAL`, `NETHER`, or `THE_END`.
    - `--generator <generator>`: generator used when first registering the world; suggested values are `normal`, `flat`, `amplified`, and `large_biomes`.
    - `--structures`: structure generation switch (`-x` is its shorthand) used when first registering the world.
- **Examples**:
    - `/world load old_survival`: loads an existing `old_survival` world folder.
    - `/world load old_flat --generator flat`: loads and registers an existing flat world folder.

### Link world

Registers a world that Bukkit has already loaded, so FancyWorlds can manage it. Linking does not create or load a world folder. The linked world's seed, environment, and structure setting are read from the loaded world.

- **Permission**: `fancyworlds.commands.world.link`
- **Syntax**: `/world link <world>`
    - `<world>`: loaded Bukkit world that is not already linked to FancyWorlds.
- **Examples**:
    - `/world link lobby`: starts managing the already loaded `lobby` world.

## Unloading and removing worlds

### Unload world

Saves and unloads a managed world while keeping it registered and on disk. If players are inside, the command requires `--force`; they are moved to the spawn of the server's first world before unloading. Players using `--force` must confirm in a dialog.

- **Permission**: `fancyworlds.commands.world.unload`
- **Syntax**: `/world unload <world> [--force]`
    - `<world>`: loaded managed world to unload.
    - `--force`: move players out before unloading; required when the world contains players.
- **Examples**:
    - `/world unload minigames`: unloads `minigames` if no players are inside.
    - `/world unload minigames --force`: moves its players to the fallback world, then unloads it after confirmation if run by a player.

### Unlink world

Removes a world from FancyWorlds management without deleting its files or unloading it from Bukkit. It will no longer appear in the managed world list.

- **Permission**: `fancyworlds.commands.world.unlink`
- **Syntax**: `/world unlink <world>`
    - `<world>`: managed world to unlink.
- **Examples**:
    - `/world unlink lobby`: stops managing `lobby` while leaving the world intact.

### Delete world

Deletes an unloaded managed world's folder and unregisters it from FancyWorlds. The command opens a confirmation dialog for the player. Unload the world before deleting it.

- **Permission**: `fancyworlds.commands.world.delete`
- **Syntax**: `/world delete <world>`
    - `<world>`: unloaded managed world to delete.
- **Examples**:
    - `/world delete old_survival`: asks for confirmation, then removes `old_survival` from management and deletes its folder.

## Moving players and setting spawn

### Teleport to world

Teleports you or another player to a loaded managed world. Without a destination location, the command uses that world's spawn. If no target player is given, it teleports the command sender, who must be a player. The command does nothing when the target is already in that world. `/world tp` is an alias.

- **Permission**: `fancyworlds.commands.world.teleport`
- **Syntax**: `/world teleport <world> [player] [destination]` or `/world tp <world> [player] [destination]`
    - `<world>`: loaded managed destination world.
    - `[player]`: player to teleport; defaults to you.
    - `[destination]`: optional location instead of the destination world's spawn.
- **Examples**:
    - `/world tp survival`: teleports you to `survival`'s spawn.
    - `/world teleport survival Alex`: teleports Alex to `survival`'s spawn.

### Set world spawn

Changes a managed world's spawn point. By default, it uses the player's current world and location. Use flags to specify a world or location explicitly; omitting either value requires a player sender. `/setworldspawn` is a shortcut.

- **Permission**: `fancyworlds.commands.world.set_spawn`
- **Syntax**: `/world set_spawn [--world <world>] [--location <location>]` or `/setworldspawn [--world <world>] [--location <location>]`
    - `--world <world>`: managed world whose spawn will change; defaults to your current world.
    - `--location <location>`: new spawn location; defaults to your current position.
- **Examples**:
    - `/world set_spawn`: sets the current world's spawn to where you stand.

## World settings

### Set difficulty

Sets the difficulty of a managed world. If `--world` is omitted, the command uses the player's current world. `/difficulty set` is an alias.

- **Permission**: `fancyworlds.commands.world.difficulty`
- **Syntax**: `/world difficulty set <difficulty> [--world <world>]` or `/difficulty set <difficulty> [--world <world>]`
    - `<difficulty>`: `PEACEFUL`, `EASY`, `NORMAL`, or `HARD`.
    - `--world <world>`: managed world to change; defaults to your current world.
- **Examples**:
    - `/world difficulty set hard --world survival`: sets `survival` to hard difficulty.

### Show difficulty

Shows a managed world's current difficulty. If `--world` is omitted, the command uses the player's current world. `/difficulty current` is an alias.

- **Permission**: `fancyworlds.commands.world.difficulty`
- **Syntax**: `/world difficulty current [--world <world>]` or `/difficulty current [--world <world>]`
    - `--world <world>`: managed world to inspect; defaults to your current world.
- **Examples**:
    - `/world difficulty current --world survival`: shows `survival`'s difficulty.

### Set time

Sets the time of a loaded managed world. Use a named time or a numeric Minecraft time value. If `--world` is omitted, the command uses the player's current world. `/time set` is an alias.

- **Permission**: `fancyworlds.commands.world.time.set`
- **Syntax**: `/world time set <time> [--world <world>]` or `/time set <time> [--world <world>]`
    - `<time>`: `day` (1000), `noon` (6000), `night` (13000), `midnight` (18000), or a number.
    - `--world <world>`: loaded managed world to change; defaults to your current world.
- **Examples**:
    - `/world time set midnight --world survival`: sets `survival` to midnight.
    - `/time set 7000`: sets the current world's time to 7000.

### Show time

Shows the current time value of a loaded managed world. If `--world` is omitted, the command uses the player's current world. `/time current` is an alias.

- **Permission**: `fancyworlds.commands.world.time.current`
- **Syntax**: `/world time current [--world <world>]` or `/time current [--world <world>]`
    - `--world <world>`: loaded managed world to inspect; defaults to your current world.
- **Examples**:
    - `/world time current --world survival`: shows `survival`'s current time value.

### Set day

Sets the time of a loaded managed world to 1000 (day). Uses your current world unless `--world` is supplied.

- **Permission**: `fancyworlds.commands.world.time.set`
- **Syntax**: `/day [--world <world>]`
    - `--world <world>`: loaded managed world to change; defaults to your current world.
- **Examples**:
    - `/day --world survival`: sets `survival`'s time to 1000.

### Set noon

Sets the time of a loaded managed world to 6000 (noon). Uses your current world unless `--world` is supplied.

- **Permission**: `fancyworlds.commands.world.time.set`
- **Syntax**: `/noon [--world <world>]`
    - `--world <world>`: loaded managed world to change; defaults to your current world.
- **Examples**:
    - `/noon`: sets the current world's time to 6000.

### Set night

Sets the time of a loaded managed world to 13000 (night). Uses your current world unless `--world` is supplied.

- **Permission**: `fancyworlds.commands.world.time.set`
- **Syntax**: `/night [--world <world>]`
    - `--world <world>`: loaded managed world to change; defaults to your current world.
- **Examples**:
    - `/night`: sets the current world's time to 13000.

### Set midnight

Sets the time of a loaded managed world to 18000 (midnight). Uses your current world unless `--world` is supplied.

- **Permission**: `fancyworlds.commands.world.time.set`
- **Syntax**: `/midnight [--world <world>]`
    - `--world <world>`: loaded managed world to change; defaults to your current world.
- **Examples**:
    - `/midnight --world survival`: sets `survival`'s time to 18000.

### List gamerules

Lists gamerules and their current and default values for a loaded managed world. `--changed_only` limits the list to values different from their defaults. If `--world` is omitted, the command uses the player's current world. `/gamerule list` is an alias.

- **Permission**: `fancyworlds.commands.world.gamerules.list`
- **Syntax**: `/world gamerules list [--world <world>] [--changed_only]` or `/gamerule list [--world <world>] [--changed_only]`
    - `--world <world>`: loaded managed world to inspect; defaults to your current world.
    - `--changed_only`: show only gamerules whose values differ from their defaults.
- **Examples**:
    - `/world gamerules list --world survival --changed_only`: shows customized gamerules in `survival`.

### Set gamerule

Sets a Boolean or integer gamerule in a loaded managed world. Boolean values accept `true`, `false`, `yes`, or `no`. Use `@default` to restore the world's default value for that gamerule. If `--world` is omitted, the command uses the player's current world. `/gamerule set` is an alias.

- **Permission**: `fancyworlds.commands.world.gamerules.set`
- **Syntax**: `/world gamerules set <gamerule> <value> [--world <world>]` or `/gamerule set <gamerule> <value> [--world <world>]`
    - `<gamerule>`: name of a Minecraft gamerule available in the target world.
    - `<value>`: supported Boolean or integer value, or `@default` to restore the default.
    - `--world <world>`: loaded managed world to change; defaults to your current world.
- **Examples**:
    - `/world gamerules set keep_inventory true --world survival`: makes players in `survival` keep their inventory after death.
    - `/gamerule set keep_inventory @default`: restores the current world's default inventory retention setting.

## Pre-generating chunks

### Start pre-generation

Starts generating chunks around the spawn point of a loaded managed world, using a radius in blocks. The job runs in the background and can be inspected, stopped, or resumed. `/world pre-generate` is an alias for starting.

- **Permission**: `fancyworlds.commands.world.pre_generate`
- **Syntax**: `/world pre-generate start <world> <radius>` or `/world pre-generate <world> <radius>`
    - `<world>`: loaded managed world to generate.
    - `<radius>`: radius around spawn in blocks, from `1` to `29,999,984`.
- **Examples**:
    - `/world pre-generate start survival 2000`: starts generating chunks within a 2000-block radius of `survival`'s spawn.

### Show pre-generation

Shows all saved pre-generation jobs or details for one world. The list includes status, progress, and estimated time remaining. Details also show the radius, center, remaining chunks, and failed chunks. `/world pre-generate status` is an alias.

- **Permission**: `fancyworlds.commands.world.pre_generate.info`
- **Syntax**: `/world pre-generate info [world]` or `/world pre-generate status [world]`
    - `[world]`: managed world whose job to inspect; omit it to list all jobs.
- **Examples**:
    - `/world pre-generate info`: lists all pre-generation jobs.
    - `/world pre-generate status survival`: shows details for `survival`'s job.

### Stop pre-generation

Stops a running job while keeping its progress so it can be resumed. If the world is omitted, the command uses the player's current world. `/world pre-generate pause` and `/world pre-generate cancel` are aliases.

- **Permission**: `fancyworlds.commands.world.pre_generate.stop`
- **Syntax**: `/world pre-generate stop [world]` (also `pause` or `cancel`)
    - `[world]`: managed world whose job to stop; defaults to your current world.
- **Examples**:
    - `/world pre-generate stop survival`: stops `survival`'s running job and saves its progress.

### Resume pre-generation

Resumes a stopped job for a loaded managed world. If the world is omitted, the command uses the player's current world. `/world pre-generate continue` is an alias.

- **Permission**: `fancyworlds.commands.world.pre_generate.resume`
- **Syntax**: `/world pre-generate resume [world]` or `/world pre-generate continue [world]`
    - `[world]`: loaded managed world whose job to resume; defaults to your current world.
- **Examples**:
    - `/world pre-generate resume survival`: continues `survival`'s saved job.

### Delete pre-generation

Deletes a saved pre-generation job. This removes its job record, including the ability to resume its progress; it does not delete the world or generated chunks. If the world is omitted, the command uses the player's current world. `/world pre-generate remove` is an alias.

- **Permission**: `fancyworlds.commands.world.pre_generate.delete`
- **Syntax**: `/world pre-generate delete [world]` or `/world pre-generate remove [world]`
    - `[world]`: managed world whose job record to delete; defaults to your current world.
- **Examples**:
    - `/world pre-generate delete survival`: removes `survival`'s pre-generation job record.
