import styled from 'styled-components'

export const Div = styled.div `
background: #0f3959;
.sci {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
        list-style: none;
        margin: 20px;
        a {
            text-decoration: none;
            text-align: center;
            img {
                filter: invert(1);
                opacity: 0.5;
                :hover {
                    opacity: 1;
                }
            }
        }
    }
}
`