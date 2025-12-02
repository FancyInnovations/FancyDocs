export interface EquipmentParams {
  /**
   * The NPC to modify
   *
   * @example 'guard_npc'
   * @example 'shop_keeper'
   */
  npc: string;

  /**
   * Equipment action
   *
   * - `set`: Sets equipment slot to item in hand, @none, or item type
   * - `clear`: Clears the equipment slot
   * - `list`: Lists all equipment slots
   *
   * @example 'set'
   * @example 'clear'
   * @example 'list'
   */
  action: 'set' | 'clear' | 'list';

  /**
   * Item source (optional, for 'set' action)
   *
   * - `@none`: Remove item from slot
   * - `@hand`: Use item currently in your main hand
   * - Item type: Any valid Minecraft item (e.g., 'DIAMOND_SWORD')
   *
   * @example '@none'
   * @example '@hand'
   * @example 'DIAMOND_SWORD'
   * @example 'GOLDEN_HELMET'
   */
  item: string;
}
