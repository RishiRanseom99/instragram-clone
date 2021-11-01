import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 54px;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  overflow-x: hidden;
`;
export const InstagramLogoContainer = styled.div`
  margin-top: 6px;
  width: max-content;
  height: fit-content;
  cursor: pointer;
`;

export const SearchBoxWrapper = styled.div`
flex-grow: 1;
display: none;
justify-content: center;
@media (min-width: 600px) {
    display: flex;
    
  } 
`
export const SearchBoxContent = styled.div`
width: 220px;
height: fit-content;
padding: 5px 4px;
border: 1px solid lightgrey;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
`
export const SearchText = styled.p`
margin: 0px;
margin-left: 4px;
color: #8e8e8e;
font-size: 16px;
`
export const SearchBoxInput = styled.input`
border: none;
font-size: 16px;
outline: none;
width: 220px;
`
export const HeaderButtonContainer = styled.div`
display: flex;
align-content: center;
width: fit-content;
margin-left: auto;
// height: 20px;

`
export const SvgIconWrapper = styled.button`
cursor: pointer;
outline: none;
border: none;
background-color: inherit;
padding: 4px 8px;
// background-color: red;
width: fit-content;
`
