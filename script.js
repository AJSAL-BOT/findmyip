// Fetch the public IP address using a free API
fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ip-display').textContent = data.ip;
  })
  .catch(error => {
    document.getElementById('ip-display').textContent = 'Unable to fetch IP address.';
    console.error('Error fetching IP address:', error);
  });
