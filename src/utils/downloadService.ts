export type SpaceId = 'fc' | 'fa';
export type Platform = 'minecraft_plugin' | 'hytale_plugin';

interface VersionFile {
  name: string;
  url: string;
  size: number;
}

interface VersionResponse {
  space_id: string;
  id: string;
  name: string;
  platform: string;
  channel: string;
  published_at: string;
  changelog: string;
  supported_platform_versions: string[];
  files: VersionFile[];
}

export async function downloadLatestVersion(
  spaceId: SpaceId,
  platform?: Platform,
  onError?: (message: string) => void
): Promise<void> {
  try {
    let apiUrl = `/api/download?space_id=${spaceId}`;

    if (platform) {
      apiUrl += `&platform=${platform}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch version: ${response.statusText}`);
    }

    const data: { downloadUrl: string } = await response.json();

    if (!data.downloadUrl) {
      throw new Error('No download URL available');
    }

    window.location.href = data.downloadUrl;
  } catch (error) {
    console.error('Download error:', error);
    const errorMessage = 'Failed to download the file. Please try again later.';
    if (onError) {
      onError(errorMessage);
    } else {
      alert(errorMessage);
    }
  }
}