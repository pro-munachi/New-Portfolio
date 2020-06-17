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
        font-size: 30px;
        color: #f3dbcf;
        :hover{
            text-shadow: 2px 2px #aac9ce;
        }
        
    }
    p {
        font-weight: 500;
        font-size: 22px;
        color: #aac9ce;
        :hover{
            text-shadow: 2px 2px #f3dbcf;
        }
    }
    button{
        width: 10%;
        padding: 5px;
        font-size: 15px;
        background: #f3dbcf;
        border-radius: .5em;
        @media (max-width: 1000px) {
            width: 25%;
        }
        @media (max-width: 650px) {
            width: 30%;
        }
    }
}
`