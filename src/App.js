import { useState } from 'react'
import Quizz from './components/Quizz'
import questions from './question'

const App = () => {
  const [actualQuestion, setActualQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [hasFinished, setHasFinished] = useState(false)

  const handleValidate = (e, checked, correct) => {
    e.preventDefault()

    if(actualQuestion < questions.length) {

      if (checked.value === correct) {
        
        const newScore = score + 1
        setScore(newScore)
        
      }

      if (actualQuestion < questions.length - 1) {
        
        setActualQuestion(actualQuestion + 1)
        checked.checked = false

      } else {

        setHasFinished(true)
        
      }


    } 
  }

  const handleReplay = () => {
    setHasFinished(false)
    setScore(0)
    setActualQuestion(0)
  }

  return (
    <main className='bg-gray-200 min-h-screen grid place-items-center'>
      <Quizz questions={questions} actualQuestion={actualQuestion} handleValidate={handleValidate} score={score} hasFinished={hasFinished} handleReplay={handleReplay}/>
    </main>
  );
}

export default App;
