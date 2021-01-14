import styled from 'styled-components'

export const Container = styled.div`
  color: #777778;
  height: auto;
  margin: auto;
  text-align: center;
  .contact {
    margin-top: 10%;
    @media (max-width: 1000px) {
      margin-top: 2%;
    }
    h1 {
      font-size: 40px;
    }
    form {
      display: flex;
      flex-direction: column;
      label {
        margin: 20px;
        input {
          width: 450px;
          height: 45px;
          border: 2px solid #777778;
          border-radius: 0.5em;
          outline: none;
          padding-left: 7px;
          ::placeholder {
            font-size: 15px;
            font-style: italic;
          }
        }
        textarea {
          width: 450px;
          height: 100px;
          resize: none;
          outline: none;
          border: 2px solid #777778;
          padding-left: 7px;
          ::placeholder {
            font-size: 15px;
            font-style: italic;
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
