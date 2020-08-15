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
        display: flex;
        justify-content: center;
        align-items: center;
        background: #03080a;
        .container .row100 .inputBox input:focus + .text,
        .container .row100 .inputBox input:valid + .text{
            top: -35px;
            left: -10px;
        }
        .container {
            width: 80%;
            padding: 20px;
            h2 {
                width: 100%;
                color: #45f3ff;
                font-size: 36px;
                text-align: center;
                margin-bottom: 10px;
            }
            .row100 {
                position: relative;
                width: 100%;
                display: grid;
                grid-template-columns: repeat(autofit,minimax(300px,1fr));
                .col {
                    position: relative;
                    width: 100%;
                    padding: 0 10px;
                    margin: 30px 0 10px;
                    transition: 0.2s;
                }
                .inputBox {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    color: #45f3ff;
                    input {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: transparent;
                        box-shadow: none;
                        border: none;
                        outline: none;
                        font-size: 18px;
                        padding: 0 10px;
                        z-index: 1;
                        color: #000;
                    }
                    .text {
                        position: absolute;
                        top: 0;
                        left: 0;
                        line-height: 40px;
                        font-size: 18px;
                        padding: 0 10px;
                        display: block;
                        transition: 0.5s;
                        pointer-events: none;
                    }
                    .line {
                        position: absolute;
                        bottom: 0;
                        display: block;
                        width: 100%;
                        height: 2px;
                        
                    }
                }
            }
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