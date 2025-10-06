# IndexNow Integration for Micorp

This project includes a complete IndexNow API integration to help search engines discover and index your website content faster.

## What is IndexNow?

IndexNow is a protocol that allows website owners to instantly inform search engines about the latest content changes on their website. This helps ensure that search engines discover and index your content more quickly.

## Features Implemented

### 1. API Key Hosting ✅
- API key file `91821fdd0afa4ae6b051868206501412.txt` is hosted in the `public` directory
- Automatically accessible at `https://micorp.pro/91821fdd0afa4ae6b051868206501412.txt`

### 2. IndexNow API Route ✅
- **Endpoint**: `/api/indexnow`
- **Method**: POST
- **Purpose**: Submit URLs to search engines via IndexNow protocol

#### API Usage:
```bash
curl -X POST http://localhost:3000/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://micorp.pro/page1",
      "https://micorp.pro/page2"
    ],
    "host": "micorp.pro"
  }'
```

### 3. Utility Functions ✅
- `submitToIndexNow()` - Submit multiple URLs
- `submitSingleUrlToIndexNow()` - Submit a single URL
- `submitAllSitePagesToIndexNow()` - Submit all common pages
- `isValidUrl()` - Validate URL format
- `getIndexNowKeyUrl()` - Get API key file URL

### 4. Admin Interface Integration ✅
- Added IndexNow button to admin dashboard
- Submit all pages with one click
- Submit custom URLs
- Real-time submission results
- Error handling and status reporting

## How to Use

### 1. Via Admin Interface (Recommended)
1. Go to `/admin` and log in
2. Click the "IndexNow" button
3. Choose "Submit All Pages" for quick submission
4. Or enter custom URLs in the textarea
5. Click "Submit Custom URLs"

### 2. Via API Directly
```javascript
import { submitToIndexNow } from '@/lib/indexnow';

const result = await submitToIndexNow({
  urls: ['https://micorp.pro/page1', 'https://micorp.pro/page2'],
  host: 'micorp.pro'
});

console.log(result);
```

### 3. Via HTTP Request
```bash
curl -X POST https://micorp.pro/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": ["https://micorp.pro/new-page"],
    "host": "micorp.pro"
  }'
```

## Testing

Run the test script to verify everything works:

```bash
node test-indexnow.js
```

This will test both the IndexNow API and your local API route.

## Configuration

### Environment Variables
No additional environment variables are required. The API key is hardcoded as per IndexNow requirements.

### Domain Configuration
Update the hostname in your code when deploying to production:

1. In `lib/indexnow.ts` - Update the `submitAllSitePagesToIndexNow` function
2. In `app/admin/page.tsx` - The hostname is automatically detected from `window.location.hostname`

## API Response Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | Success | URLs submitted successfully |
| 400 | Bad Request | Invalid format |
| 403 | Forbidden | Key not valid |
| 422 | Unprocessable Entity | URLs don't belong to host or key mismatch |
| 429 | Too Many Requests | Rate limit exceeded |

## Best Practices

### 1. When to Submit URLs
- After publishing new content
- After updating existing pages
- After fixing broken links
- After major site updates

### 2. What URLs to Submit
- New blog posts
- Updated product pages
- New service pages
- Important landing pages
- Sitemap updates

### 3. Frequency
- Don't submit the same URL repeatedly
- Submit in batches for efficiency
- Monitor submission results

## Monitoring

### 1. Admin Interface
- Check submission results in the admin panel
- View success/failure status
- See submitted URLs and any errors

### 2. Bing Webmaster Tools
- Verify URLs are received by search engines
- Monitor indexing status
- Check for any issues

### 3. Search Console
- Monitor indexing in Google Search Console
- Track search performance
- Identify indexing issues

## Troubleshooting

### Common Issues

1. **403 Forbidden Error**
   - Verify API key file is accessible at the correct URL
   - Check that the key in the file matches your API key

2. **422 Unprocessable Entity**
   - Ensure URLs belong to the specified host
   - Verify URL format is correct

3. **429 Too Many Requests**
   - Reduce submission frequency
   - Wait before submitting again

### Debug Steps

1. Check API key file accessibility:
   ```bash
   curl https://micorp.pro/91821fdd0afa4ae6b051868206501412.txt
   ```

2. Test API route:
   ```bash
   curl -X GET https://micorp.pro/api/indexnow
   ```

3. Verify URL format:
   ```javascript
   import { isValidUrl } from '@/lib/indexnow';
   console.log(isValidUrl('https://micorp.pro/page'));
   ```

## Files Modified/Created

### New Files:
- `app/api/indexnow/route.ts` - IndexNow API endpoint
- `lib/indexnow.ts` - Utility functions
- `test-indexnow.js` - Test script

### Modified Files:
- `app/admin/page.tsx` - Added IndexNow interface
- `public/91821fdd0afa4ae6b051868206501412.txt` - API key file (already existed)

## Security Notes

- The API key is public by design (IndexNow requirement)
- No sensitive data is exposed
- Rate limiting is handled by IndexNow service
- Input validation prevents malicious URLs

## Support

For issues with IndexNow integration:
1. Check the admin panel for error messages
2. Run the test script to verify setup
3. Check IndexNow documentation: https://www.indexnow.org/documentation
4. Verify your domain configuration

---

**Note**: This integration follows the official IndexNow protocol specifications and is compatible with all major search engines that support IndexNow.
