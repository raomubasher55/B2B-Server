async function runLoadTest() {
    const loadtest = await import('loadtest');
  
    const options = {
      url: 'http://localhost:3000/',  
      maxRequests: 1000,                
      concurrency: 10,                  
    };
  
    loadtest.loadTest(options, (error, result) => {
      if (error) {
        console.error('Error during load testing:', error);
      } else {
        console.log('Load test result:', result);
      }
    });
  }
  
  module.exports = { runLoadTest };
  