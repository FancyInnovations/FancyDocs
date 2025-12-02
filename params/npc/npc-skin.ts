export interface SkinParams {
  /**
   * The NPC to modify
   *
   * @example 'guard_npc'
   * @example 'shop_keeper'
   */
  npc: string;

  /**
   * Skin source
   *
   * Multiple formats supported:
   * - `@none`: Removes the skin
   * - `@mirror`: Mirrors the viewing player's skin (dynamic)
   * - Player name or UUID: Uses that player's skin
   * - URL: Direct link to a skin image file
   * - Filename: Image from plugins/FancyNpcs/skins/ directory
   *
   * @example '@none'
   * @example '@mirror'
   * @example 'Notch'
   * @example 'https://example.com/skin.png'
   * @example 'cool-skin.png'
   */
  skin: string;

  /**
   * Slim arms variant (optional)
   *
   * Only works with URL or file skins.
   * Makes the arms slim (3px instead of 4px wide) like Alex skin.
   *
   * @example true
   * @example false
   */
  slim: boolean;
}
