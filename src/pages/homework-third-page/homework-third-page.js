import React, { useEffect, useState } from 'react';
import Menu from '../../components/menu/menu.js';
import './style.css';
import { QUESTIONS } from './constants';
import cn from 'classnames';

const questions = QUESTIONS;

const range = (from, to) => [...Array(to - from).keys()].map(v => v + from);

const shuffle = a => {
    for (let i = 1; i < a.length; ++i) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

export const HomeworkThirdPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [mixedIds, setMixedIds] = useState([]);
    const [feedback, setFeedback] = useState('');
    const [questionVisible, setQuestionVisible] = useState(false);
    const [selectedAnswerId, setSelectedAnswerId] = useState('');
    const [classStates, setClassStates] = useState({});

    useEffect(() => {
        resetQuiz();
    }, []);

    const resetQuiz = () => {
        const ids = range(0, questions.length);
        setMixedIds(shuffle(ids));
        setCurrentQuestionIndex(0);
        setAnswered(false);
        setCorrectAnswersCount(0);
        setFeedback('');
        setQuestionVisible(true);
    };

    const displayQuestion = () => {
        if (currentQuestionIndex >= mixedIds.length) {
            displayStatistics();
            return;
        }

        const questionIndex = mixedIds[currentQuestionIndex];
        const currentQuestion = questions[questionIndex];
        return (
            <div className="questions">
                <div className="question">
                    <p>{currentQuestionIndex + 1}. {currentQuestion.question}</p>
                </div>
                <div className="answers">
                    {currentQuestion.answers.map((answer) => (
                        <div
                            key={answer.id}
                            className={ cn("answer", {'increased': answered && classStates[answer.id] === 'correct'}, {'moved': answered && classStates[answer.id] === 'incorrect'}) }
                            onClick={() => displayResult(answer.id, currentQuestion.answers, answer.isRight, currentQuestion.comment)}>
                            {answer.answer}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const displayResult = (answerId, answers, isRight, comment) => {
        if (answered) return;

        setAnswered(true);
        if (isRight) {
            setCorrectAnswersCount(prev => prev + 1);
            setFeedback(comment);

            setClassStates({});

            answers.forEach((answer, index) => {
                setTimeout(() => {
                    setClassStates(prevStates => ({
                        ...prevStates,
                        [answer.id]: answer.isRight ? 'correct' : 'incorrect'
                    }));
                }, 600 * (index + 1));
            });

            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
                setFeedback('');
                setAnswered(false);
                setClassStates({});
            }, 5000);
        } else {
            setFeedback('Неправильно!');

            setClassStates({});

            answers.forEach((answer, index) => {
                setTimeout(() => {
                    setClassStates(prevStates => ({
                        ...prevStates,
                        [answer.id]: 'incorrect'
                    }));
                }, 600 * (index + 1));
            });

            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
                setFeedback('');
                setAnswered(false);
                // Сбрасываем класс состояния после перехода к следующему вопросу
                setClassStates({});
            }, 5000);
        }
    };

    const displayStatistics = () => {
        setQuestionVisible(false);
        setFeedback(`Вы правильно ответили на ${correctAnswersCount} из ${questions.length} вопросов.`);
    };

    return (
        <div>
            <Menu/>
            <div className="quiz">
                <div className="question-counter">
                    Вопрос {currentQuestionIndex + 1} из {questions.length}
                </div>
                {questionVisible && displayQuestion()}
                <div className="result">{feedback}</div>
                {
                    !questionVisible &&
                    <button id="button-again" className="again-button" onClick={resetQuiz}>Пройти еще раз</button>
                }
            </div>
        </div>
    );
};