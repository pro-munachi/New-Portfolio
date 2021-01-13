import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  background: black;
  position: relative;
  color: #777778;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
`

export const Containers = styled.div`
  width: 300px;
  height: 250px;
  background: #101011;
  margin-top: 5%;
  margin-right: 2%;
  @media (max-width: 1251px) {
    margin: auto;
    margin-top: 8%;
  }

  :hover {
    width: 307px;
    height: 257px;
    transition: 0.5s ease-in-out;
  }

  .card {
    width: 90%;
    height: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      h2 {
        color: white;
      }
      .tech {
        font-size: 14px;
      }
    }
    .host {
      display: flex;
      .p {
        margin: 20px;
        a {
          text-decoration: none;
          color: #777778;
          font-size: 16px;
          :hover {
            color: white;
          }
        }
      }
      p {
        margin: 20px 0;
        a {
          text-decoration: none;
          color: #777778;
          font-size: 16px;
          :hover {
            color: white;
          }
        }
      }
    }
  }
`
