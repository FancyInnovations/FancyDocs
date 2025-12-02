export interface ActionParams {
  /**
   * The NPC to modify
   *
   * @example 'quest_giver'
   * @example 'shop_keeper'
   */
  npc: string;

  /**
   * Trigger type
   *
   * When the action should be executed:
   * - `ON_INTERACT`: When player right-clicks the NPC
   * - `ON_ATTACK`: When player left-clicks/attacks the NPC
   *
   * @example 'ON_INTERACT'
   * @example 'ON_ATTACK'
   */
  trigger: string;

  /**
   * Action type
   *
   * The type of action to execute. Common types:
   * - `server_command`: Run command as server/console
   * - `player_command`: Run command as the player
   * - `message`: Send message to player
   * - `actionbar`: Show actionbar message
   * - `play_sound`: Play a sound
   * - `need_permission`: Check player has permission
   *
   * @example 'server_command'
   * @example 'player_command'
   * @example 'message'
   * @example 'actionbar'
   */
  actionType: string;

  /**
   * Action value (optional)
   *
   * The value/content for the action.
   * For commands: the command to run (without /)
   * For messages: the message to send
   * For sounds: the sound name
   *
   * @example 'give {player} diamond 1'
   * @example 'Welcome to the shop!'
   * @example 'entity.villager.trade'
   */
  value: string;
}
