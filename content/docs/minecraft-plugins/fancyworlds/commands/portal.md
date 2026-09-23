---
title: /portal
description: Usage of the /portal command
---

## Creating portals

### Get wand

Gives you a golden axe used to select a portal area. Left-click a block to set the first corner and right-click a block to set the second corner. Both corners must be in the same world. If your inventory is full, the wand drops near you. Selecting corners also requires the portal create permission.

- **Permission**: `fancyworlds.commands.portal.wand` (selecting corners also requires `fancyworlds.commands.portal.create`)
- **Syntax**: `/portal wand`
- **Examples**:
    - `/portal wand`: gives you the portal selection wand.

### Create portal

Creates a portal in the cuboid selected with the wand and sends players who enter it to the destination world's spawn. The destination must be a world managed by FancyWorlds. The portal name must be unique, contain 1–64 letters, numbers, underscores, or hyphens, and the selected area must not overlap an existing portal. A successful creation clears your selection. The destination world must be loaded when someone uses the portal.

- **Permission**: `fancyworlds.commands.portal.create`
- **Syntax**: `/portal create <name> <destinationWorld>`
    - `<name>`: unique portal name using letters, numbers, underscores, or hyphens.
    - `<destinationWorld>`: name of the managed world that players will enter.
- **Examples**:
    - `/portal create lobby_to_survival survival`: turns your selected area into a portal to the spawn of `survival`.

## Managing portals

### List portals

Lists all registered portals alphabetically by name, including each portal's source and destination worlds. `/portals` is a shortcut.

- **Permission**: `fancyworlds.commands.portal.list`
- **Syntax**: `/portal list` or `/portals`
- **Examples**:
    - `/portal list`: lists every registered portal.

### Show portal info

Shows a portal's name, source world, destination world, two bounding corners, and volume in blocks.

- **Permission**: `fancyworlds.commands.portal.info`
- **Syntax**: `/portal info <portal>`
    - `<portal>`: name of an existing portal.
- **Examples**:
    - `/portal info lobby_to_survival`: shows the selected area and destination of `lobby_to_survival`.

### Delete portal

Removes a registered portal. Its selected blocks remain in the world; they simply stop acting as a portal. `/portal remove` is an alias.

- **Permission**: `fancyworlds.commands.portal.delete`
- **Syntax**: `/portal delete <portal>` or `/portal remove <portal>`
    - `<portal>`: name of the portal to remove.
- **Examples**:
    - `/portal delete lobby_to_survival`: removes the portal named `lobby_to_survival`.

### Change destination

Changes where an existing portal sends players. Players entering it afterward go to the new destination world's spawn, provided that world is loaded. `/portal destination` is an alias.

- **Permission**: `fancyworlds.commands.portal.set_destination`
- **Syntax**: `/portal set_destination <portal> <destinationWorld>` or `/portal destination <portal> <destinationWorld>`
    - `<portal>`: name of the portal to update.
    - `<destinationWorld>`: name of the new managed destination world.
- **Examples**:
    - `/portal set_destination lobby_to_survival creative`: sends future visitors through `lobby_to_survival` to `creative`.
