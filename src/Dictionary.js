import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const PEXELS_API_KEY =
  "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
const PEXELS_API_URL = "https://api.pexels.com/v1/search";

const suggestedWords = [
  "hello",
  "world",
  "laptop",
  "dictionary",
  "fire",
  "television",
  "wine",
  "beer",
  "car",
];

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (keyword) {
      search();
      fetchPhotos();
    }
  }, [keyword]);

  const search = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/${keyword}`);
      console.log("API Response:", response.data);
      setResults(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults(null);
      setIsLoading(false);
    }
  };

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(PEXELS_API_URL, {
        headers: { Authorization: PEXELS_API_KEY },
        params: { query: keyword, per_page: 9 },
      });
      console.log("Pexels API Response:", response.data);
      setPhotos(response.data.photos);
    } catch (error) {
      console.error("Error fetching photos:", error);
      setPhotos([]);
    }
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSuggestedWordClick = (word) => {
    setKeyword(word);
  };

  return (
    <div className="Dictionary">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <input
          type="text"
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
        />
        <button type="submit">
          Search <div className="loader"> </div>{" "}
        </button>
      </form>

      <div className="SuggestedWords">
        <h4>📖 Suggested Words:</h4>
        <br />
        <div className="ButtonGroup">
          {suggestedWords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleSuggestedWordClick(word)}
              className="SuggestedWordButton"
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {isLoading && <p>Loading...</p>}
      {results && <Results results={results} />}

      {results && (
        <div className="PhotosContainer">
          <h4>Photos related to "{keyword}" 📷</h4>
          <div className="PhotoGrid">
            {photos.map((photo) => (
              <div key={photo.id} className="PhotoBox">
                <img
                  src={photo.src.medium}
                  alt={photo.photographer}
                  className="Photo"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
