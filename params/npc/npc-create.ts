export interface CreateParams {
  /**
   * The unique name for the NPC
   *
   * Must only contain: A-Z a-z 0-9 _ - /
   *
   * @example 'guard_npc'
   * @example 'shop_keeper'
   * @example 'quest/starter'
   */
  name: string;

  /**
   * Position coordinates (optional)
   *
   * The X Y Z coordinates where the NPC should be created.
   * If not specified, creates at your current location.
   *
   * @example [100, 64, 200]
   * @example [0, 70, 0]
   */
  position: {
    x: number;
    y: number;
    z: number;
  };

  /**
   * World name (optional)
   *
   * The world where the NPC should be created.
   * If not specified, uses your current world.
   *
   * @example 'world'
   * @example 'world_nether'
   * @example 'world_the_end'
   */
  world: string;

  /**
   * NPC entity type (optional)
   *
   * The type of entity for the NPC.
   * If not specified, defaults to PLAYER.
   *
   * @example 'PLAYER'
   * @example 'VILLAGER'
   * @example 'ZOMBIE'
   * @example 'SKELETON'
   */
  type: string;
}
