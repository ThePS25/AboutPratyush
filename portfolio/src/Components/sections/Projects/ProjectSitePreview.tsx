import { useEffect, useRef, useState } from 'react';
import { fetchMicrolinkScreenshot, getSiteScreenshotUrl } from '@/utils/projectPreview';
import styles from './ProjectSitePreview.module.scss';

type PreviewMode = 'screenshot' | 'iframe' | 'fallback';

interface ProjectSitePreviewProps {
  demoUrl: string;
  title: string;
  fallbackImage: string;
}

export function ProjectSitePreview({
  demoUrl,
  title,
  fallbackImage,
}: ProjectSitePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState<PreviewMode>('screenshot');
  const [screenshotSrc, setScreenshotSrc] = useState(() => getSiteScreenshotUrl(demoUrl));
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '120px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    setIsLoading(true);
    setMode('screenshot');
    setScreenshotSrc(getSiteScreenshotUrl(demoUrl));
    setRetryCount(0);
  }, [shouldLoad, demoUrl]);

  const tryMicrolink = async () => {
    const microlinkUrl = await fetchMicrolinkScreenshot(demoUrl);
    if (microlinkUrl) {
      setScreenshotSrc(microlinkUrl);
      setMode('screenshot');
      setIsLoading(true);
      return;
    }
    setMode('iframe');
    iframeTimerRef.current = setTimeout(() => {
      setMode('fallback');
      setIsLoading(false);
    }, 7000);
  };

  const handleScreenshotError = () => {
    if (retryCount === 0) {
      setRetryCount(1);
      void tryMicrolink();
      return;
    }
    setMode('iframe');
    iframeTimerRef.current = setTimeout(() => {
      setMode('fallback');
      setIsLoading(false);
    }, 7000);
  };

  const handleScreenshotLoad = () => {
    setIsLoading(false);
    setMode('screenshot');
  };

  const handleIframeLoad = () => {
    if (iframeTimerRef.current) clearTimeout(iframeTimerRef.current);
    setIsLoading(false);
  };

  useEffect(() => {
    return () => {
      if (iframeTimerRef.current) clearTimeout(iframeTimerRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.preview}>
      <div className={styles.browserChrome} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.url}>{formatDisplayUrl(demoUrl)}</span>
      </div>

      {shouldLoad && isLoading && (
        <div className={styles.skeleton} aria-hidden="true">
          <span className={styles.skeletonBar} />
          <span className={styles.skeletonText}>Loading site preview…</span>
        </div>
      )}

      {shouldLoad && mode === 'screenshot' && (
        <img
          key={screenshotSrc}
          src={screenshotSrc}
          alt={`${title} website preview`}
          className={styles.screenshot}
          loading="lazy"
          onLoad={handleScreenshotLoad}
          onError={handleScreenshotError}
        />
      )}

      {shouldLoad && mode === 'iframe' && (
        <div className={styles.iframeScaler}>
          <iframe
            src={demoUrl}
            title={`${title} live preview`}
            className={styles.iframe}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={handleIframeLoad}
          />
        </div>
      )}

      {shouldLoad && mode === 'fallback' && (
        <img
          src={fallbackImage}
          alt={`${title} preview`}
          className={styles.screenshot}
          loading="lazy"
        />
      )}
    </div>
  );
}

function formatDisplayUrl(url: string): string {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch {
    return url;
  }
}
