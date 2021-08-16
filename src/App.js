import "./styles.css";
import { useState } from "react";
export default function App() {
  const [books, setBooks] = useState({
    book1: "Never Split the Difference",
    book2: "Loonshots",
    ratingOfBook1: "3.5/5",
    ratingOfBook2: "5/5"
  });
  var content = {
    javascript: {
      book1: "Eloquent JavaScript",
      book2: "You Don't Know JS",
      ratingOfBook1: "4/5",
      ratingOfBook2: "3.5/5"
    },
    fiction: {
      book1: "Shiva Trilogy",
      book2: "Harry Potter and the Sorcerer's Stone",
      ratingOfBook1: "5/5",
      ratingOfBook2: "4.5/5"
    },
    business: {
      book1: "Never Split the Difference",
      book2: "Loonshots",
      ratingOfBook1: "3.5/5",
      ratingOfBook2: "5/5"
    }
  };

  function onClickHandler(event) {
    var genre = event.target.className;
    setBooks({
      book1: content[genre].book1,
      book2: content[genre].book2,
      ratingOfBook1: content[genre].ratingOfBook1,
      ratingOfBook2: content[genre].ratingOfBook2
    });
  }

  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <small>Checkout my favorite books.Select a genre to get started</small>
      <div className="div-card">
        <span
          className="javascript"
          name="javascript"
          onClick={() => onClickHandler(event)}
        >
          javascript
        </span>
        <span
          className="fiction"
          name="fiction"
          onClick={() => onClickHandler(event)}
        >
          fiction
        </span>
        <span
          className="business"
          name="business"
          onClick={() => onClickHandler(event)}
        >
          business
        </span>
      </div>
      <hr></hr>
      <div className="output-card">
        <span className="book-card-inside">{books.book1}</span>
        <span className="book-rating-card-inside">{books.ratingOfBook1}</span>
      </div>
      <div className="output-card">
        <span className="book-card-inside">{books.book2}</span>
        <span className="book-rating-card-inside">{books.ratingOfBook2}</span>
      </div>
    </div>
  );
}
