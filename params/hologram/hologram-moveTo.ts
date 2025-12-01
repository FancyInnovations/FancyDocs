export interface MoveToParams {
  /**
   * The hologram to teleport
   *
   * @example 'spawn_sign'
   * @example 'shop_info'
   */
  hologram: string;

  /**
   * X Y Z coordinates
   *
   * The world coordinates where the hologram should be moved.
   * - X: East/West position (positive = east, negative = west)
   * - Y: Height (positive = up, negative = down)
   * - Z: North/South position (positive = south, negative = north)
   *
   * @example [100, 64, 200]
   * @example [50.5, 65, -30.5]
   */
  xyz: number;

  /**
   * Yaw rotation (optional)
   *
   * The horizontal rotation in degrees (0-360).
   * - 0: South
   * - 90: West
   * - 180: North
   * - 270: East
   *
   * @example 0
   * @example 180
   * @example 90
   */
  yaw: number;

  /**
   * Pitch rotation (optional)
   *
   * The vertical rotation in degrees (-90 to 90).
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
