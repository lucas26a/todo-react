import styled from "styled-components"
export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 45rem;
  margin-inline: auto;
  color: var(--bg);
  padding-inline: 0.5rem 0;
  margin-block: .25rem;
  background: #eee;
  
  li {
    flex: 1;
    padding: 3px 4px;
    text-decoration: ${({completed}) => completed ? "line-through" : "none"};
    opacity: ${({completed}) => completed ? ".5" : "1"};
    word-break: break-all;
  }
`
export const StyledButton = styled.button`
display: grid;
place-items: center;
font-size: 20px;
padding: 4px 6px; 
border: none;
color: ${({completed}) => completed ? "var(--completed)" : "var(--remove)"};
cursor: pointer;

& > * {
  opacity: .9;
}
&:hover > * {
  opacity: 1;
}
`