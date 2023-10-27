import styled, {css} from "styled-components";
// import {MyAnimation} from "../styles/animations/animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType: "primary" | "outlined"
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  //background-color: cadetblue;
    // background-color: ${props => props.color || "cadetblue"};
  // color: white;
  width: 86px;
  height: 30px;
  font-size: ${props => props.fontSize || "10px"};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #2f49ab;
  }

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "cadetblue"};
    color: ${props => props.color || "cadetblue"};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      color: #2f49ab;
      border-color: #2f49ab;
    }
  `}

  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "cadetblue"};
    color: white;
  `}
`

// export const SuperBtn = styled(StyledBtn)`
//   border-radius: 10px;
//   color: #343434;
//   background-color: #d5952c;
//   border: none;
//   &:hover {
//     animation: ${MyAnimation} 2s ease-in-out infinite;
//   }
//
// `