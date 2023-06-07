// Get references to DOM elements
const form = document.querySelector('form');
const emailInput = document.querySelector('#email-input');
const numCharsInput = document.querySelector('#num-chars-input');

// Function to generate a random character
function generateRandomCharacter() {
  const randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomChar = '';
  for (let i = 0; i < 8; i++) {
    randomChar += randomChars[Math.floor(Math.random() * randomChars.length)];
  }
  return randomChar;
}

// Function to generate email addresses with random characters
function generateEmailAddresses(numChars) {
  const email = emailInput.value;
  let emailAddresses = '';

  for (let i = 0; i < numChars; i++) {
    // Generate random character
    const randomChar = generateRandomCharacter();

    // Concatenate email address and generated character
    const emailAddress = `${email}+${randomChar}@gmail.com\n`;

    // Append email address to string
    emailAddresses += emailAddress;
  }

  // Return string of email addresses with generated characters
  return emailAddresses;
}

// Handle form submit event
form.addEventListener('submit', (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Get user input
  const numChars = parseInt(numCharsInput.value);

  // Generate email addresses with random characters
  const emailAddresses = generateEmailAddresses(numChars);

  // Create a Blob with the email addresses data
  const blob = new Blob([emailAddresses], { type: 'text/plain' });

  // Create a temporary anchor element
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'email_addresses.txt';

  // Append the anchor element to the document and click it programmatically
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Clean up
  document.body.removeChild(downloadLink);
});
