const fetch = require('node-fetch');
const FormData = require('form-data');

async function fetchAccessToken() {
  const formdata = new FormData();
  formdata.append("client_id", process.env.CLIENT_ID);
  formdata.append("client_secret", process.env.CLIENT_SECRET);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    headers: formdata.getHeaders(), // Add this line to set the correct headers
    redirect: 'follow'
  };

  try {
    const response = await fetch("https://production.deepvue.tech/v1/authorize", requestOptions);
    
    // Log the entire response object
    console.log("Response Object:", response);

    const result = await response.json();
    
    // Log the JSON content of the response
    console.log("Response JSON:", result);

    if (response.ok) {
      return result.access_token; // Extract the access token from the response
    } else {
      console.log('Failed to fetch access token:', result.message);
      return null;
    }
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}

async function verifyPAN(panNumber, name) {
  const apiKey = process.env.CLIENT_SECRET;

  if (!apiKey) {
    return { error: true, message: 'Missing API key' };
  }

  const accessToken = await fetchAccessToken();
  if (!accessToken) {
    return { error: true, message: 'Failed to fetch access token' };
  }

  const myHeaders = new fetch.Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("x-api-key", apiKey);
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const apiUrl = `https://production.deepvue.tech/v1/verification/panbasic?pan_number=${panNumber}&name=${name}`;

  try {
    const response = await fetch(apiUrl, requestOptions);
    const result = await response.json();

    console.log("Response Status:", response.status);
    console.log("Response Body:", result);

    if (!response.ok) {
      return { error: true, message: result.message || 'Failed to verify PAN' };
    }

    return { error: false, data: result };
  } catch (error) {
    console.error("Error:", error);
    return { error: true, message: error.message };
  }
}

async function testFetchAccessToken() {
  const token = await fetchAccessToken();
  if (token) {
    console.log("Access Token:", token);
  } else {
    console.log("Failed to fetch access token");
  }
}

async function testVerifyPAN() {
  const panNumber = 'AAAAP0267H'; // Replace with a valid PAN number for testing
  const name = 'SUDHANSHU'; // Replace with a valid name for testing
  const result = await verifyPAN(panNumber, name);
  console.log("PAN Verification Result:", result);
}

// Export the functions
module.exports = {
  verifyPAN,
  testFetchAccessToken,
  testVerifyPAN
};