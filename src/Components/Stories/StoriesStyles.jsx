import styled from 'styled-components'

export const StoriesContainer = styled.div`
// height: 120px;
overflow-x: scroll;
margin: 8px;
height: fit-content;
border: 1px solid lightgrey;
// scrollbar-width: none;
-ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    backg
    round: transparent;  /* Optional: just make scrollbar invisible */
}


`;

export const StoriesWrapper = styled.div`
width: fit-content;
height: 100%;
padding: 4px;
// background-color: grey;
display: inline-flex;
// overflow-x: scroll;
`
export const StoryItemWrapper = styled.div`
margin: 4px 4px 0px 4px;
width: fit-content;
padding: 4px;
height: fit-content;
display: flex;
flex-direction: column;
align-items: center;
`
export const StoryItem = styled.img`
width: 56px;
height: 56px;
padding: 4px;
border-radius: 50%;
// background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
border: 1px solid purple;
`
export const LoadingScreen = styled.div`
width: 56px;
height: 56px;
padding: 4px;
border-radius: 50%;
background-color: lightgrey;
opacity: 50%;
border: 1px solid purple;
animation-name: loader;
animation-duration: 2s;
@keyframes loader {
    0%   {opacity: 40%;}
    25%  {opacity: 70%;}
    50%  {opacity: 90%;}
    100% {opacity: 60%;}
  }

`
export const StoryItemCaption = styled.p`
white-space: nowrap; 
width: 70px; 
padding-top: 4px;
overflow: hidden;
text-align: center;
text-overflow: ellipsis; 
font-size: 12px;
margin: 0px;
color: #353535;
`
 export const StoriesButtonWrapper = styled.div`
 display: flex;
 justify-content: space-between;

 `
export const StoriesButton = styled.button`
`