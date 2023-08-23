import PropTypes from 'prop-types';
import { SearchForm, InputSearch, ButtonSearch } from "./Searchbar.styles";
import { useState, useEffect } from "react";

const Searchbar = ({onSubmit, query}) => {
    // const[value, setValue] = useState(query || '');
  
  const [value, setValue] = useState('');
  const [searchText, setSearchText] = useState('');

    useEffect(() => {
    setSearchText(value); // Оновлюємо searchText при зміні value
    }, [value]);
  
    const handleInputChange = evt => {
    setValue(evt.target.value);
  };
  
  
    const handleFormSubmit = (evt) => {
      evt.preventDefault();
       if (!searchText.trim()) {
      alert('Fill in the request');
      return;
    }
      setSearchText(searchText.trim());
        onSubmit(searchText.trim());
        // console.log(value);
        setValue('');
    }
    
    
  
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
  
};



export default Searchbar;






