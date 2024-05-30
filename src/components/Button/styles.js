import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`

font-family: 'Open Sans';
font-style: normal;
font-size:18px;
line-height:25px;
color:white;
text-decoration:none;


background:#565656;
border-radius:22px;
position:relative;
padding:2px 12px;
min-width: 120px;
width:100%;
margin:10px;

${({variant}) => variant !== "primary" && css`
min-width:167px;
height:33px;
background:#e4105d;


&:hover {
    opacity:0.6;
    cursor:pointer;
}

&::after {
    content: '';
    position:absolute;
    border:1px solid #e4105d;
    top:-5px;
    left:-6px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border-radius:22px;
}

`}
`
