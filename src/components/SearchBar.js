import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 15px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 5px;
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <SearchBarWrapper>
      <FaSearch style={{ marginRight: '10px' }} />
      <SearchInput
        type="text"
        placeholder="Search widgets"
        value={value}
        onChange={onChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;