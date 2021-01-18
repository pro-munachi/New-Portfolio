import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  color: #777778;
  font-family: 'Helvetica Neue';
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
    @media (max-width: 1000px) {
      font-size: 24px;
    }
  }
  li {
    font-size: 18px;
    font-style: italic;
    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
  .resume {
    background: #101011;
    width: 85%;
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
          @media (max-width: 1000px) {
            font-size: 15px;
          }
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
