import Parser from "rss-parser";

const parser = new Parser();

export async function feedUrlToJson(url: string) {
  try {
    const feed = await parser.parseURL(url);
    // console.log(url, "parsed ✅");

    return feed.items;
  } catch (err) {
    // console.log(url, "not parsed ❌");
    // console.log(err);
    return [];
  }
}

// import { categorizedFeeds } from "../constants/categorizedFeeds.ts";

// (async () => {
//   console.log(
//     JSON.stringify(
//       await rssUrlToJson(categorizedFeeds.programming[0].url )
//     )
//   );
// })();
