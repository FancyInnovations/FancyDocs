export interface AttributeParams {
  /**
   * The NPC to modify
   *
   * @example 'villager_npc'
   * @example 'zombie_npc'
   */
  npc: string;

  /**
   * Attribute action
   *
   * - `set`: Set a specific attribute value for the NPC
   * - `list`: List all available attributes for this NPC type
   *
   * @example 'set'
   * @example 'list'
   */
  action: 'set' | 'list';

  /**
   * Attribute name (for 'set' action)
   *
   * The specific attribute to modify. Available attributes depend on the NPC's entity type.
   * Common examples: profession, variant, pose, baby, etc.
   *
   * @example 'profession'
   * @example 'variant'
   * @example 'pose'
   * @example 'baby'
   */
  attribute: string;

  /**
   * Attribute value (for 'set' action)
   *
   * The value to set for the attribute.
   *
   * @example 'FARMER'
   * @example 'DESERT'
   * @example 'SITTING'
   * @example 'true'
   */
  value: string;
}
