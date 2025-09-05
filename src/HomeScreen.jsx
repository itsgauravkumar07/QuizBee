import questions from "./Data/questions";
import logo from "./assets/Logo.webp"
import CategorySelection from "./compoments/CategorySection";

function HomeScreen({setPlayCategory, setSelectedCategory, setFilteredQuestions, setCurrQuestion, setScore, setCurrentScreen}){

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        const filtered = questions.filter(q => q.category === category);
        setFilteredQuestions(filtered);
        setCurrQuestion(0);
        setScore(0);
        setPlayCategory(category);
        setCurrentScreen("quiz");
    }

    return (
        <div>

            <nav className="mt-4 mb-3 ml-4">

                <img 
                src={logo} 
                alt="Logo" 
                className="h-12"
                />
                
            </nav>

            <section className="flex flex-col items-center justify-center text-center mt-12 mb-12">

            <div className="w-full max-w-2xl">
                <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl">Welcome to QuizBee</h1>

                <p className="text-sm sm:text-base md:text-lg mt-6 text-gray-500">“Test your knowledge across a variety of topics. Select a category and embark on an exciting quiz journey to see how much you really know!”</p>
            </div>  
            </section>
           
            <div className="flex flex-col justify-center items-center text-center mt-16 pb-16 p-8 shadow-lg m-18 rounded-xl">
                 <h4 className="text-xl md:text-2xl sm:text-lg font-bold text-gray-800">Select a Category</h4>
                <CategorySelection onSelectCategory={handleCategorySelect} />
            </div>
            
        </div>
    )
}

export default HomeScreen;