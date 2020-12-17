import React from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #14161f;
    font-family: "Montserrat", sans-serif;
    padding: 5px;
    margin: 10px 0;
    width: 100%;
`;
const SelectLabel = styled.label`
    padding-bottom: 5px;
    font-size: 1.1rem;
`;
const selectStyles = (error) => `
    padding: 5px 6px;
    border: 1px solid ${error ? '#d3170d' : 'rgba(127, 5, 80, 0.8)'};
    border-radius: 5px;
    font-family: inherit;
    font-size: 1rem;

`;
const SelectContainer = styled.select`
    ${props => selectStyles(props.error && props.touched)}
`;

const Select = (props) => {
    const { label, name, options, error, message, touched } = props;
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
                { error && touched && <ErrorMessage message={message} />}
            </SelectWrapper>
    )
}

export default Select;
