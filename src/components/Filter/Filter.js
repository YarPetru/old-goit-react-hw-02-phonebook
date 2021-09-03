import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Filter = ({ value, onChange }) => {
  const inputId = shortid.generate();
  const labeltId = shortid.generate();
  return (
    <>
      <div>
        <label htmlFor={labeltId}> Find contacts by name</label>
        <input id={inputId} type="text" value={value} onChange={onChange} />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
