import { useEffect } from "react";
import badge from './assets/badge.png'
import logo from "./assets/logo.webp"


function ResultScreen({setCurrentScreen, resetQuiz, playCategory, total, score}){

   const scoreInPercentage = (score/total) * 100; 

   function handleBackHome(){
    setCurrentScreen("home");
   }

    return (
        <div className="bg-gray-100">

            <section className="flex flex-col justify-center items-center h-screen text-center">
                <div className="bg-white min-h-40 max-w-100 p-10 flex flex-col justify-center items-center rounded-2xl shadow-md">

                    <img src={badge} alt="" className="h-10 w-10 " />

                    <h2 className="font-medium text-2xl mt-2">Congratulations!!</h2>
                    <p className="font-sans text-sm text-gray-600 mt-1.5">You've completed the quiz with an impressive score. Keep up the great work!</p>

                  <div className="grid grid-cols-2 mt-8 gap-4">
                    <div className="bg-indigo-100 p-4 w-40 rounded-lg">
                    <h2 className="text-indigo-900 font-medium">Score</h2>
                    <h2 className="font-bold text-3xl text-indigo-900">{score}/{total}</h2>
                   </div>

                   <div className="bg-indigo-100 p-4 w-40 rounded-lg">
                    <h2 className="text-indigo-900 font-medium">Percentage</h2>
                    <h2 className="font-bold text-3xl text-indigo-900">{scoreInPercentage}%</h2>
                   </div>
                     
                  </div>

                  <button onClick={() => {resetQuiz(playCategory)}} className="bg-indigo-800 text-white w-full p-2 rounded-lg mt-8 font-medium hover:bg-indigo-900">Play Again</button>
                  <button onClick={handleBackHome} className="bg-gray-100 w-full p-2 rounded-lg mt-2.5 font-medium hover:bg-gray-200">Go Home</button>
                </div>
                  
                
            </section>
           
        </div>
    )
}
export default ResultScreen;