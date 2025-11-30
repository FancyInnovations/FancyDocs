'use client';

import { useEffect, useState } from 'react';

interface ModrinthVersion {
  version_number: string;
  version_type: 'release' | 'beta' | 'alpha';
  date_published: string;
}

interface LatestVersionProps {
  project: string;
  fallback?: string;
  showDevBuilds?: boolean;
}

const PROJECT_IDS: Record<string, string> = {
  'FancyHolograms': '5QNgOj66',
  'FancyNpcs': 'EeyAn23L',
  'FancyDialogs': 'Sx6YwpnK',
};

export function LatestVersion({
  project,
  fallback = 'latest',
  showDevBuilds = false
}: LatestVersionProps) {
  const [stableVersion, setStableVersion] = useState<string>(fallback);
  const [betaVersion, setBetaVersion] = useState<string | null>(null);
  const [alphaVersion, setAlphaVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestVersion() {
      try {
        const projectId = PROJECT_IDS[project];
        if (!projectId) {
          console.error(`Unknown project: ${project}`);
          setLoading(false);
          return;
        }

        const response = await fetch(`https://api.modrinth.com/v2/project/${projectId}/version`);
        if (response.ok) {
          const versions: ModrinthVersion[] = await response.json();

          const stableVersions = versions.filter(v => v.version_type === 'release');
          if (stableVersions.length > 0) {
            setStableVersion(stableVersions[0].version_number);
          }

          if (showDevBuilds) {
            const betaVersions = versions.filter(v => v.version_type === 'beta');
            if (betaVersions.length > 0) {
              setBetaVersion(betaVersions[0].version_number);
            }

            const alphaVersions = versions.filter(v => v.version_type === 'alpha');
            if (alphaVersions.length > 0) {
              setAlphaVersion(alphaVersions[0].version_number);
            }
          }
        }
      } catch (error) {
        console.error('Failed to fetch latest version:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestVersion();
  }, [project, showDevBuilds]);

  return (
    <span>
      {stableVersion}
      {showDevBuilds && (betaVersion || alphaVersion) && (
        <>
          <br />
          <span style={{ fontSize: '0.875em', opacity: 0.7 }}>
            {betaVersion && `Beta: ${betaVersion}`}
            {betaVersion && alphaVersion && ' | '}
            {alphaVersion && `Alpha: ${alphaVersion}`}
          </span>
        </>
      )}
    </span>
  );
}
