import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  color: #777778;
  overflow: auto;
  height: 100vh;
  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
  .space {
    height: 250px;
    color: black;
  }
  h2 {
    font-size: 27px;
    color: white;
  }
  li {
    font-size: 18px;
    font-style: italic;
  }
  .resume {
    background: #101011;
    width: 80%;
    margin: auto;
    margin-top: 5%;
    .info {
      width: 88%;
      margin: auto;

      .header {
        border-bottom: 1px solid white;
        text-align: center;
        padding-top: 15px;
        h1 {
          font-style: italic;
          color: white;
        }
      }
      .tech {
        font-size: 18px;
        border-bottom: 1px solid white;
        h2 {
          color: white;
        }
        p {
          font-style: italic;
        }
      }
      .experience {
        .map {
          border-bottom: 1px solid white;
          padding-bottom: 25px;
        }
      }
      .education {
        padding-bottom: 45px;
        a {
          color: white;
        }
      }
    }
  }
`
