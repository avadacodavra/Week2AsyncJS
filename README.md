This project contains simple implementations of promisified versions of setTimeout, fetch, and fs.readFile.

**1. delay.js**
This file contains a simple promisified version of setTimeout, allowing you to pause execution for a specified number of milliseconds.

**2. fetchWithPromise.js**
This file demonstrates how to handle the fetch API in a more controlled way, converting the response to JSON and handling HTTP errors using promises.

**3. readFilePromise.js**
In this file, I’ve provided two versions of a promisified fs.readFile. One uses util.promisify for simplicity, while the other manually creates a promise to give you an understanding of how it works under the hood.

**4. app.js**
This is the main file where I’ve tested and demonstrated the usage of the three modules. It combines the functionalities and shows how they can be used in real-world scenarios.

<h1>How to Run</h1>
To run the code, follow these steps:

Clone the Repository:
git clone https://github.com/avadacodavra/Week2AsyncJS.git 

Navigate to the Project Directory:
cd promisified-functions-assignment

Run the Application:
You can run the main file using Node.js to see the functions in action:
node app.js
