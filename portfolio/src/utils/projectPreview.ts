/**
 * WordPress mShots — free screenshot service, works as <img src> without an API key.
 */
export function getSiteScreenshotUrl(url: string, width = 640): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

export async function fetchMicrolinkScreenshot(url: string): Promise<string | null> {
  try {
    const endpoint = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
    const response = await fetch(endpoint);
    if (!response.ok) return null;

    const json = (await response.json()) as {
      data?: { screenshot?: { url?: string } };
    };

    return json.data?.screenshot?.url ?? null;
  } catch {
    return null;
  }
}
