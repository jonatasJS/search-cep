import styled from "styled-components";

export const TotalBox = styled.div`
  width: 40%;
  height: auto;

  padding: 10px 30px;
  background: #fff;
  max-width: 360px;
  margin: 100px 0;
  padding: 50px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  @media screen and (max-width: 900px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 400px) {
    width: 50%;
  }
`;

export const CepForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 20px;
    padding: 10px;
    font-family: "Ubuntu", "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    -webkit-appearance: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const BoxCheckbox = styled.div`
  margin-top: 10px;
  /* display: grid; */

  button {
    margin-top: 20px;
  }

  label {
    font-size: 12px;
    font-weight: 300;
  }
`;

export const CepButton = styled.button`
  background: rgb(250, 113, 136);
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 10px 30px;
  font-weight: 600;
  font-size: 15px;
  color: #fff;

  &:hover,
  &:focus {
    background: rgb(230, 106, 127);
  }

  @media screen and (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

export const ResultTitle = styled.h2`
  /* display: none; */
  transition: all 0.5s linear;
`;

export const ResultCEP = styled.div`
  /* display: none; */
  justify-content: center;
  align-items: start;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 50px 0 50px;
  transition: all 0.5s linear;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  div:last-child {
    margin-bottom: 25px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
  }

  div label {
    margin-top: 20px;
  }

  div input {
    margin-top: 0px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: repeat(1, 1fr);

    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Loader = styled.div`
  margin-top: 30px;
  height: auto;
  width: 20%;
  text-align: center;
  padding: 1em;
  display: none;
  vertical-align: top;
  transition: all 0.5s linear;

  svg path,
  svg rect {
    fill: #ff6700;
  }
`;
