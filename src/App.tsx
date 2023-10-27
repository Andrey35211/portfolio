import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled"
import {myTheme} from "./styles/Theme.styled";
import {Headline} from "./components/Headline.styled";
import {ContentText} from "./components/ContentText.styled";
import ImgURL from "./assets/Rectangle.png"
import {Picture} from "./components/Picture.styled";

function App() {
    return (
        <div className="App">
            <Box>
                <Card>
                    <Picture src={ImgURL}/>
                    <Headline>Headline</Headline>
                    <ContentText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                        venen.</ContentText>
                    <BtnContainer>
                        <StyledBtn color={myTheme.colors.primary} btnType={"primary"} fontSize="10px">See
                            more</StyledBtn>
                        <StyledBtn color={myTheme.colors.primary} btnType={"outlined"} fontSize="10px">Save</StyledBtn>
                    </BtnContainer>
                </Card>
            </Box>
        </div>
    );
}

export default App;

const BtnContainer = styled.div`
  display: flex;
  gap: 12px;
`

const Card = styled.div`
  padding: 10px;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 15px;
  background: #FFF;
  gap: 20px;

  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.10);
  
  ${Headline} {
    margin-left: 10px;
  }
  ${ContentText} {
    margin-left: 10px;
  }
  ${BtnContainer} {
    margin-left: 10px;
  }
`

const Box = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 20px;

  button {
    cursor: pointer;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`

