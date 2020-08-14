import styled from 'styled-components'


export const Div = styled.div `

`

export const Contacts = styled.div `
.contact {
    img{
        width: 2%;
    }
    .head {
        text-align: center;
        h1 {
            font-size: 45px;
        }
    }
    .for {
        
    }
    .flex {
        display: flex;
        justify-content: space-evenly;
        .word {
            width: 50%;
            border: 1px solid black;
            .h {
                h1 {
                    font-size: 30px;
                }
            }
            .email {
                display: flex;
                justify-content: space-evenly;
            }
            .add {
                display: flex;
                justify-content: space-between;
            }
        }
        .map {
           width: 50%; 
        }
    }
}
`