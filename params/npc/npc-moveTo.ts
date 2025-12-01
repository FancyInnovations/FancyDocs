export interface MoveToParams {
  /**
   * The NPC to teleport
   *
   * @example 'guard_npc'
   * @example 'shop_keeper'
   */
  npc: string;

  /**
   * X Y Z coordinates
   *
   * The world coordinates where the NPC should be moved.
   * - X: East/West position
   * - Y: Height
   * - Z: North/South position
   *
   * @example [100, 64, 200]
   * @example [50.5, 65, -30.5]
   */
  xyz: number;

  /**
   * World name (optional)
   *
   * The world to teleport the NPC to.
   * If not specified, uses the current world.
   *
   * @example 'world'
   * @example 'world_nether'
   */
  world: string;

  /**
   * Look in your direction (optional)
   *
   * If enabled, the NPC will face the same direction you're facing.
   *
   * @example true
   * @example false
   */
  lookInMyDirection: boolean;
}
