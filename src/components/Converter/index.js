import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../../themes";
import "./styles.css";

export default function Converter() {
  const [result, setResult] = useState("");
  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [currencies, setCurrencies] = useState([]);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    async function loadData() {
      await axios
        .get("http://api.openrates.io/latest")
        .then((response) => {
          const currencyAr = [];
          for (const key in response.data.rates) {
            currencyAr.push(key);
          }
          setCurrencies(currencyAr);
          console.log("Carregando Modedas");
        })
        .catch((err) => {
          console.log("Erro", err);
        });
    }
    loadData();
  }, []);

  async function convertHandler() {
    if (fromCurrency !== toCurrency) {
      await axios
        .get(
          `http://api.openrates.io/latest?base=${fromCurrency}&symbols=${toCurrency}`
        )
        .then((response) => {
          const result = amount * response.data.rates[toCurrency];
          setResult(result.toFixed(3));
        })
        .catch((error) => {
          console.log("Opps", error.message);
        });
    } else {
      setResult("Selecione moedas diferentes!");
    }
  }

  return (
    <div className="Converter">
      <span style={theme}>Convertendo Moedas com Hooks</span>
      <div className="Form">
        <input
          placeholder="Insira o Valor"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <select
          name="from"
          onChange={(event) => setFromCurrency(event.target.value)}
          value={fromCurrency}
        >
          {currencies.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <select
          name="to"
          onChange={(event) => setToCurrency(event.target.value)}
          value={toCurrency}
        >
          {currencies.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <button onClick={convertHandler}>Ok</button>
      </div>
      <div>{result && <h3 style={theme}>{`${toCurrency} ${result}`}</h3>}</div>
    </div>
  );
}
