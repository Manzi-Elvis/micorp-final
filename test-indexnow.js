#!/usr/bin/env node

/**
 * Test script for IndexNow API integration
 * Run with: node test-indexnow.js
 */

const API_KEY = '91821fdd0afa4ae6b051868206501412';
const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow';

async function testIndexNowAPI() {
  console.log('🧪 Testing IndexNow API Integration...\n');

  // Test data
  const testData = {
    host: 'localhost:3000', // Replace with your actual domain
    key: API_KEY,
    keyLocation: `https://localhost:3000/${API_KEY}.txt`, // Replace with your actual domain
    urlList: [
      'https://localhost:3000/',
      'https://localhost:3000/about',
      'https://localhost:3000/services'
    ]
  };

  try {
    console.log('📤 Submitting test URLs to IndexNow...');
    console.log('Host:', testData.host);
    console.log('Key:', testData.key);
    console.log('Key Location:', testData.keyLocation);
    console.log('URLs:', testData.urlList);
    console.log('');

    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Response Status:', response.status);
    console.log('📊 Response Headers:', Object.fromEntries(response.headers.entries()));

    if (response.ok) {
      console.log('✅ Success! URLs submitted to IndexNow');
      console.log('📝 Note: This is a test with localhost - use your actual domain for production');
    } else {
      console.log('❌ Failed to submit URLs');
      console.log('Status:', response.status, response.statusText);
      
      const errorText = await response.text();
      console.log('Error details:', errorText);
    }

  } catch (error) {
    console.error('❌ Error testing IndexNow API:', error.message);
  }
}

async function testLocalAPI() {
  console.log('\n🧪 Testing Local API Route...\n');

  const testData = {
    urls: [
      'https://localhost:3000/',
      'https://localhost:3000/about',
      'https://localhost:3000/services'
    ],
    host: 'localhost:3000'
  };

  try {
    console.log('📤 Testing local API route...');
    console.log('Data:', JSON.stringify(testData, null, 2));

    const response = await fetch('http://localhost:3000/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Response Status:', response.status);
    
    const result = await response.json();
    console.log('📊 Response Body:', JSON.stringify(result, null, 2));

    if (result.success) {
      console.log('✅ Local API test successful!');
    } else {
      console.log('❌ Local API test failed:', result.message);
    }

  } catch (error) {
    console.error('❌ Error testing local API:', error.message);
    console.log('💡 Make sure your Next.js development server is running on localhost:3000');
  }
}

async function main() {
  console.log('🚀 IndexNow Integration Test Suite');
  console.log('=====================================\n');

  // Test the IndexNow API directly
  await testIndexNowAPI();

  // Test the local API route
  await testLocalAPI();

  console.log('\n📋 Test Summary:');
  console.log('1. IndexNow API Key file should be hosted at: https://your-domain.com/91821fdd0afa4ae6b051868206501412.txt');
  console.log('2. Your API route is available at: /api/indexnow');
  console.log('3. Admin interface includes IndexNow functionality');
  console.log('4. Use the admin panel to submit URLs to search engines');
  
  console.log('\n🔗 Next Steps:');
  console.log('1. Deploy your site with the API key file');
  console.log('2. Update the hostname in the test data');
  console.log('3. Use the admin panel to submit your URLs');
  console.log('4. Monitor search engine indexing via Bing Webmaster Tools');
}

// Run the tests
main().catch(console.error);
