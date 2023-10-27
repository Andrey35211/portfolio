import styled from "styled-components";

export const Picture = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'desert',
}))`
  width: 280px;
  height: 170px;
`