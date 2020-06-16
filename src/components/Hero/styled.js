import styled from 'styled-components'

export const Div = styled.div `
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
height: ${props => props.height};
width: 100%;
overflow: hidden;
text-align: center;
color: #f3dbcf;
div {
    position: relative;
    top: 40%;
    h1{
        font-weight: 900;
        font-size: 40px;
    }
    p {
        font-weight: 500;
        font-size: 30px;
    }
}
`