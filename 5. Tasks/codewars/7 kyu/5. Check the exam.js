// https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(correctAnswers, studentAnswers) {
  const RATING_SYSTEM = {
    correct: 4,
    incorrect: -1,
    blank: 0
  }

  let score = 0;

  for (let i = 0; i < studentAnswers.length; i++) {
    const studentAnswer = studentAnswers[i]
    const correctAnswer = correctAnswers[i]

    const isBlank = studentAnswer.length === 0
    const isCorrect = studentAnswer === correctAnswer

    if (isBlank) {
      score += RATING_SYSTEM.blank
      continue
    }

    if (isCorrect) {
      score += RATING_SYSTEM.correct
      continue
    }

    score += RATING_SYSTEM.incorrect
  }

  return score >= 0 ? score : 0
}