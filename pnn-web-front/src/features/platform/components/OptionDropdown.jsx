import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h4 {
    font-weight: bold;
    margin-bottom: 8px;
  }

  select {
    padding-left: 20px;
    padding-right: 40px;
    font-size: 14px;
    width: 100%;
    height: 50px;
    border: solid 1px #dbdbdb;
    border-radius: 4px;

    &:hover {
      border: solid 0.5px #dbdbdb;
    }

    &:focus {
      border: solid 1.5px #222222;
      outline: none;
    }
  }
`;

const Dropdown = ({ label, options, onChange, selectedValue }) => {
  return (
    <DropdownContainer>
      <h4>{label}</h4>
      <select onChange={onChange} value={selectedValue}>
        <option value="" disabled>
          선택
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </DropdownContainer>
  );
};

export default Dropdown;
