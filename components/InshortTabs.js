
import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";

const InshortTabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "news", title: "News" }]);

  const newsItems = [
  {
    id: 1,
    title: "Investing in Nvidia Stock: Strategic Genius or High-Stakes Gamble?",
    description: "Nvidia seems like a strong buy, but you might need to rethink your investment. Year-to-date, Nvidia (NASDAQ:) has risen almost 80%. It has helped the Nasdaq and S&P 500 reach new highs, and data shows that NVDA stock has dethroned Tesla (NASDAQ:) as the most…",
    urlToImage: "https://c.biztoc.com/p/da17cf9373512bfc/s.webp",
    url: "https://biztoc.com/x/da17cf9373512bfc",
  },
  {
    id: 2,
    title: "RIVN Stock Forecast: What Will It Take for Rivian to Turn Things Around?",
    description: "What would need to happen for investors to start pouring back into this name? Rivian Automotive (NASDAQ:RIVN) and other early-stage EV companies posted disastrous Q4 earnings. Last week, RIVN stock made quite the waves in the startup EV industry (for the wron…",
    urlToImage: "https://c.biztoc.com/p/3229b103000d310f/s.webp",
    url: "https://biztoc.com/x/3229b103000d310f",
  },
  {
    id: 3,
    title: "Jeff Bezos only lasted a few days as the world's richest person",
    description: "None Bernard Arnault is the CEO and founder of the luxury conglomerate LVMH. • None He currently has a fortune of $197 billion making him the world's richest person. • None The title often bounces between Arnault, Amazon founder Jeff Bezos, and Tesla CEO Elon…",
    urlToImage: "https://c.biztoc.com/p/3800ef36d126f2bf/s.webp",
    url: "https://biztoc.com/x/3800ef36d126f2bf",
  },
  {
    id: 4,
    title: "Why Tesla and Consumer Habits Are Squeezing Out EV Charging Stocks",
    description: "Changes in how consumers charge EVs and Tesla's charging infrastructure dominance are set to leave EV charging stocks out in the cold. The post Why Tesla and Consumer Habits Are Squeezing Out EV Charging Stocks appeared first on Investor's Business Daily.#tes…",
    urlToImage: "https://c.biztoc.com/273/og.png",
    url: "https://biztoc.com/x/6d67f6df825513c8",
  },
  {
    id: 5,
    title: "ERICSSON NIKOLA TESLA d d : Notification of the acquisition of own shares",
    description: "(marketscreener.com) \n \n \n Confidentiality Class: Open\n \n \n \n \n \n Datum\n \n \n \n \n Naš broj\n \n \n \n \n \n \n Vaš datum\n \n ...",
    urlToImage: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    url: "https://www.marketscreener.com/quote/stock/ERICSSON-NIKOLA-TESLA-D-D-6496912/news/ERICSSON-NIKOLA-TESLA-d-d-Notification-of-the-acquisition-of-own-shares-46119224/",
  },
  {
    id: 6,
    title: "Tesla's value has slumped by $234 billion this year",
    description: "Elon Musk is CEO of Tesla. Peter Parks/AFP/Getty Images Tesla's market value has tumbled $234 billion this year, or more than McDonald's or Disney are worth. Elon Musk's EV maker is close to losing more value than Netflix or Coke's entire market caps. Tesla s…",
    urlToImage: "https://c.biztoc.com/p/a89c0133a0f32ad3/s.webp",
    url: "https://biztoc.com/x/a89c0133a0f32ad3",
  },
  {
    id: 7,
    title: "Tesla releases impressive new Cybertruck off-road video as fails from owners pile up",
    description: "Tesla has released an impressive new video of a Cybertruck off-roading while instances of Cybertruck owners failing are piling up.",
    urlToImage: "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/03/Tesla-Cybertruck-off-roading-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    url: "http://electrek.co/2024/03/07/tesla-cybertruck-off-road-video-fails-owners-pile-up/",
  },
  {
    id: 8,
    title: "Battery Scanning Company Glimpse Announces Seed Raise and Launch of its X-ray-powered Quality Monitoring Platform",
    description: "SOMERVILLE, Mass., March 07, 2024 (GLOBE NEWSWIRE) — Glimpse, a provider of battery quality monitoring solutions for battery producers and electric mobility companies, today announced its official launch, initial capital raise of $4 million, and the release o…",
    urlToImage: "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/03/glimpse-portal.png",
    url: "https://financialpost.com/globe-newswire/battery-scanning-company-glimpse-announces-seed-raise-and-launch-of-its-x-ray-powered-quality-monitoring-platform",
  }
  // Add more news items here
];

  const renderScene = SceneMap({
    news: () => <NewsScreen newsItems={newsItems} />,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation />}
    />
  );
};

export default InshortTabs;