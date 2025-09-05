import QuestionCard from "./QuestionCard";
import ResultScreen from "./ResultScreen";
import questions from "../src/Data/questions";
import Home from"./HomeScreen";
import { useState } from "react";

function App(){

    const[currentScreen, setCurrentScreen] = useState("home"); // "home" | "quiz" | "result"
    const[selectedCategory, setSelectedCategory] = useState(null);
    const[playCategory, setPlayCategory] = useState(null);
    const[filteredQuestions, setFilteredQuestions] = useState([]); 
    const[currQuestion, setCurrQuestion] = useState(0);
    const[score, setScore] = useState(0);
    const[timer, setTimer] = useState(15);
    const[selectedOption, setSelectedOption] = useState(null);
    const[isAnswered, setIsAnswered] = useState(false);


    function resetQuiz(category){
        setSelectedCategory(category);
        const filtered = questions.filter(q => q.category === category);
        setFilteredQuestions(filtered);
        setCurrQuestion(0);
        setScore(0);
        setCurrentScreen("quiz");
    }

    return(
        <div>
            
                {currentScreen === "home" && 
                <Home
                setSelectedCategory={setSelectedCategory}
                setFilteredQuestions={setFilteredQuestions}
                setCurrQuestion={setCurrQuestion}
                setScore={setScore}
                setCurrentScreen={setCurrentScreen}
                setPlayCategory={setPlayCategory}
                />}  

                {currentScreen === "quiz" && 
                <QuestionCard
                isAnswered={isAnswered}
                setIsAnswered={setIsAnswered}

                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}

                setCurrentScreen={setCurrentScreen}
                currentScreen={currentScreen}

                currQuestion={currQuestion}
                setCurrQuestion={setCurrQuestion}

                question={filteredQuestions[currQuestion]}
                total={filteredQuestions.length}

                score={score}
                setScore={setScore}

                timer={timer}
                setTimer={setTimer}
                /> } 
                
                {currentScreen === "result" && 
                <ResultScreen
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}

                setPlayCategory={setPlayCategory}
                playCategory={playCategory}

                resetQuiz={resetQuiz}

                setCurrentScreen={setCurrentScreen}

                total={filteredQuestions.length}
                score={score}
               
                /> }
                
        </div>
    )
}
export default App;