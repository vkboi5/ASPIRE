const fetch = require('node-fetch');

async function verifyPAN(panNumber, name) {
  const accessToken = process.env.ACCESS_TOKEN;
  const apiKey = process.env.CLIENT_SECRET;

  if (!accessToken || !apiKey) {
    return { error: true, message: 'Missing access token or API key' };
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

module.exports = verifyPAN;