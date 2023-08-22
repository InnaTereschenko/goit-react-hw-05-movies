import PropTypes from 'prop-types';
import { SearchForm, InputSearch, ButtonSearch } from "./Searchbar.styles";
import { useState } from "react";

const Searchbar = ({onSubmit, query}) => {
    const[value, setValue] = useState(query || '');

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(value);
        console.log(value);
        setValue('');
    }
    
      const handleInputChange = evt => {
    setValue(evt.target.value);
  };
  
    return (
        <SearchForm onSubmit={handleFormSubmit}>
            <ButtonSearch type="submit"></ButtonSearch>
            <InputSearch  type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={handleInputChange}/>
        </SearchForm>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
      value: PropTypes.string,
  onChange: PropTypes.func,
};

// Searchbar.propTypes = {
// 
// };

export default Searchbar;






