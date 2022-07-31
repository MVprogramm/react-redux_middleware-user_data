import React, { useState } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as usersActions from "./users.actions.js";
import "./searchField.scss";

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState("");
  
  const handleInput = (event) => {
    setUserName(event.target.value);
  }

  const handleShow = () => {
    fetchUserData(userName);
  }

  return (
    <div className="name-form">
      <input 
        type="text" 
        className="name-form__input"
        value={userName}
        onChange={handleInput}
      />
      <button 
        className="name-form__btn btn"
        onClick={handleShow}
      >
        Show
      </button>
    </div>
  )
}

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData
}

export default connect(null, mapDispatch)(SearchField);