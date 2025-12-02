export interface GlowingParams {
  /**
   * The NPC to modify
   *
   * @example 'guard_npc'
   * @example 'quest_giver'
   */
  npc: string;

  /**
   * Glowing color or disabled
   *
   * - `disabled`: Turn off glowing effect
   * - Color name: Any Minecraft color (RED, BLUE, GREEN, etc.)
   * - Hex code: Custom color in #RRGGBB format
   *
   * @example 'disabled'
   * @example 'RED'
   * @example 'BLUE'
   * @example 'AQUA'
   * @example '#FF5733'
   */
  color: string;
}
