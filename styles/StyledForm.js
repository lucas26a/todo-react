import styled from "styled-components";
import { StyledButton } from "./StyledItem";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  
  & > div {
    display: flex;
    width: 100%;
    max-width: 45rem;

    input {
      width: 100%;
      padding: 3px 6px;
      font-size: 28px;
      border: none;

      &:focus {
        outline: none;
        background: #eee;
      }
    }
  }
  select {
    color: var(--bg);
    max-width: max-content;
    height: 100%;
    text-align: center;
    font-weight: bold;
    border: none;
    outline: none;
    margin-left: 4px;
    cursor: pointer;
    letter-spacing: 1px;

    *:hover {
      border: 1px 0 0 0 solid #eee;
    }
  }
  
`;
export const StyledFormButton = styled(StyledButton)`
  color: var(--completed);
  font-size: 28px;

  &:hover {
    background: var(--completed);;
    color: #eee;
  }
`