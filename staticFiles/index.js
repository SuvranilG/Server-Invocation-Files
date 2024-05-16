function fetchData(apiUrl) {
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.text())
      .then(data => {
        // Process the fetched data (e.g., update UI, store in state, etc.)
        console.log(`Fetched data from ${apiUrl}:`, data);
      })
      .catch(error => {
        console.error(`Error fetching data from ${apiUrl}:`, error);
      });
  }
  
  // Define your API endpoints
  const apiEndpoints = [
    'https://freelancerwebapp.onrender.com',
    'https://backend-ogreenery.onrender.com',
    'https://codexwebapp.onrender.com',
    // Add more API endpoints as needed
  ];
  
  // Fetch data initially for all endpoints
  apiEndpoints.forEach(fetchData);
  
  // Fetch data every 14 minutes (14 minutes * 60 seconds * 1000 milliseconds)
  const intervalInMilliseconds = 14 * 60 * 1000;
  setInterval(() => {
    apiEndpoints.forEach(fetchData);
  }, intervalInMilliseconds);
  