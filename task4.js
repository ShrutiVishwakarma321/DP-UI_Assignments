function averageOfSquaredOdds(numbers) {
    const squaredOdds = numbers
      .filter(num => num % 2 !== 0)
      .map(num => num * num);
    const sum = squaredOdds.reduce((sum, num) => sum + num, 0);
    return squaredOdds.length > 0 ? sum / squaredOdds.length : 0;
  }

  let numbers = [2,6,78,9];