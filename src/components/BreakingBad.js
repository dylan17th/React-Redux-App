import React, { useState } from "react";
import { connect } from "react-redux";
import { dataGetter } from "../actions/index";
import BreakingBadCard from "./BreakingBadCard";
import Loader from "react-loader";
import '../style/breakingbad.css';

const BreakingBad = props => {
  
  const [name, setName] = useState("");

  const handleSelectChanges = e => {
    setName(e.target.value);
  };

  return (
    <div className='character-main-container'>
      <h2 className='find-character'>Find You're Favorite Qoutes</h2>
      <form className='form-container'>
        <label htmlFor="character">Character List:</label>
        <select className='selector' id="character" onChange={handleSelectChanges} value={name}>
          <option>Choose Character</option>
          <option value="Walter+White">Walter White</option>
          <option value="Skyler+White">Skyler White</option>
          <option value="Jesse+Pinkman">Jesse Pinkman</option>
          <option value="Hank+Schrader">Hank Schrader</option>
          <option value="Saul+Goodman">Saul Goodman</option>
          <option value="Mike+Ehrmantraut">Mike Ehrmantraut</option>
        </select>
        <button
          className='button'
          onClick={e => {
            e.preventDefault();
            props.dataGetter(name);
          }}
        >Find Qoutes</button>
      </form>
      <div className='practice'>
        {props.isLoading && (
          <Loader
            loaded={false}
            option="loading character qoutes"
            className="spinner"
          />
        )}
        {props.qoute.map(character => (
          <BreakingBadCard character={character} key={character.quote_id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    qoute: state.qoute,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { dataGetter }
)(BreakingBad);
