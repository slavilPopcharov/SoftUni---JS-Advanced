function extractsIncreasingSubsequenceFromArray(numbers) {
  return numbers.reduce(function (result, currentValue) {
      if (currentValue >= result[result.length - 1] || result.length === 0) {
          result.push(currentValue);
      }
      return result;
  }, []);
}