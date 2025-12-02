export interface InteractionCooldownParams {
  /**
   * The NPC to modify
   *
   * @example 'quest_giver'
   * @example 'shop_keeper'
   */
  npc: string;

  /**
   * Cooldown duration or disabled
   *
   * Time duration formats:
   * - `disabled`: No cooldown
   * - Number + unit: Time with unit suffix
   *   - `ms`: milliseconds
   *   - `s`: seconds
   *   - `min`: minutes
   *   - `h`: hours
   *   - `d`: days
   *   - `mo`: months
   *   - `y`: years
   *
   * @example 'disabled'
   * @example '5s'
   * @example '2min'
   * @example '1h'
   * @example '500ms'
   */
  cooldown: string;
}
