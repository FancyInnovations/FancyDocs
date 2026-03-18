import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const PROJECT_IDS = {
  'FancyHolograms': '5QNgOj66',
  'FancyNpcs': 'EeyAn23L',
  'FancyDialogs': 'Sx6YwpnK',
  'FancyWorlds': 'pQjoA91u',
};

async function fetchLatestVersion(projectId, projectName) {
  try {
    const response = await fetch(`https://api.modrinth.com/v2/project/${projectId}/version`, {
      signal: AbortSignal.timeout(5000)
    });
    if (response.ok) {
      const versions = await response.json();
      const stableVersions = versions.filter(v => v.version_type === 'release');
      if (stableVersions.length > 0) {
        return stableVersions[0].version_number;
      }
    }
  } catch (error) {
    console.warn(`⚠ Failed to fetch version for ${projectName}: ${error.message}`);
  }
  return null;
}

async function processTemplate(templatePath, outputPath, replacements) {
  let content = readFileSync(templatePath, 'utf-8');

  for (const [key, value] of Object.entries(replacements)) {
    content = content.replace(new RegExp(key, 'g'), value);
  }

  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, content, 'utf-8');
  console.log(`✓ Generated ${outputPath}`);
}

async function main() {
  console.log('Fetching latest versions from Modrinth...');

  const versions = {
    FancyHolograms: await fetchLatestVersion(PROJECT_IDS.FancyHolograms, 'FancyHolograms'),
    FancyNpcs: await fetchLatestVersion(PROJECT_IDS.FancyNpcs, 'FancyNpcs'),
    FancyDialogs: await fetchLatestVersion(PROJECT_IDS.FancyDialogs, 'FancyDialogs'),
    FancyWorlds: await fetchLatestVersion(PROJECT_IDS.FancyWorlds, 'FancyWorlds'),
  };

  const failedFetches = Object.entries(versions).filter(([_, version]) => version === null);

  if (failedFetches.length > 0) {
    console.warn('\n⚠ Some version fetches failed. Skipping doc generation to preserve existing docs.');
    console.warn('Failed projects:', failedFetches.map(([name]) => name).join(', '));
    console.log('\n✓ Using existing documentation files (no changes made)');
    return;
  }

  console.log('Versions:', versions);
  console.log('\nGenerating documentation files...');

  try {
    await processTemplate(
      join(rootDir, 'templates/minecraft-plugins/fancydialogs/api/getting-started.mdx'),
      join(rootDir, 'content/docs/minecraft-plugins/fancydialogs/api/getting-started.mdx'),
      { '\\$\\{VERSION\\}': versions.FancyDialogs }
    );

    await processTemplate(
      join(rootDir, 'templates/minecraft-plugins/fancynpcs/api/getting-started.mdx'),
      join(rootDir, 'content/docs/minecraft-plugins/fancynpcs/api/getting-started.mdx'),
      { '\\$\\{VERSION\\}': versions.FancyNpcs }
    );

    await processTemplate(
      join(rootDir, 'templates/minecraft-plugins/fancyholograms/api/getting-started.mdx'),
      join(rootDir, 'content/docs/minecraft-plugins/fancyholograms/api/getting-started.mdx'),
      { '\\$\\{VERSION\\}': versions.FancyHolograms }
    );

    await processTemplate(
        join(rootDir, 'templates/minecraft-plugins/fancyworlds/api/getting-started.mdx'),
        join(rootDir, 'content/docs/minecraft-plugins/fancyworlds/api/getting-started.mdx'),
        { '\\$\\{VERSION\\}': versions.FancyHolograms }
    );

    console.log('\n✓ All documentation files generated successfully!');
  } catch (error) {
    console.error('\n✗ Error generating docs:', error);
    console.warn('⚠ Existing documentation files preserved');
    process.exit(0);
  }
}

main().catch((error) => {
  console.error('✗ Fatal error:', error);
  process.exit(0);
});
