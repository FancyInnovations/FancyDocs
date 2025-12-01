export interface BackgroundParams {
  /**
   * The text hologram to modify
   *
   * @example 'welcome_text'
   * @example 'shop_info'
   */
  hologram: string;

  /**
   * The background color for the hologram text
   *
   * The background appears behind the text, making it easier to read against various environments.
   *
   * Accepted formats:
   * - Hex color codes: `#RRGGBB` or `#AARRGGBB` (with alpha/transparency)
   * - Named Minecraft colors: RED, BLUE, GREEN, YELLOW, etc.
   * - Special values:
   *   - `reset` or `default`: Remove the background (transparent)
   *
   * Note: Alpha values control transparency (00 = fully transparent, FF = fully opaque)
   *
   * @example '#FF0000' // Red background
   * @example '#80000000' // Semi-transparent black (50% opacity)
   * @example 'RED' // Named red color
   * @example '#FFFFFF' // White background
   * @example 'reset' // Remove background
   * @example '#CCFFFF00' // Semi-transparent yellow
   */
  color: string;
}
