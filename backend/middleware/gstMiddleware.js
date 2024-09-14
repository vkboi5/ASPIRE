const axios = require('axios');

async function verifyGST(gstNo) {
    try {
      const apiKey = process.env.GST_SECRET;
      const apiUrl = `http://sheet.gstincheck.co.in/check/${apiKey}/${gstNo}`;
      const response = await axios.get(apiUrl);
      const data = response.data;

      if (data.flag === false) {
        return { error: true, message: data.message, errorCode: data.errorCode };
      } else {
        return { error: false, data: data.data };
      }
    } catch (error) {
      return { error: true, message: error.message };
    }
  }

  module.exports = verifyGST;

