import { useState } from 'react';
import { FaList, FaTh } from 'react-icons/fa';

import classes from './SearchBar.module.css';

function SearchBar(props) {
  const [searchParams, setSearchParams] = useState(props.defaultParams); 
  const searchTypeOption = props.searchTypeOption; 
  // console.log("searchTypeOption", searchTypeOption);

  function onClickHandler(name, value){
    let newPropsParams = Object.assign({}, searchParams);
    newPropsParams[name] = value;
    setSearchParams(newPropsParams);
    props.updateDefaultParam(newPropsParams); 
  }

  function onChangeHandler(element){
    let newPropsParams = Object.assign({}, searchParams);
    newPropsParams[element.target.name] = element.target.value;
    setSearchParams(newPropsParams);
    props.updateDefaultParam(newPropsParams); 
  }


  if(!searchParams) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return <div>
    <form className={classes.form}>
        <div className={classes.row}>
            <div className={classes.actions}>
                <button type="button" name='allChars' id='fabType1' className={searchParams.allChars ? classes.active :''} onClick={() => onClickHandler('allChars', true)}>
                    All
                </button>
                <button type="button" name='allChars' id='fabType2' className={!searchParams.allChars ? classes.active :''} onClick={() => onClickHandler('allChars', false)}>
                    Favorites
                </button>
            </div>
        </div>
        <div className={classes.row}>
            <div className={classes.control}>
                <input type='text' placeholder='Search' name="searchValue" id='search' onChange={onChangeHandler}/>
            </div>
            <div className={classes.control}>
                <select placeholder='Type' name="searchType" id='type'  onChange={onChangeHandler}>
                  <option></option>
                  {searchTypeOption.map((row) => <option key={row} value={row}>{row}</option>)}
                </select>
            </div>
            <div className={classes.actions}>
                <button type="button" name="viewTypeList" value='1' id="listMode" className={searchParams.viewTypeList ? classes.active :''} onClick={() => onClickHandler('viewTypeList', true)}>
                    <FaList />
                </button>
                <button type='button' name="viewTypeList"  value='0' id="gridMode" className={!searchParams.viewTypeList ? classes.active :''} onClick={() => onClickHandler('viewTypeList', false)}>
                    <FaTh />
                </button>
            </div>
        </div>
    </form>
  </div>
}

export default SearchBar;