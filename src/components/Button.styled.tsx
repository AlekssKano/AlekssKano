import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";
export const StyledBtn = styled.button`
    border: none;
    background-color: blueviolet;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: aquamarine;
    }

    &:last-child {
        background-color: greenyellow;
    }
`
export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: salmon;
    color: aqua;
    &:hover{ animation: ${MyAnimation} 2s ease-in-out infinite;}
`