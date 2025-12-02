export interface VisibilityParams {
  /**
   * The hologram to modify
   *
   * @example 'welcome_sign'
   * @example 'vip_area'
   */
  hologram: string;

  /**
   * Visibility mode
   *
   * Controls how the hologram's visibility is determined:
   *
   * - `ALL`: The hologram is visible to all players within render distance
   * - `MANUAL`: Visibility is controlled programmatically via the API. Use this when you want to show/hide the hologram dynamically through code
   * - `PERMISSION_NEEDED`: Only players with the permission `FancyHolograms.viewhologram.<name>` can see the hologram
   *
   * @example 'ALL'
   * @example 'MANUAL'
   * @example 'PERMISSION_NEEDED'
   */
  mode: 'ALL' | 'MANUAL' | 'PERMISSION_NEEDED';
}
