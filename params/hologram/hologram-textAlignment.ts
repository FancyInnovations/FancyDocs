export interface TextAlignmentParams {
  /**
   * The text hologram to modify
   *
   * @example 'welcome_board'
   * @example 'leaderboard'
   */
  hologram: string;

  /**
   * Text alignment mode
   *
   * Controls how multi-line text is aligned relative to each other:
   *
   * - `center`: Text lines are centered (default for most holograms)
   * - `left`: Text lines are aligned to the left edge
   * - `right`: Text lines are aligned to the right edge
   *
   * This is particularly useful for holograms with multiple lines of varying lengths, such as leaderboards, scoreboards, or formatted information displays.
   *
   * @example 'center' // Center all lines
   * @example 'left' // Align names to left
   * @example 'right' // Align scores to right
   */
  alignment: 'center' | 'left' | 'right';
}
