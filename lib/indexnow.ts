/**
 * IndexNow utility functions for submitting URLs to search engines
 */

export interface IndexNowSubmissionResult {
  success: boolean;
  status: number;
  message: string;
  submittedUrls?: string[];
  errors?: string[];
}

export interface IndexNowSubmissionOptions {
  urls: string[];
  host: string;
  baseUrl?: string;
}

/**
 * Submit URLs to IndexNow API
 * @param options - Submission options including URLs and host
 * @returns Promise with submission result
 */
export async function submitToIndexNow(
  options: IndexNowSubmissionOptions
): Promise<IndexNowSubmissionResult> {
  const { urls, host, baseUrl = '' } = options;

  try {
    const response = await fetch(`${baseUrl}/api/indexnow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls,
        host,
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: 'Failed to submit URLs to IndexNow',
      errors: [error instanceof Error ? error.message : 'Unknown error'],
    };
  }
}

/**
 * Submit a single URL to IndexNow
 * @param url - The URL to submit
 * @param host - The host domain
 * @param baseUrl - Optional base URL for the API
 * @returns Promise with submission result
 */
export async function submitSingleUrlToIndexNow(
  url: string,
  host: string,
  baseUrl: string = ''
): Promise<IndexNowSubmissionResult> {
  return submitToIndexNow({ urls: [url], host, baseUrl });
}

/**
 * Submit multiple URLs to IndexNow
 * @param urls - Array of URLs to submit
 * @param host - The host domain
 * @param baseUrl - Optional base URL for the API
 * @returns Promise with submission result
 */
export async function submitMultipleUrlsToIndexNow(
  urls: string[],
  host: string,
  baseUrl: string = ''
): Promise<IndexNowSubmissionResult> {
  return submitToIndexNow({ urls, host, baseUrl });
}

/**
 * Submit all pages from your site to IndexNow
 * This is useful for initial site submission or after major updates
 * @param host - The host domain
 * @param baseUrl - Optional base URL for the API
 * @returns Promise with submission result
 */
export async function submitAllSitePagesToIndexNow(
  host: string,
  baseUrl: string = ''
): Promise<IndexNowSubmissionResult> {
  // Common pages to submit
  const commonPages = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/team',
    '/donate',
    '/request-job',
  ];

  const urls = commonPages.map(page => `https://${host}${page}`);
  
  return submitToIndexNow({ urls, host, baseUrl });
}

/**
 * Validate if a URL is properly formatted
 * @param url - URL to validate
 * @returns boolean indicating if URL is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'https:' || urlObj.protocol === 'http:';
  } catch {
    return false;
  }
}

/**
 * Get the IndexNow API key file URL
 * @param host - The host domain
 * @returns The URL where the API key file should be hosted
 */
export function getIndexNowKeyUrl(host: string): string {
  return `https://${host}/91821fdd0afa4ae6b051868206501412.txt`;
}
