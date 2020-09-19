import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Category = ({ categories, handleUrlChange }) => {
  const activeStyle = { border: "1px solid lightcoral" };
  let categoryNames = [...categories.keys()];
  return (
    <Navbar bg="light" sticky="top" className="justify-content-center">
      <Nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {categoryNames.map((value) => {
          return (
            <Nav.Item className="navItem">
              <Nav.Link
                id={value}
                onClick={handleUrlChange}
                style={{
                  color: "#f08080",
                  borderRadius: "50px",
                  border: "1px solid #dbe9f4",
                  margin: "10px",
                  textAlign: "center",
                }}
              >
                {value}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  );
};
export default Category;
