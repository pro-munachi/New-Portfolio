import styled, {css} from 'styled-components'

const width = '100%', height = '300px'

export const Container = styled.div `
border-bottom: 1px solid #f3dbcf;
position: relative;
width: ${width};
height: ${height};
overflow: hidden;
box-sizing: border-box;
`
export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  outline: none;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

export const Child = styled.div `
  text-align: center;
  width: 70%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
img {
    width: 10%;
    @media (max-width: 980px) {
    width: 20%;
  }
}
h1 {
  @media (max-width: 980px) {
    font-size: 19px;
  }
}
`
