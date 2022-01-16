import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import "./Phonetic.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    //console.log(response.data.meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    //api dictionary from https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000018cc49d4d63ec48c9995a3261ea6db6ad";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word would you like to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">word must be spelled correctly & in English</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
