export interface TranslateParams {
  /**
   * The hologram to translate
   *
   * @example 'spawn_sign'
   * @example 'floating_text'
   */
  hologram: string;

  /**
   * X Y Z translation offset
   *
   * The amount to move the hologram in each direction from its current position.
   * - X: Positive = east, negative = west
   * - Y: Positive = up, negative = down
   * - Z: Positive = south, negative = north
   *
   * @example [5, 0, 0] // Move 5 blocks east
   * @example [0, 1, 0] // Move 1 block up
   * @example [-2, 0.5, 3] // Move 2 west, 0.5 up, 3 south
   * @example [0, -0.25, 0] // Move 0.25 blocks down
   */
  xyz: number;
}
