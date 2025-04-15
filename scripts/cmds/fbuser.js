module.exports = {
  config: {
    name: "fbuser",
    version: "1.0.1",
    author: "Xrotick",
    longDescription: "Get User Information.",
    shortDescription: "Get user information.",
    category: "utility",
    countdown: 5,
  },

  onStart: async function ({ api, event, args }) {
    let { threadID, senderID, messageID } = event;

    const getUserInfo = async (targetID) => {
      try {
        const userInfo = await api.getUserInfo(targetID);

        const userName = userInfo[targetID].name || "Name not available";
        const uid = targetID;
        const gender = userInfo[targetID].gender || "Gender not available";
        const birthday = userInfo[targetID].birthday || "Birthday not available";
        const fbLink = `https://www.facebook.com/profile.php?id=${uid}`;
        const profilePicURL = userInfo[targetID].profileUrl || "";
        const userStatus = userInfo[targetID].isOnline ? "Online 🟢" : "Offline 🔴";
        const areFriends = userInfo[targetID].isFriend ? "Yes ✅" : "No ❌";
        const socialMediaLinks = userInfo[targetID].socialMediaLinks || "No additional social media links available";

        const userInfoMessage = `
🌟 User Information 🌟

📝 Name: ${userName}
🆔 UID: ${uid}
👤 Gender: ${gender}
🎂 Birthday: ${birthday}
📊 Status: ${userStatus}
🤝 Friends: ${areFriends}
🌐 Facebook Link: ${fbLink}

🖼 Profile Picture: ${profilePicURL}

🔗 Additional Social Media Links:
${socialMediaLinks}
`.trim();

        api.sendMessage(userInfoMessage, threadID, (error, info) => {
          if (!error) {
            api.sendTypingIndicator(threadID);
            setTimeout(() => {
              api.setMessageReaction("❤", info.messageID, () => {}, true);
            }, 1000);
          }
        });
      } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching user information.", threadID, messageID);
      }
    };

    if (!args[0]) {
      getUserInfo(senderID);
    } else if (args[0].indexOf("@") !== -1 && Object.keys(event.mentions).length > 0) {
      const mentionedUID = Object.keys(event.mentions)[0];
      getUserInfo(mentionedUID);
    } else {
      api.sendMessage("Invalid command usage. Use `fbuser` or `fbuser @mention`.", threadID, messageID);
    }
  }
}; // <-- This was missing!
