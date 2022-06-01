function constructionCrew(inputWorker) {
  if (inputWorker.dizziness) {
      inputWorker.levelOfHydrated += inputWorker.weight * 0.1 * inputWorker.experience;
      inputWorker.dizziness = false;
  }

  return inputWorker;
}