export interface UpdateTextIntervalParams {
  /**
   * The text hologram to modify
   *
   * @example 'player_count'
   * @example 'clock_display'
   */
  hologram: string;

  /**
   * The update interval for refreshing placeholder text
   *
   * This determines how often the hologram text is refreshed. Useful when using PlaceholderAPI or MiniPlaceholders that show dynamic content like player stats, time, or server info.
   *
   * Formats:
   * - Number (ticks): Raw tick value (20 ticks = 1 second)
   * - String with 's' suffix: Seconds
   * - String with 'm' suffix: Minutes
   *
   * Lower values will update more frequently but may impact performance. Higher values are more efficient but update less often.
   *
   * @example 20 // Update every second (20 ticks)
   * @example '5s' // Update every 5 seconds
   * @example '2m' // Update every 2 minutes
   * @example 100 // Update every 5 seconds (100 ticks)
   */
  interval: number | string;
}
