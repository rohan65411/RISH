 const axios = require("axios");

module.exports = {
  config: {
    name: "mix2",
    version: "1.5",
    author: "ntkhang",
    countDown: 5,
    role: 0,
    description: "Mix 2 emojis together",
    guide: "{pn} <emoji1> <emoji2>\nExample: {pn} 🤣 🥰",
    category: "fun"
  },

  langs: {
    en: {
      error: "Sorry, emoji %1 and %2 can't mix",
      success: "Emoji %1 and %2 mixed successfully"
    }
  },

  onStart: async function ({ message, args, getLang }) {
    const emoji1 = args[0];
    const emoji2 = args[1];

    if (!emoji1 || !emoji2) {
      return message.SyntaxError();
    }

    // Log input for debugging purposes
    console.log("mix2 command - emoji1:", emoji1);
    console.log("mix2 command - emoji2:", emoji2);

    // Construct the API URL with proper encoding
    const apiUrl = `https://mahmud-emoji.onrender.com/mix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}`;
    console.log("Calling API URL:", apiUrl);

    try {
      const response = await axios.get(apiUrl, { responseType: "arraybuffer" });

      // Send the mixed emoji image as an attachment in response
      message.reply({
        body: getLang("success", emoji1, emoji2),
        attachment: Buffer.from(response.data, "binary")
      });
    } catch (error) {
      console.error("Error making API request:", error);
      return message.reply(getLang("error", emoji1, emoji2));
    }
  }
};
