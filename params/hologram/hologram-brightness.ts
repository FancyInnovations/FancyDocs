export interface BrightnessParams {
  /**
   * The text hologram to modify
   *
   * @example 'cave_sign'
   * @example 'outdoor_text'
   */
  hologram: string;

  /**
   * Type of brightness to modify
   *
   * - `block`: The brightness from nearby light-emitting blocks (torches, glowstone, etc.)
   * - `sky`: The brightness from skylight (sun/moon)
   *
   * You can set both independently to create different lighting effects.
   *
   * @example 'block'
   * @example 'sky'
   */
  type: 'block' | 'sky';

  /**
   * Brightness level (0-15)
   *
   * Controls the light level for the hologram:
   * - 0: Complete darkness
   * - 15: Maximum brightness (fully lit)
   *
   * This affects how the hologram appears in different lighting conditions and can make text more readable in dark areas or create atmospheric effects.
   *
   * @example 15 // Fully bright
   * @example 7 // Medium brightness
   * @example 0 // Complete darkness
   */
  level: number;
}
