export interface BillboardParams {
  /**
   * The hologram to modify
   *
   * @example 'welcome_text'
   * @example 'directional_sign'
   */
  hologram: string;

  /**
   * Billboard mode
   *
   * Controls how the hologram rotates relative to the player's view:
   *
   * - `center`: The hologram always faces the player (both horizontally and vertically). This is the most common setting for text holograms
   * - `fixed`: The hologram has a fixed rotation and does not turn to face the player. Useful for directional signs or markers
   * - `vertical`: The hologram only rotates vertically to face the player, but maintains its horizontal orientation
   * - `horizontal`: The hologram only rotates horizontally (yaw) to face the player, but maintains its vertical pitch
   *
   * @example 'center'
   * @example 'fixed'
   * @example 'vertical'
   * @example 'horizontal'
   */
  mode: 'center' | 'fixed' | 'vertical' | 'horizontal';
}
