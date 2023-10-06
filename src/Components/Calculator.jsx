import React, { useState } from "react";

const Calculator = () => {
  const [current, setCurrent] = useState(0);
  const [prevoius, setPrevoius] = useState("");
  const [operations, setOperations] = useState("");

  const appendValueHandler = (el) => {
    const value = el.target.getAttribute("data");
    if (value === "." && current.includes(".")) return;
    setCurrent(current !== 0 ? current + value : value);
  };

  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allclearHandler = () => {
    setCurrent(0);
    setPrevoius("");
    setOperations("");
  };

  const chooseOperationHandler = (el) => {
    if (current === "") return;
    if (prevoius !== "") {
      let value = compute();
      setPrevoius(value);
    } else {
      setPrevoius(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let value = compute();
    if (value === undefined || value == null) return;
    setCurrent(value);
    setPrevoius("");
    setOperations("");
  };
  const compute = () => {
    let result;
    let previousNumber = parseFloat(prevoius);
    let currentNumber = parseFloat(current);
    if (isNaN(previousNumber) || isNaN(currentNumber)) return;
    switch (operations) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "%":
        result = previousNumber % currentNumber;
        break;
      case "x²":
        result = current * 2;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <>
      <div className="Calculator-container">
        <div className="container-ineer-div container-diesplay">
          {prevoius}
          {operations}
        </div>
        <div className="container-ineer-div container-diesplay">
          {current}
        </div>
        <div className="container-ineer-div">
          <button data={"÷"} onClick={allclearHandler}>
            CE
          </button>
          <button data={"÷"} onClick={allclearHandler}>
            C
          </button>
          <button data={"÷"} onClick={deleteHandler}>
            DEL
          </button>
          <button data={"÷"} onClick={chooseOperationHandler}>
            ÷
          </button>
        </div>
        <div>
          <button data={"x²"} onClick={chooseOperationHandler}>
            DEL
          </button>
          <button data={"x²"} onClick={chooseOperationHandler}>
            1/x
          </button>
          <button data={"x²"} onClick={chooseOperationHandler}>
            x²
          </button>
          <button data={"+/-"} onClick={chooseOperationHandler}>
            +/-
          </button>
        </div>
        <div className="container-ineer-div">
          <button data={7} onClick={appendValueHandler}>
            7
          </button>
          <button data={8} onClick={appendValueHandler}>
            8
          </button>
          <button data={9} onClick={appendValueHandler}>
            9
          </button>
          <button data={"x"} onClick={chooseOperationHandler}>
            x
          </button>
        </div>
        <div className="container-ineer-div">
          <button data={4} onClick={appendValueHandler}>
            4
          </button>
          <button data={5} onClick={appendValueHandler}>
            5
          </button>
          <button data={6} onClick={appendValueHandler}>
            6
          </button>
          <button data={"-"} onClick={chooseOperationHandler}>
            -
          </button>
        </div>
        <div className="container-ineer-div">
          <button data={1} onClick={appendValueHandler}>
            1
          </button>
          <button data={2} onClick={appendValueHandler}>
            2
          </button>
          <button data={3} onClick={appendValueHandler}>
            3
          </button>
          <button data={"+"} onClick={chooseOperationHandler}>
            +
          </button>
        </div>
        <div className="container-ineer-div">
          <button data={"%"} onClick={chooseOperationHandler}>
            %
          </button>
          <button data={0} onClick={appendValueHandler}>
            0
          </button>
          <button data={"."} onClick={appendValueHandler}>
            .
          </button>
          <button onClick={equalHandler} className="ecavaltwo">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
