import styled from 'styled-components'

export const Div = styled.footer `
background: #0f3959;
display: flex;
justify-content: center;
flex-direction: column;
.word {
    color: white;
    text-align: center;
    p {
        padding-bottom: 55px;
        }
    }
}
.sci {
    display: flex;
    flex-direction: row;
    justify-content: center;
        a {
            text-decoration: none;
            text-align: center;
            margin: 20px;
            @media (max-width: 1000px) {
                margin: 15px;
            }
            img {
                filter: invert(1);
                opacity: 0.5;
                :hover {
                    opacity: 1;
                }
        }
    }
`