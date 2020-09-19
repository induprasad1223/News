import { createInstance } from "react-async";
import React from "react";
import CardItem from "./Card";
import { CardDeck } from "react-bootstrap";

const loadNews = async ({ url }) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
};

const NewsCardsList = ({ categoryUrl }) => {
  const NewsCards = createInstance({ promiseFn: loadNews }, "NewsCards");
  return (
    <CardDeck
      style={{
        justifyContent: "space-evenly",
      }}
    >
      <NewsCards url={categoryUrl}>
        <NewsCards.Fulfilled>
          {(data) => {
            return data.articles.map((news) => (
              <div key={news.url} style={{ display: "flex", padding: "1em" }}>
                <CardItem news={news} />
              </div>
            ));
          }}
        </NewsCards.Fulfilled>
      </NewsCards>
    </CardDeck>
  );
};
export default NewsCardsList;
