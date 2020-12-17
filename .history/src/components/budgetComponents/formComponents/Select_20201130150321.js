import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #14161f;
    font-family: "Montserrat", sans-serif;
    padding: 5px;
    margin: 10px 0;
`;
const SelectLabel = styled.label`
    padding-bottom: 5px;
    font-size: 1.1rem;
`;
const SelectContainer = styled.select`
    border: 1px solid rgba(127, 5, 80, 0.8);
    border-radius: 5px;
    font-size: 1rem;
    padding: 5px 6px;
`;
const Input = (props) => {
    const { label, name, options } = props;
    return (
        <SelectWrapper>
            <SelectLabel>{label}:</SelectLabel>
            <SelectContainer {...props} id={name}>
                {options.map(option => {
                    return (
                        <option key={option.id} value={option.value}>{option.label} {option.title}</option>
                    )
                })}
            </SelectContainer>

        </SelectWrapper>
    )
}

export default Input;
