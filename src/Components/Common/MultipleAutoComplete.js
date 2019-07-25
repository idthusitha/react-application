import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

const MultipleAutoComplete = ({ labelKey, options, placeholder,onChange, defaultInputValue}) => {

  return (
    <Typeahead
      clearButton
      
      id={labelKey}
      defaultInputValue={defaultInputValue}
      multiple
      maxResults={500}
      caseSensitive={false}
      options={options}
      placeholder={placeholder}
      onChange={onChange}      
    />
  );
};
export default MultipleAutoComplete;