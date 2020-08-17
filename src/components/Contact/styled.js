import styled from 'styled-components'


export const Div = styled.div `

`

export const Contacts = styled.div `
.contact {
    .side {
        background: gray;
        width: 25%;
        text-align: center;
        .info {
            width: 90%;
            display:flex;
            justify-content: space-evenly;
            flex-direction: column;
            .location {
                display: flex;
                text-align: left;
                font-size: 14.5px;
                align-items: center;
                margin-left: 19%;
                img {
                    width: 10%;
                }
            }
            .mail {
                display: flex;
                width: 50%;
                text-align: left;
                font-size: 13.5px;
                align-items: center;
                margin-left: 19%;
                img {
                    width: 10%;
                }
            }
            .mobile {
                display: flex;
                width: 50%;
                text-align: left;
                font-size: 13.5px;
                align-items: center;
                margin-left: 19%;
                img {
                    width: 10%;
                }
            }
        }
        .social {
            width: 80%;
            a {
                text-decoration: none;
                margin: 8px;
            }
            img {
                width: 6%;
            }
        }
    }
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
        .container .row100 .inputBox input:focus ~ .line,
        .container .row100 .inputBox input:valid ~ .line {
            height: 100%;
        }
        .container .row100 .inputBox textarea:focus + .text,
        .container .row100 .inputBox textarea:valid + .text{
            top: -35px;
            left: -10px;
        }
        .container .row100 .inputBox textarea:focus ~ .line,
        .container .row100 .inputBox textarea:valid ~ .line {
            height: 100%;
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
                grid-template-columns: repeat(autofit,minmax(300px,1fr));
                .col {
                    position: relative;
                    width: 100%;
                    padding: 0 10px;
                    margin: 30px 0 10px;
                    transition: 0.2s;
                    input[type='submit'] {
                        border: none;
                        padding: 7px 35px;
                        cursor: pointer;
                        outline: none;
                        background: #45f3ff;
                        color: #000;
                        font-size: 18px;
                        border-radius: 2px;
                    }
                }
                .inputBox.textarea {
                    position: relative;
                    width: 100%;
                    height: 100px;
                    padding: 10px 0;
                    textarea {
                        height: 100%;
                        resize: none;
                    }
                }
                .inputBox {
                    position: relative;
                    width: 100%;
                    height: 40px;
                    color: #45f3ff;
                    input,
                    textarea {
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
                        background: #45f3ff;
                        transition: 0.5s;
                        border-radius: 2px;
                        pointer-events: none;
                    }
                }
            }
        }
    }
}
`