import styled from 'styled-components'

export const Container = styled.div`
  color: #777778;
  height: 100vh;
  margin: auto;
  text-align: center;
  .contact {
    margin-top: 5%;
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
        }
        textarea {
          width: 450px;
          height: 100px;
          resize: none;
          outline: none;
          border: 2px solid #777778;
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
