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
    top: 30%;
    .social {
        margin-top: 3%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        a {
            margin: -10px;
            padding: 0;
        img {
            width: 40%;
            margin: -20px;
            :hover {
                width: 45%;
            }
        }
        }
    }
    h1{
        font-weight: 900;
        font-size: 45px;
        color: #f3dbcf;
        @media (max-width: 800px) {
            font-size: 30px;
        }
        
    }
    p {
        font-weight: 500;
        font-size: 30px;
        color: #aac9ce;
        @media (max-width: 800px) {
            font-size: 20px;
        }
    }
    div {
        display: flex;
        justify-content: center;
        button{
            width: 150px;
            margin: 20px;
            height: 60px;
            font-size: 18px;
            font-weight: 500;
            background: #aac9ce;
            border: none;
            outline: none;
            color: white;
            :hover {
                background: silver;
                width: 140px;
            }
            @media (max-width: 750px) {
                width: 100px;
                font-size: 12px;
                height: 40px;
            }
        }
        .but{
            width: 150px;
            margin: 20px;
            height: 60px;
            font-size: 18px;
            font-weight: 500;
            border: none;
            outline: none;
            background: #f3dbcf;
            color: black;
            @media (max-width: 750px) {
                width: 100px;
                font-size: 12px;
                height: 40px;
            }
        }
    }
}
`