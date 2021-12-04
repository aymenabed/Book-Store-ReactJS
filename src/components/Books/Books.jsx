// Node Modules Files
import React, { useState } from "react";
import { Grid, InputAdornment, Input } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";
import SearchIcon from "@material-ui/icons/Search";
// Local Files
import Book from "./Book/Book.js";
import useStyles from "./styles";
// CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Images
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";

const Books = ({ books }) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className={classes.content} >
      <div className={classes.toolbar} />
      <Carousel fade autoPlay>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      <div className={classes.searchs}>
        <Input
          className={classes.searchb}
          type="text"
          placeholder="Search Book..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </div>

      <Grid className={classes.content} container justifyContent="center" spacing={5}>
        {books
          .filter((book) => {
            if (searchTerm === "") {
              return book;
            } else if (
              book.title
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            ) {
              return book;
            }
          })
          .map((book) => (
            <Grid item key={book.isbn} xs={12} sm={6} md={4} lg={3} id="pro">
              <Book book={book} />
            </Grid>
          ))}
      </Grid>
    </main>
  );
};

export default Books;
