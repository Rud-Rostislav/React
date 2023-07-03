import React, {useState} from "react";

export default function Questions() {
    const questions = [
        {
            id: 1,
            question: 'First question',
            answer: ['Right answer', 'Answer 2', "Answer 3", "Answer 4"],
            correctAnswer: 1,
            points: 1
        },
        {
            id: 2,
            question: 'Second question',
            answer: ['Answer 1', 'Right answer', "Answer 3", "Answer 4"],
            correctAnswer: 2,
            points: 1
        },
        {
            id: 3,
            question: 'Third question',
            answer: ['Answer 1', 'Answer 2', "Right answer", "Answer 4"],
            correctAnswer: 3,
            points: 1
        },
        {
            id: 4,
            question: 'Fourth question',
            answer: ['Answer 1', 'Answer 2', "Answer 3", "Right answer"],
            correctAnswer: 4,
            points: 1
        },
        {
            id: 5,
            question: 'Fifth question',
            answer: ['Right answer', 'Answer 2', "Answer 3", "Answer 4"],
            correctAnswer: 1,
            points: 1
        },
        {
            id: 6,
            question: 'Sixth question',
            answer: ['Answer 1', 'Right answer', "Answer 3", "Answer 4"],
            correctAnswer: 2,
            points: 1
        },
        {
            id: 7,
            question: 'Seventh question',
            answer: ['Answer 1', 'Answer 2', "Right answer", "Answer 4"],
            correctAnswer: 3,
            points: 1
        },
        {
            id: 8,
            question: 'Eighth question',
            answer: ['Answer 1', 'Answer 2', "Answer 3", "Right answer"],
            correctAnswer: 4,
            points: 1
        },
        {
            id: 9,
            question: 'Ninth question',
            answer: ['Right answer', 'Answer 2', "Answer 3", "Answer 4"],
            correctAnswer: 1,
            points: 1
        },
        {
            id: 10,
            question: 'Tenth question',
            answer: ['Right answer', 'Answer 2', "Answer 3", "Answer 4"],
            correctAnswer: 1,
            points: 1
        }
    ];

    // Набрані очки
    const [points, setPoints] = useState(0);

    // Hide/show questions
    const [showStartButton, setShowStartButton] = useState(true);
    const [showQuestions, setShowQuestions] = useState(false);
    const [showResults, setShowResults] = useState(false);

    function showQuestionsHandler() {
        setShowQuestions(true);
        setShowResults(true);
        setShowStartButton(false);
        setPoints(0);
        setStep(1);
    }

    // Функція додавання очків
    function addPoints(selectedAnswer) {
        const currentQuestion = questions[step - 1];
        if (currentQuestion.answer[selectedAnswer + 1] === currentQuestion.answer[currentQuestion.correctAnswer]) {
            setPoints(points + currentQuestion.points);
        }
        pressNext()
    }

    // Хук для переходу по питанням
    const [step, setStep] = useState(1);

    // Функція переходу на наступне питання
    function pressNext() {
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            // Коли завершено
            setShowQuestions(false);
            setShowResults(true);
            setShowStartButton(true);
        }
    }

    return (
        <>
            <div className="div_wrapper">

                <button className='button_start' onClick={showQuestionsHandler}
                        style={{visibility: showStartButton ? 'visible' : 'hidden'}}
                >Start
                </button>

                <button className='Stats margin_25'
                        style={{visibility: showResults ? 'visible' : 'hidden'}}
                >Набрано {points} очок із {questions.length} ({points / questions.length * 100}%)
                </button>

                {/* Buttons with numbers */}
                <div style={{visibility: showQuestions ? 'visible' : 'hidden'}}>

                    <div className="numbers">
                        {questions.map((question, index) => (
                            <div key={question.id}
                                 className={step === index + 1 ? 'number_active number' : 'number'}>{index + 1}</div>
                        ))}
                    </div>

                    {/* Question */}
                    <p className="Tips_text">{step}. {questions[step - 1].question}</p>

                    {questions[step - 1].answer.map((answer, index) => (
                        <div key={index}>
                            <button className="Stats answears"
                                    onClick={() => addPoints(index)}
                            >{answer}
                            </button>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}