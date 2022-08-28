import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  TotalBox,
  CepForm,
  BoxCheckbox,
  CepButton,
  ResultTitle,
  ResultCEP,
  Loader,
} from "../styles/StyleHome";

interface ResultTypes {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd: string;
}

const Home: NextPage = () => {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({} as ResultTypes);
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setShowError(false);
    setShowResult(false);
    setError("");
    setResult({} as ResultTypes);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log(data);
      setResult(data);
      setShowResult(true);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setShowError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Search for a zip code</title>
      </Head>

      <TotalBox>
        <h2>Search for a zip code</h2>

        <CepForm
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            value={cep}
            onChange={(e) => setCep(e.target?.value)}
            placeholder="CEP"
            type="number"
            required
            autoFocus
          />
        </CepForm>

        {loading && (
          <Loader>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="24px"
              height="30px"
              viewBox="0 0 24 30"
              // style={{ background: "rgba(0, 0, 50, 50)" }}
              xmlSpace="preserve"
            >
              <rect x="0" y="0" width="4" height="10" fill="#ffc0cb">
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 20; 0 0"
                  begin="0"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="10" y="0" width="4" height="10" fill="#ffc0cb">
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 20; 0 0"
                  begin="0.2s"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
              <rect x="20" y="0" width="4" height="10" fill="#ffc0cb">
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 20; 0 0"
                  begin="0.4s"
                  dur="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
            </svg>
          </Loader>
        )}

        {showResult ? (<ResultTitle>Result&apos;s</ResultTitle>) : (<ResultTitle>Error!</ResultTitle>) }
        <ResultCEP>
          {showResult && (
            <>
              <div>
                <label>CEP:</label>
                <input
                  placeholder={result.cep}
                  type="text"
                  disabled
                  value={result.cep}
                />
              </div>
              <div>
                <label>Logradouro:</label>
                <input
                  placeholder={result.logradouro}
                  type="text"
                  disabled
                  value={result.logradouro}
                />
              </div>
              <div>
                <label>Complemento:</label>
                <input
                  placeholder={result.complemento}
                  type="text"
                  disabled={result.complemento === "" && false}
                  value={result.complemento}
                />
              </div>
              <div>
                <label>Bairro:</label>
                <input
                  placeholder={result.bairro}
                  type="text"
                  disabled
                  value={result.bairro}
                />
              </div>
              <div>
                <label>Localidade:</label>
                <input
                  placeholder={result.localidade}
                  type="text"
                  disabled
                  value={result.localidade}
                />
              </div>
              <div>
                <label>UF:</label>
                <input
                  placeholder={result.uf}
                  type="text"
                  disabled
                  value={result.uf}
                />
              </div>
              <div>
                <label>DDD:</label>
                <input
                  placeholder={result.ddd}
                  type="text"
                  disabled
                  value={result.ddd}
                />
              </div>
            </>
          )}
        </ResultCEP>
        <BoxCheckbox>
          <CepButton type="button" onClick={handleSubmit}>
            Search
          </CepButton>
        </BoxCheckbox>
      </TotalBox>
    </>
  );
};

export default Home;
