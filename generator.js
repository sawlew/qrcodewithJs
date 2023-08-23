// Import the library
const QRCode = require('qrcode');

// Get elements from the DOM
const inputText = document.getElementById('inputText');
const generateButton = document.getElementById('generateButton');
const qrcodeContainer = document.getElementById('qrcode');

// Add event listener to the generate button
generateButton.addEventListener('click', generateQRCode);

// Function to generate the QR code
async function generateQRCode() {
  const text = inputText.value.trim();

  if (text === '') {
    alert('Please enter some text');
    return;
  }

  try {
    // Generate the QR code
    const qrDataURL = await QRCode.toDataURL(text);

    // Create an image element with the QR code
    const qrImage = document.createElement('img');
    qrImage.src = qrDataURL;
    qrImage.alt = 'QR Code';

    // Clear previous QR code (if any) and display the new one
    qrcodeContainer.innerHTML = '';
    qrcodeContainer.appendChild(qrImage);
  } catch (error) {
    console.error('QR code generation error:', error);
  }
}
