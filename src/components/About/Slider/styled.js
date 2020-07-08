import styled, {css} from 'styled-components'

const width = '100%', height = '300px'

export const Container = styled.div `
border: 1px solid #f3dbcf;
position: relative;
width: ${width};
height: ${height};
overflow: hidden;
background: #f3dbcf;
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
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

export const Child = styled.div `
text-align: center;
img {
    width: 10%;
}
`
