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
        }
    ];

    // Набрані очки
    const [points, setPoints] = useState(0);

    // Hide/show questions
    const [showQuestions, setShowQuestions] = useState("hidden");
    const [showStartButton, setShowStartButton] = useState("visible");
    const [showResults, setShowResults] = useState("hidden");

    function showQuestionsHandler() {
        setShowQuestions("visible");
        setShowStartButton("hidden");
        setShowResults('hidden');
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
            setShowQuestions("hidden");
            setShowResults('visible');
            setShowStartButton("visible");
        }
    }

    return (
        <>
            <div className="Tips">

                <button className='button_start' onClick={showQuestionsHandler}
                        style={{visibility: showStartButton}}
                >Start
                </button>

                <button className='Stats margin_25'
                        style={{visibility: showResults}}
                >Ви набрали {points} очок
                </button>

                {/* Buttons with numbers */}
                <div style={{visibility: showQuestions}}>

                    <div className="numbers numbers_question">
                        {questions.map((question, index) => (
                            <div key={question.id}
                                 className={step === index + 1 ? 'number_active number number_not_hover' : 'number number_not_hover'}>{index + 1}</div>
                        ))}
                    </div>

                    {/* Question */}
                    <p className="Tips_text">{step}. {questions[step - 1].question}</p>

                    {questions[step - 1].answer.map((answer, index) => (
                        <div>
                            <button key={index} className="Stats answears"
                                    onClick={() => addPoints(index)}
                            >{answer}
                            </button>
                        </div>
                    ))}

                    {/* Points */}
                    <p className='answears'>points: {points}</p>

                </div>
            </div>
        </>
    );
}