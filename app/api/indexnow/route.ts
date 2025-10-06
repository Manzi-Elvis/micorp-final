import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_API_KEY = '91821fdd0afa4ae6b051868206501412';
const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow';

interface IndexNowRequest {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

interface IndexNowResponse {
  success: boolean;
  status: number;
  message: string;
  submittedUrls?: string[];
  errors?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls, host } = body;

    // Validate input
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { success: false, message: 'URLs array is required and must not be empty' },
        { status: 400 }
      );
    }

    if (!host) {
      return NextResponse.json(
        { success: false, message: 'Host is required' },
        { status: 400 }
      );
    }

    // Validate URLs format
    const validUrls = urls.filter(url => {
      try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'https:' || urlObj.protocol === 'http:';
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return NextResponse.json(
        { success: false, message: 'No valid URLs provided' },
        { status: 400 }
      );
    }

    // Prepare IndexNow request
    const indexNowRequest: IndexNowRequest = {
      host,
      key: INDEXNOW_API_KEY,
      keyLocation: `https://${host}/${INDEXNOW_API_KEY}.txt`,
      urlList: validUrls
    };

    // Submit to IndexNow API
    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(indexNowRequest),
    });

    const result: IndexNowResponse = {
      success: response.ok,
      status: response.status,
      message: getStatusMessage(response.status),
      submittedUrls: validUrls,
    };

    if (!response.ok) {
      result.errors = [`HTTP ${response.status}: ${response.statusText}`];
    }

    return NextResponse.json(result, { status: response.ok ? 200 : response.status });

  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        errors: [error instanceof Error ? error.message : 'Unknown error']
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API endpoint',
    usage: {
      method: 'POST',
      body: {
        urls: ['https://example.com/page1', 'https://example.com/page2'],
        host: 'example.com'
      }
    },
    keyLocation: `https://your-domain.com/${INDEXNOW_API_KEY}.txt`
  });
}

function getStatusMessage(status: number): string {
  switch (status) {
    case 200:
      return 'URLs submitted successfully';
    case 400:
      return 'Bad request - Invalid format';
    case 403:
      return 'Forbidden - Key not valid';
    case 422:
      return 'Unprocessable Entity - URLs don\'t belong to host or key mismatch';
    case 429:
      return 'Too Many Requests - Rate limit exceeded';
    default:
      return `HTTP ${status}`;
  }
}
