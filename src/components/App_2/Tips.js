import React, {useState} from "react";

const messages = [
    'Learn React',
    "Apply for jobs",
    "Invest your new income",
    "Get a new job",
    "Become a millionaire",
];

export default function Tips() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function pressPrevious() {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    function pressNext() {
        if (step < messages.length) {
            setStep(step + 1);
        }
    }

    return (
        <>
            <button className="Button_active Next_button Button_close"
                    onClick={() => setIsOpen(!isOpen)}>&times;</button>

            {isOpen &&
                <div className="Tips">

                    <div className="numbers">
                        {messages.map((message, index) => (
                            <div key={message} className={step === index + 1 ? 'number_active number' : 'number'}
                                 onClick={() => setStep(index + 1)}>{index + 1}</div>
                        ))}
                    </div>

                    <p className="Tips_text margin_25">Step {step}: {messages[step - 1]}</p>

                    <div className='margin_25'>
                        <button className={`${step === 1 ? 'Previous_button' : 'Previous_button Button_active'}`}
                                onClick={pressPrevious}>Previous
                        </button>

                        <button className={`${step === messages.length ? 'Next_button' : 'Next_button Button_active'}`}
                                onClick={pressNext}>Next
                        </button>
                    </div>

                </div>
            }
        </>
    );
}