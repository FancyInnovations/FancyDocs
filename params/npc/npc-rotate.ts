export interface RotateParams {
  /**
   * The NPC to rotate
   *
   * @example 'guard_npc'
   * @example 'shop_keeper'
   */
  npc: string;

  /**
   * Yaw rotation
   *
   * Horizontal rotation in degrees (0-360).
   * - 0: South
   * - 90: West
   * - 180: North
   * - 270: East
   *
   * @example 0
   * @example 90
   * @example 180
   * @example 270
   */
  yaw: number;

  /**
   * Pitch rotation
   *
   * Vertical rotation in degrees (-90 to 90).
   * - -90: Looking straight up
   * - 0: Looking straight ahead
   * - 90: Looking straight down
   *
   * @example 0
   * @example -45
   * @example 90
   */
  pitch: number;
}
