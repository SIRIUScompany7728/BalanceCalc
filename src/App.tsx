import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";
import Profile from "./Profile";
import logo from "./logo.png";
import More from "./more/More.js";
import * as XLSX from "xlsx";
export default function App() {
  const [value, setValue] = useState("");
  const [lastCalc, setLastCalc] = useState("");
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [balance, setBalance] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const [justCleared, setJustCleared] = useState(false);
  const [isUSD, setIsUSD] = useState(false);
  const [page, setPage] = useState("home");
  const handleclick = (num) => {
    if (
      value.includes("error") ||
      value.includes("history") ||
      value.includes("=")
    ) {
      setValue(num);
    } else {
      setValue(value + num);
    }
    setShowBalance(false);
    setJustCleared(false);
  };
  const clear = () => {
    setValue("");
    setShowBalance(false);
    setLastCalc("");
    setJustCleared(true);
    setBalance(0);
  };
  const del = () => {
    setValue(value.slice(0, -1));
  };
  const handleoperator = (op) => {
    if (
      value.includes("error") ||
      value.includes("history") ||
      value.includes("=")
    ) {
      setValue("");
    } else {
      setValue(value + op);
    }
  };
  const calculate = () => {
    try {
      if (value === "") return;
      const expression = value;
      const result = eval(value);
      const final = `${expression} = ${result}`;
      setValue(result.toString());
      setLastCalc({
        date: new Date().toLocaleString(),
        type: "calculation",
        amount: "-",
        balance: "-",
        expression: expression,
        result: result,
      });
    } catch {
      setValue("syntax error!!");
    }
  };
  const save = () => {
    if (!lastCalc) return;
    setHistory((prev) => [...prev, lastCalc]);
    setHistoryIndex(0);
  };
  const showhistory = () => {
    if (history.length === 0) {
      setValue("no history");
      return;
    }
    const item = history[historyIndex];
    if (item.type === "calculation") {
      setValue(`${item.expression} = ${item.result}`);
    } else if (item.type === "debit") {
      setValue(`Debit: ${item.amount}`);
    } else if (item.type === "kredit") {
      setValue(`kredit: ${item.amount}`);
    } else if (item.type === "percent") {
      setValue(`${item.expression} = ${item.result}`);
    }
    setHistoryIndex((prev) => (prev + 1) % history.length);
  };
  const resethistory = () => {
    setHistory([]);
    setHistoryIndex(0);
  };
  const getnumber = () => {
    const num = parseFloat(value.split(/=|:/).pop());
    return isNaN(num) ? 0 : num;
  };
  const debit = () => {
    if (value === "") return;
    const num = getnumber();
    if (isNaN(num)) return;
    setBalance((prev) => {
      const newBalance = prev + num;
      const record = {
        date: new Date().toLocaleString(),
        type: "debit",
        amount: num,
        balance: newBalance,
        expression: "-",
        result: "-",
      };
      setHistory((h) => [...h, record]);
      return newBalance;
    });

    setValue("");
    setShowBalance(true);
  };
  const kredit = () => {
    if (value === "") return;

    const num = getnumber();
    if (isNaN(num)) return;
    setBalance((prev) => {
      const newBalance = prev - num;
      const record = {
        date: new Date().toLocaleString(),
        type: "kredit",
        amount: num,
        balance: newBalance,
        expression: "-",
        result: "-",
      };
      setHistory((h) => [...h, record]);
      return newBalance;
    });
    setValue("");
    setShowBalance(true);
  };
  const covert = () => {
    if (value === "") return;
    const num = getnumber();
    if (isNaN(num)) return;
    let result;

    if (!isUSD) {
      result = (num / 18000).toFixed(0);
    } else {
      result = (num * 18000).toFixed(0);
    }
    setValue(result.toString());
    setIsUSD(!isUSD);
  };

  const handlepercent = () => {
    if (value === "") return;

    const num = parseFloat(value);
    if (isNaN(num)) return;

    const result = num / 100;
    const record = {
      date: new Date().toLocaleString(),
      type: "percent",
      amount: "-",
      balance: "-",
      expression: `${num}%`,
      result: result,
    };
    setValue(result.toString());
    setHistory((prev) => [...prev, record]);
  };
  const formatDisplay = (str, isUSD) => {
    if (typeof str !== "string") return "";

    if (
      str.toLowerCase().includes("error") ||
      str.toLowerCase().includes("history")
    ) {
      return str;
    }

    return str.replace(/\d+(\.\d+)?/g, (match) => {
      return Number(match).toLocaleString(isUSD ? "en-US" : "id-ID");
    });
  };
  if (page === "profile") {
    return <Profile setPage={setPage} />;
  } else if (page === "more") {
    return <More setPage={setPage} />;
  }

  const exportExcel = () => {
    const data = history.map((item, index) => ({
      No: index + 1,
      Date: item.date || "",
      Type: item.type || "",
      Amount: item.amount || "",
      Balance: item.balance || "",
      Expression: item.expression || "",
      Result: item.result || "",
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet["!cols"] = [
      { wch: 5 },
      { wch: 22 },
      { wch: 15 },
      { wch: 25 },
      { wch: 15 },
      { wch: 18 },
      { wch: 18 },
    ];
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "History");
    XLSX.writeFile(workbook, "BalanceCalc_sheet.xlsx");
  };
  return (
    <div className="App">
      <header id="first">
        <div id="image">
          <img src={logo} width="50" onClick={() => setPage("profile")} />
        </div>
        <div id="title">
          <h1>BalanceCalc</h1>
        </div>
        <div id="about">
          <p onClick={() => setPage("more")}>more</p>
        </div>
      </header>
      <main>
        <section id="content">
          <div id="box">
            <input
              type="text"
              id="ipt1"
              className={isOn ? "on" : "off"}
              value={
                value !== ""
                  ? `${isUSD ? "$" : "Rp"} ${formatDisplay(value, isUSD)}`
                  : showBalance && !justCleared
                  ? `balance:${balance.toLocaleString(
                      isUSD ? "en-US" : "id-ID"
                    )}`
                  : ""
              }
              placeholder="0"
            />
            <div id="pad">
              <div id="btn-wrapper">
                <div id="btn-line1">
                  <button onClick={() => handleclick("1")}>1</button>
                  <button onClick={() => handleclick("2")}>2</button>
                  <button onClick={() => handleclick("3")}>3</button>
                  <button onClick={() => setIsOn(true)}>A</button>
                </div>
                <div id="btn-line2">
                  <button onClick={() => handleclick("4")}>4</button>
                  <button onClick={() => handleclick("5")}>5</button>
                  <button onClick={() => handleclick("6")}>6</button>
                  <button onClick={() => setIsOn(false)}>B</button>
                </div>
                <div id="btn-line3">
                  <button onClick={() => handleclick("7")}>7</button>
                  <button onClick={() => handleclick("8")}>8</button>
                  <button onClick={() => handleclick("9")}>9</button>
                  <button onClick={clear}>C</button>
                </div>
                <div id="btn-line4">
                  <button onClick={covert}>#</button>
                  <button onClick={() => handleclick("0")}>0</button>
                  <button onClick={exportExcel}>*</button>
                  <button onClick={del}>D</button>
                </div>
              </div>
              <div id="pad2">
                <div id="op-wrapper">
                  <button onClick={() => handleoperator("+")}>+</button>
                  <button onClick={() => handleoperator("-")}>-</button>
                  <button onClick={() => handleoperator("*")}>x</button>
                  <button onClick={() => handleoperator("/")}>/</button>
                  <button onClick={calculate}>=</button>
                </div>
              </div>
              <div id="pad3">
                <div id="btn-system">
                  <button onClick={resethistory}>R</button>
                  <button onClick={save}>S</button>
                  <button onClick={handlepercent}>%</button>
                  <button onClick={() => handleoperator(".")}>.</button>
                </div>
              </div>
            </div>
            <div id="main-btn">
              <div id="dc-btn">
                <button id="debit" onClick={debit}>
                  Debit
                </button>
                <button id="kredit" onClick={kredit}>
                  Credit
                </button>
              </div>
              <div id="history-btn">
                <button onClick={showhistory}>History</button>
              </div>
            </div>
            <p id="information">&copy;Sirius.inc. All Right Reserved</p>
          </div>
        </section>
      </main>
      <footer>Sirius.inc&copy;</footer>
    </div>
  );
}
