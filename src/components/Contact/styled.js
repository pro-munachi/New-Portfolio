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
        position: absolute;
        width: 100%;
        padding: 0 20px;
        .contact-form {
            max-width: 550px;
            margin: 0 auto;
            background: rgba(0,0,0,0.8);
            padding: 30px;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
        }
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