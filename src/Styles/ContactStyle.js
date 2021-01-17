import styled from 'styled-components'

export const Container = styled.div`
  color: #777778;
  height: auto;
  margin: auto;
  width: 50%;
  height: 100vh;
  text-align: center;
  overflow: auto;
  padding-bottom: 65px;
  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
  .contact {
    margin-top: 10%;
    width: 85%;
    @media (max-width: 1000px) {
      margin-top: 2%;
      margin: auto;
    }
    h1 {
      font-size: 40px;
      @media (max-width: 700px) {
        font-size: 30px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        margin: 20px;
        input {
          width: 100%;
          height: 45px;
          border: 2px solid #777778;
          border-radius: 0.5em;
          outline: none;
          padding-left: 7px;
          ::placeholder {
            font-size: 15px;
            font-style: italic;
            @media (max-width: 700px) {
              font-size: 12px;
            }
          }
          @media (max-width: 700px) {
            height: 30px;
          }
        }
        textarea {
          width: 100%;
          height: 100px;
          resize: none;
          outline: none;
          border: 2px solid #777778;
          padding-left: 7px;
          ::placeholder {
            font-size: 15px;
            font-style: italic;
            @media (max-width: 700px) {
              font-size: 12px;
            }
          }
          @media (max-width: 700px) {
            height: 70px;
          }
        }
        .sub {
          width: 120px;
          height: 40px;
          background: #101011;
          color: white;
          font-size: 14.5px;
          border-radius: 5px;
        }
      }
    }
  }
`
