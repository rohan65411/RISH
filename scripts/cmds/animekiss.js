const axios = require('axios');
const open = require('open');

async function showKissImage() {
  console.log('\n💋 Welcome to Anime Kiss CLI');
  console.log('Author: rishi ');
  console.log('Role: CLI Developer');
  console.log('Guide: Run this command anytime to get a new anime kiss image');
  console.log('Version: 1.0.0\n');

  try {
    const response = await axios.get('https://nekos.life/api/v2/img/kiss');
    const imageUrl = response.data.url;

    console.log('📸 Anime Kiss Image URL:', imageUrl);
    console.log('🌐 Opening image in your default browser...');
    await open(imageUrl);
  } catch (err) {
    console.error('❌ Failed to fetch image:', err.message);
  }
}

showKissImage();
