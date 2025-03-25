 const axios = require("axios");

const dApi = async () => {
  const base = await axios.get(
    "https://raw.githubusercontent.com/nazrul4x/Noobs/main/Apis.json"
  );
  return base.data.alldl;
};

module.exports.config = {
  name: "autodown",
  aliases: ["autolink","autodl"],
  version: "1.6.9",
  author: "Nazrul",
  role: 0,
  description: "Automatically download videos from supported platforms!",
  category: "media",
  countDown: 7,
  guide: {
    en: "Send a valid video link from supported platforms (TikTok, Facebook, YouTube, Twitter, Instagram, etc.), and the bot will download it automatically.",
  },
};

module.exports.onStart = ({}) => {};

const platforms = {
  Aparat: {
    regex: /(?:https?:\/\/)?(?:www\.)?aparat\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Bandcamp: {
    regex: /(?:https?:\/\/)?(?:www\.)?bandcamp\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Bilibili: {
    regex: /(?:https?:\/\/)?(?:www\.)?bilibili\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Catbox: {
    regex: /(?:https?:\/\/)?(?:www\.)?catbox\.moe/,
    endpoint: "/nazrul/alldl?url=",
  },
  Cloudinary: {
    regex: /(?:https?:\/\/)?(?:www\.)?res\.cloudinary\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  DailyMotion: {
    regex: /(?:https?:\/\/)?(?:www\.)?dailymotion\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  DeviantArt: {
    regex: /(?:https?:\/\/)?(?:www\.)?deviantart\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Dropbox: {
    regex: /(?:https?:\/\/)?(?:www\.)?dropbox\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Facebook: {
    regex: /(?:https?:\/\/)?(?:www\.)?(facebook\.com|fb\.watch|facebook\.com\/share\/v)/,
    endpoint: "/nazrul/fbDL?url=",
  },
  Flickr: {
    regex: /(?:https?:\/\/)?(?:www\.)?flickr\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Giphy: {
    regex: /(?:https?:\/\/)?(?:www\.)?giphy\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  GoogleDrive: {
    regex: /(?:https?:\/\/)?(?:www\.)?drive\.google\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Imgur: {
    regex: /(?:https?:\/\/)?(?:www\.)?imgur\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  ImgBB: {
    regex: /(?:https?:\/\/)?(?:www\.)?imgbb\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Instagram: {
    regex: /(?:https?:\/\/)?(?:www\.)?instagram\.com/,
    endpoint: "/nazrul/instaDL?url=",
  },
  Kwai: {
    regex: /(?:https?:\/\/)?(?:www\.)?kwai\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Likee: {
    regex: /(?:https?:\/\/)?(?:www\.)?likee\.video/,
    endpoint: "/nazrul/alldl?url=",
  },
  LinkedIn: {
    regex: /(?:https?:\/\/)?(?:www\.)?linkedin\.com\/feed/,
    endpoint: "/nazrul/alldl?url=",
  },
  Mediafire: {
    regex: /(?:https?:\/\/)?(?:www\.)?mediafire\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Mega: {
    regex: /(?:https?:\/\/)?(?:www\.)?mega\.nz/,
    endpoint: "/nazrul/alldl?url=",
  },
  MixCloud: {
    regex: /(?:https?:\/\/)?(?:www\.)?mixcloud\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Moj: {
    regex: /(?:https?:\/\/)?(?:www\.)?moj\.app/,
    endpoint: "/nazrul/alldl?url=",
  },
  Odnoklassniki: {
    regex: /(?:https?:\/\/)?(?:www\.)?ok\.ru/,
    endpoint: "/nazrul/alldl?url=",
  },
  OneDrive: {
    regex: /(?:https?:\/\/)?(?:www\.)?onedrive\.live\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Pinterest: {
    regex: /(?:https?:\/\/)?(?:www\.)?pinterest\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Pixeldrain: {
    regex: /(?:https?:\/\/)?(?:www\.)?pixeldrain\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Pixiv: {
    regex: /(?:https?:\/\/)?(?:www\.)?pixiv\.net/,
    endpoint: "/nazrul/alldl?url=",
  },
  PostImage: {
    regex: /(?:https?:\/\/)?(?:www\.)?postimg\.cc/,
    endpoint: "/nazrul/alldl?url=",
  },
  Reddit: {
    regex: /(?:https?:\/\/)?(?:www\.)?reddit\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  ShareChat: {
    regex: /(?:https?:\/\/)?(?:www\.)?sharechat\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  SnapSave: {
    regex: /(?:https?:\/\/)?(?:www\.)?snapsave\.app/,
    endpoint: "/nazrul/alldl?url=",
  },
  SnapTik: {
    regex: /(?:https?:\/\/)?(?:www\.)?snaptik\.app/,
    endpoint: "/nazrul/alldl?url=",
  },
  SoundCloud: {
    regex: /(?:https?:\/\/)?(?:www\.)?soundcloud\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Streamable: {
    regex: /(?:https?:\/\/)?(?:www\.)?streamable\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Streamtape: {
    regex: /(?:https?:\/\/)?(?:www\.)?streamtape\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Telegram: {
    regex: /(?:https?:\/\/)?(?:www\.)?t\.me/,
    endpoint: "/nazrul/alldl?url=",
  },
  TikTok: {
    regex: /(?:https?:\/\/)?(?:www\.)?tiktok\.com/,
    endpoint: "/nazrul/tikDL?url=",
  },
  TikTokLite: {
    regex: /(?:https?:\/\/)?(?:www\.)?vm\.tiktok\.com/,
    endpoint: "/nazrul/alldl?url=",
  },
  Triller: {
    regex: /(?:https?:\/\/)?(?:www\.)?triller\.co/,
    endpoint: "/nazrul/alldl?url=",
  },
  Twitch: {
    regex: /(?:https?:\/\/)?(?:www\.)?twitch\.tv/,
