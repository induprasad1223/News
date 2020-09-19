import React, { useState } from "react";
import NewsCardsList from "./NewsCards";
import Category from "./Category";

const categories = new Map();
categories
  .set(
    "BITCOIN",
    "http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-18&sortBy=publishedAt&apiKey=83a8ad65b63e4f3790219601c284c64d"
  )
  .set(
    "U.S.A",
    "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=83a8ad65b63e4f3790219601c284c64d"
  )
  .set(
    "APPLE",
    "http://newsapi.org/v2/everything?q=apple&from=2020-09-17&to=2020-09-17&sortBy=popularity&apiKey=83a8ad65b63e4f3790219601c284c64d"
  )
  .set(
    "TECH CRUNCH",
    "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=83a8ad65b63e4f3790219601c284c64d"
  )
  .set(
    "WALLSTREET JOURNAL",
    "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=83a8ad65b63e4f3790219601c284c64d"
  );
const Home = () => {
  const [url, setUrl] = useState(categories.get("BITCOIN"));
  const handleUrlChange = (e) => {
    console.log("handleurl");
    setUrl(categories.get(e.target.id));
  };
  return (
    <div className="container">
      <Category categories={categories} handleUrlChange={handleUrlChange} />
      <NewsCardsList categoryUrl={url} />
    </div>
  );
};
export default Home;
