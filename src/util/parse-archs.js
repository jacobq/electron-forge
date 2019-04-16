import { allOfficialArchsForPlatformAndVersion } from 'electron-packager/src/targets';

export default function parseArchs(platform, declaredArch, electronVersion) {
  if (declaredArch === 'all') {
    return allOfficialArchsForPlatformAndVersion(platform, electronVersion) || ['x64'];
  }

  return declaredArch.split(',');
}
