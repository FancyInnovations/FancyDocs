export interface CreateParams {
  /**
   * The type of hologram to create
   *
   * - `text`: A text-based hologram with multiple lines of text
   * - `item`: A hologram displaying a 3D item model
   * - `block`: A hologram displaying a block
   *
   * @example 'text'
   * @example 'item'
   * @example 'block'
   */
  type: 'text' | 'item' | 'block';

  /**
   * The unique name identifier for the hologram
   *
   * This name will be used to reference the hologram in other commands.
   * Must be unique and cannot contain spaces or special characters.
   *
   * @example 'welcome_sign'
   * @example 'shop_marker'
   * @example 'floating_diamond'
   */
  name: string;
}
