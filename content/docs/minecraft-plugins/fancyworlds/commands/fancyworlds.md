---
title: /fancyworlds
description: Usage of the /fancyworlds command
---

## FancyWorlds information

### Show version

Shows the installed FancyWorlds version. If the version check finds a newer release, the command also shows its version and a download link.

- **Permission**: `fancyworlds.commands.fancyworlds.version`
- **Syntax**: `/fancyworlds version`
- **Examples**:
    - `/fancyworlds version`: shows the installed version and any available update.

## Configuration

### Reload configuration

Reloads FancyWorlds configuration from disk, applies the configured log level, and reloads translations. Players must confirm the reload in a dialog; the console runs it immediately.

- **Permission**: `fancyworlds.commands.fancyworlds.config.reload`
- **Syntax**: `/fancyworlds config reload`
- **Examples**:
    - `/fancyworlds config reload`: opens a confirmation dialog for a player, then reloads the configuration if confirmed.

### Show configuration

Lists the current values and defaults for settings and experimental features. This is useful for checking which values FancyWorlds is using without opening its configuration file.

- **Permission**: `fancyworlds.commands.fancyworlds.config.show`
- **Syntax**: `/fancyworlds config show`
- **Examples**:
    - `/fancyworlds config show`: displays the active settings and experimental feature values.
