const http = require('http');
const app = require('./app');  
const connectDB = require('./src/config/db');
const { initializeCluster } = require('./src/utils/cluster'); 
const { runLoadTest } = require('./src/utils/loadTest');


initializeCluster(app); 
connectDB();

// setTimeout(() => {
//     runLoadTest();  
//   }, 5000);    