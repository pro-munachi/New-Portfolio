import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  background: black;
  position: relative;
  color: #777778;
  height: auto;
  overflow: auto;
  overscroll-behavior-y: contain;
  display: flex;
  flex-wrap: wrap;
`

export const Containers = styled.div`
  width: 300px;
  height: 250px;
  background: #101011;
  margin: auto;

  :hover {
    width: 305px;
    height: 255px;
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
          color: white;
          font-size: 16px;
        }
      }
      p {
        margin: 20px 0;
        a {
          text-decoration: none;
          color: white;
          font-size: 16px;
        }
      }
    }
  }
`
