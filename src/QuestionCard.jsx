import { useEffect } from "react";
import clock from './assets/clock.png'
function QuestionCard({isAnswered, setIsAnswered, selectedOption, setSelectedOption, setCurrentScreen, timer, setTimer, setScore, score, question, total, currQuestion, setCurrQuestion}){

    function  handleClick(opt){
        
        if(!isAnswered){
            setIsAnswered(true);
            setSelectedOption(opt);
            handleResult(opt);

             setTimeout(() => {
                handleNext();
                setIsAnswered(false);
            }, 1500);
        }
    }

    function handleResult(opt){
        if(opt === question.answer){
            setScore( count => count + 1);
        }
    } 

    function handleNext(){
       
        if(currQuestion + 1 < total){
            setCurrQuestion(count => count+1);
            setSelectedOption(null);
        } else{
              setCurrentScreen("result");
        }
             setTimer(15);
    }

        useEffect(() => {

           if(isAnswered) return;
           
           if(timer === 0 && !isAnswered){ 
            setTimeout(() => {
                handleNext();
            }, 800);
            
            return;        
        }
           const interval = setInterval(() => {setTimer(count => count - 1)}, 1000);
           return () => clearInterval(interval);
        
        }, [timer]);

    const questionProgress = ((currQuestion + 1) / total) * 100;
    const timeProgress = ((15 - timer)/15) * 100;

    const optionButtonStyle = "p-4 rounded-lg min-h-20 max-w-45 ";

    return (
        <div className="flex flex-col items-center justify-center text-center h-screen">
            <section className="max-w-md w-full max-h-md">
            
            <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Question is { currQuestion + 1 } from {total}</p>
                <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 transition-all duration-500" style={{width: `${questionProgress}%`}}></div>
            </div>
            </div>

            <div className="width-full bg-gray-200 rounded-lg mt-3">
                
                <div className="w-full h-1 bg-gray-200 rounded-3xl overflow-hidden">
                    <div 
                    className={`h-full bg-green-500 ${timeProgress === 100 ? "transition-all" : " transition-all duration-1000 ease-linear"}`} style={{width: `${timeProgress}%`}}></div>
                </div>

            <div className="p-6">
                <div className="grid grid-cols-[2fr_0.5fr]">
                    <h2 className="text-lg font-medium min-h-14 text-left">{question.question}</h2>

                    <div className="flex justify-end-safe items-center mt-1 self-start gap-0.5">
                        <img src={clock} alt="clock" className="h-5 w-5"/>
                         <p>00:{String(timer).padStart(2, "0")}</p>
                    </div>
                   
                </div>
                
                
                <div className="grid grid-cols-2 gap-4 mt-6 mb-2 ml-2">
                    {question.options.map((opt, idx) => (
                    
                        <button 
                            key={idx} 
                            onClick={() => {handleClick(opt)}}
                            disabled={isAnswered}
                            className={
                                `${optionButtonStyle}
                            } ${isAnswered && opt === question.answer 
                                ? "bg-green-400"
                                : isAnswered && opt === selectedOption && opt !== question.answer
                                ? "bg-red-500"
                                : "bg-white"
                            }`
                        }>
                            {opt}
                        </button>

                    ))}
                </div>
            </div>
            </div>
               
           
            </section>
            
        </div>
    )
}


export default QuestionCard;