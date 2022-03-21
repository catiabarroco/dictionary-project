import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pexelsApiKey = `563492ad6f9170000100000102552732021a4596af90d1768b2fd7ff`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9
    `;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Dictionary</h1>
          <div className="row">
            <div className="col-4 padding0">
              <p>Search for a word: </p>
            </div>
            <div className="col  padding0">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  autoFocus={true}
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
              </form>
            </div>
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
