import React, { useState } from "react";

const GuessGame = () => {
    const questions = [
        {
            question: "Which country did I like the most?",
            options: ["Poland", "Saint Tome", "Jamaica"],
            correctAnswer: "Jamaica",
        },
        {
            question: "What are the names of my Dogs?",
            options: ["Zé and Tibau", "Tibau and Zarco", "Zarco and Nicolau"],
            correctAnswer: "Zé and Tibau",
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionClick = (option) => {
        if (option === currentQuestion.correctAnswer) {
            setFeedback("🎉 Correct!");
            setScore(score + 1);
        } else {
            setFeedback("❌ Oops!");
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setFeedback("");
            } else {
                setIsGameOver(true);
            }
        }, 1500);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="bg-tertiary p-6 rounded-lg shadow-md w-full max-w-md">
                {!isGameOver ? (
                    <>
                        <h1 className="text-2xl font-bold text-quaternary mb-4">Guess Game</h1>
                        <p className="text-lg text-quaternary mb-4">{currentQuestion.question}</p>
                        <div className="space-y-2">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className={`w-full px-4 py-2 text-lg rounded-lg shadow-md 
                  ${feedback && option === currentQuestion.correctAnswer
                                            ? "bg-quaternary text-white"
                                            : "bg-quaternary text-gray-200"
                                        } 
                  ${feedback && option !== currentQuestion.correctAnswer
                                            ? "opacity-50 pointer-events-none"
                                            : "hover:bg-quaternary hover:text-white"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {feedback && (
                            <div
                                className={`mt-4 p-4 text-center text-white font-semibold rounded-lg ${feedback.includes("Correct") ? "bg-green-500" : "bg-red-500"
                                    }`}
                            >
                                {feedback}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Over!</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Your score: {score} out of {questions.length}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GuessGame;
