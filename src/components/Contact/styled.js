import styled from 'styled-components'


export const Div = styled.div `

`

export const Contacts = styled.div `
box-sizing: border-box;
overflow: hidden;
.contact {
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
      flex-wrap: wrap;
      justify-content: space-evenly;
  }
  .container {
      width: 35%;
      position: relative;
      left: 5%;
      margin-top: 5%;
      z-index: 1000;
      @media (max-width: 1000px) {
        margin-top: 0;
        left: 0;
        width: 90%;
        z-index: -1;
  }
      .contactinfo {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          background: #0f3959;
          box-sizing: border-box;
          box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
          border-radius: 0.5em;
          .con {
              h2 {
                  color: white;
                  font-size: 24px;
                  font-weight: 500;
                  text-align: center;
              }
              ul {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  li {
                      list-style: none;
                      display: flex;
                      margin: 20px 0;
                      cursor: pointer;
                      align-items:flex-start;
                      :hover span:nth-child(1) img,
                      :hover span:nth-child(2) {
                          opacity: 1;
                      }
                      span:nth-child(1) {
                          width: 30px;
                          min-width: 30px;
                          img {
                              max-width: 100%;
                              filter: invert(1);
                              opacity: 0.5;
                          }
                      }
                      span:nth-child(2) {
                          color: #fff;
                          margin-left: 10px;
                          font-weight: 300;
                          opacity: 0.5;
                      }
                  }
              }  
          }
          .sci {
                  display: flex;
                  flex-direction: row;
                  li {
                      list-style: none;
                      margin: 10px;
                      a {
                          text-decoration: none;
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
      }
  }
    
    .for {
        position: relative;
        height: 520px;
        padding-right: 20px;
        top: 20%;
        right: 6%;
        border: 2px solid #0f3959;
        border-radius: 25px;
        width: 90%;
        @media (max-width: 1000px) {
            border: none;
            width: 100%;
            right: 0;
  }
        .cont {
            position: relative;
            left: 10%;
            text-align: center;
            @media (max-width: 1000px) {
                left: 0;
                }
            h1 {
                color: #0f3959;
            }
            form {
                .input {
                    margin: 20px;
                    input {
                        width: 80%;
                        height: 45px;
                        border: 2px solid #0f3959;
                        border-radius: 0.5em;
                        outline: none;
                        @media (max-width: 1000px) {
                            width: 90%;
                        }
                        :focus
                         {

                        }
                    }
                }
                .text {
                    margin: 20px;
                    textarea {
                        width: 80%;
                        height: 100px;
                        resize: none;
                        outline: none;
                        border: 2px solid #0f3959;
                        @media (max-width: 1000px) {
                            width: 90%;
                          }
                    }
                }
                .sub {
                    margin: 20px;
                    input {
                        width: 13%;
                        height: 40px;
                        background: #0f3959;
                        color: white;
                        font-size: 14.5px;
                        border-radius: 5px;
                        @media (max-width: 1000px) {
                            width: 30%;
                          }
                    }
                }
            }
        }
    }
}
`
//img {
    //filter: invert(1);
    //opacity: 0.5;
    //:hover {
       // opacity: 1;
    //}
//}