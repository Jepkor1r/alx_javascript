#!/usr/bin/node

function divideBy(firstNumber) {
    return (secondNumber) => {
      return secondNumber / firstNumber;
    };
  }
  
  function addBy(firstNumber) {
    return (secondNumber) => {
      return secondNumber + firstNumber;
    };
  }
  
  const addBy100 = (n) => {
    return addBy(100)(n);
  };
  
  const addBy1000 = (n) => {
    return addBy(1000)(n);
  };
  
  const divideBy10 = (n) => {
    return divideBy(10)(n);
  };
  
  const divideBy100 = (n) => {
    return divideBy(100)(n);
  };