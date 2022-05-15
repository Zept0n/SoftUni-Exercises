function factorielDevision(firstNubmer, secondNumber) {
    function factorielCalculator(number) {
      let result = 1;
      while (number != 1) {
        result *= number;
        number -= 1;
      }
      return result;
    }
    let finalDivisionResult =
      factorielCalculator(firstNubmer) / factorielCalculator(secondNumber);
    console.log(finalDivisionResult.toFixed(2));
  }