import React from "react";
import { Card } from "react-bootstrap";
import "./Card.css";

const CardItem = ({ news }) => {
  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "0px 0px 5px 5px #ededed",
      }}
    >
      <Card.Img variant="top" src={news.urlToImage} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text className="cardBody">{news.description}</Card.Text>
        <Card.Link href={news.url} target="_blank">
          Read more..
        </Card.Link>
      </Card.Body>
      <Card.Footer>
        <small>{news.author}</small>
        <br />
        <small>{news.publishedAt}</small>
      </Card.Footer>
    </Card>
  );
};

export default CardItem;
