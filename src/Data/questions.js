const questions = [
  // General
  {
    category: "General",
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    category: "General",
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    category: "General",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    category: "General",
    question: "Who was the first Prime Minister of India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
    answer: "Jawaharlal Nehru",
  },
  {
    category: "General",
    question: "Which animal is known as the King of the Jungle?",
    options: ["Elephant", "Lion", "Tiger", "Leopard"],
    answer: "Lion",
  },
  {
    category: "General",
    question: "What is the national bird of India?",
    options: ["Eagle", "Parrot", "Peacock", "Sparrow"],
    answer: "Peacock",
  },
  {
    category: "General",
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    category: "General",
    question: "Which gas do humans need to breathe?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Oxygen",
  },
  {
    category: "General",
    question: "Which festival is known as the festival of lights?",
    options: ["Diwali", "Holi", "Eid", "Christmas"],
    answer: "Diwali",
  },
  {
    category: "General",
    question: "Which is the largest country in the world by area?",
    options: ["USA", "Russia", "China", "Canada"],
    answer: "Russia",
  },

  // Science
  {
    category: "Science",
    question: "What is H2O commonly known as?",
    options: ["Salt", "Water", "Oxygen", "Hydrogen"],
    answer: "Water",
  },
  {
    category: "Science",
    question: "How many planets are there in the Solar System?",
    options: ["7", "8", "9", "10"],
    answer: "8",
  },
  {
    category: "Science",
    question: "What part of the plant makes food?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf",
  },
  {
    category: "Science",
    question: "Which organ pumps blood in the human body?",
    options: ["Brain", "Liver", "Heart", "Kidney"],
    answer: "Heart",
  },
  {
    category: "Science",
    question: "Which is the smallest planet in our Solar System?",
    options: ["Mars", "Mercury", "Venus", "Pluto"],
    answer: "Mercury",
  },
  {
    category: "Science",
    question: "Which vitamin do we get from sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D",
  },
  {
    category: "Science",
    question: "What is the center of an atom called?",
    options: ["Proton", "Electron", "Nucleus", "Neutron"],
    answer: "Nucleus",
  },
  {
    category: "Science",
    question: "Which planet is called Earth’s twin?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Venus",
  },
  {
    category: "Science",
    question: "How many bones are in the adult human body?",
    options: ["206", "208", "210", "212"],
    answer: "206",
  },
  {
    category: "Science",
    question: "Which gas do plants release during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: "Oxygen",
  },

  // History
  {
    category: "History",
    question: "Who discovered America?",
    options: ["Christopher Columbus", "Vasco da Gama", "James Cook", "Marco Polo"],
    answer: "Christopher Columbus",
  },
  {
    category: "History",
    question: "In which year did India get independence?",
    options: ["1942", "1947", "1950", "1952"],
    answer: "1947",
  },
  {
    category: "History",
    question: "Who was the first President of India?",
    options: ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel", "B. R. Ambedkar"],
    answer: "Rajendra Prasad",
  },
  {
    category: "History",
    question: "The Great Wall of China was built to protect against which group?",
    options: ["Romans", "Mongols", "Japanese", "Indians"],
    answer: "Mongols",
  },
  {
    category: "History",
    question: "Who was known as the Iron Man of India?",
    options: ["Sardar Patel", "Subhash Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"],
    answer: "Sardar Patel",
  },
  {
    category: "History",
    question: "Which country built the pyramids?",
    options: ["India", "Greece", "Egypt", "Mexico"],
    answer: "Egypt",
  },
  {
    category: "History",
    question: "Who was the Mughal emperor during the First Battle of Panipat?",
    options: ["Akbar", "Babur", "Aurangzeb", "Shah Jahan"],
    answer: "Babur",
  },
  {
    category: "History",
    question: "Who wrote the Indian national anthem?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
    answer: "Rabindranath Tagore",
  },
  {
    category: "History",
    question: "Which movement was started by Mahatma Gandhi in 1942?",
    options: ["Civil Disobedience", "Non-Cooperation", "Quit India Movement", "Dandi March"],
    answer: "Quit India Movement",
  },
  {
    category: "History",
    question: "Who was the last Governor-General of independent India?",
    options: ["Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad", "Nehru"],
    answer: "C. Rajagopalachari",
  },

  // Sports
  {
    category: "Sports",
    question: "How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11",
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    answer: "France",
  },
  {
    category: "Sports",
    question: "In which sport is Wimbledon played?",
    options: ["Football", "Cricket", "Tennis", "Hockey"],
    answer: "Tennis",
  },
  {
    category: "Sports",
    question: "Which country invented basketball?",
    options: ["USA", "England", "Canada", "Germany"],
    answer: "USA",
  },
  {
    category: "Sports",
    question: "How many rings are there in the Olympic logo?",
    options: ["4", "5", "6", "7"],
    answer: "5",
  },
  {
    category: "Sports",
    question: "Who is known as the God of Cricket?",
    options: ["MS Dhoni", "Virat Kohli", "Sachin Tendulkar", "Ricky Ponting"],
    answer: "Sachin Tendulkar",
  },
  {
    category: "Sports",
    question: "What is the national sport of India?",
    options: ["Cricket", "Hockey", "Kabaddi", "Football"],
    answer: "Hockey",
  },
  {
    category: "Sports",
    question: "Which sport is associated with a puck?",
    options: ["Hockey", "Ice Hockey", "Football", "Baseball"],
    answer: "Ice Hockey",
  },
  {
    category: "Sports",
    question: "Which country hosts the Tour de France?",
    options: ["Italy", "France", "Spain", "Germany"],
    answer: "France",
  },
  {
    category: "Sports",
    question: "Who won the gold medal in javelin throw at the Tokyo Olympics 2021?",
    options: ["Neeraj Chopra", "Johannes Vetter", "Arshad Nadeem", "Anderson Peters"],
    answer: "Neeraj Chopra",
  },

  // Geography
  {
    category: "Geography",
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: "Pacific",
  },
  {
    category: "Geography",
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Ganga", "Yangtze"],
    answer: "Nile",
  },
  {
    category: "Geography",
    question: "Mount Everest is located in which mountain range?",
    options: ["Andes", "Himalayas", "Alps", "Rockies"],
    answer: "Himalayas",
  },
  {
    category: "Geography",
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Arabian"],
    answer: "Sahara",
  },
  {
    category: "Geography",
    question: "Which is the smallest continent?",
    options: ["Asia", "Australia", "Europe", "Antarctica"],
    answer: "Australia",
  },
  {
    category: "Geography",
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "Thailand"],
    answer: "Japan",
  },
  {
    category: "Geography",
    question: "Which river is considered sacred in India?",
    options: ["Yamuna", "Narmada", "Ganga", "Godavari"],
    answer: "Ganga",
  },
  {
    category: "Geography",
    question: "Which is the largest state in India by area?",
    options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
    answer: "Rajasthan",
  },
  {
    category: "Geography",
    question: "Which city is called the Pink City of India?",
    options: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    answer: "Jaipur",
  },
  {
    category: "Geography",
    question: "Which is the hottest continent?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa",
  },

  // Entertainment
  {
    category: "Entertainment",
    question: "Who is known as the King of Bollywood?",
    options: ["Salman Khan", "Shah Rukh Khan", "Amitabh Bachchan", "Akshay Kumar"],
    answer: "Shah Rukh Khan",
  },
  {
    category: "Entertainment",
    question: "Which movie has the famous song 'Let it Go'?",
    options: ["Moana", "Frozen", "Tangled", "Encanto"],
    answer: "Frozen",
  },
  {
    category: "Entertainment",
    question: "Who played Iron Man in the Marvel movies?",
    options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    answer: "Robert Downey Jr.",
  },
  {
    category: "Entertainment",
    question: "Which animated movie features a talking snowman named Olaf?",
    options: ["Frozen", "Shrek", "Toy Story", "Finding Nemo"],
    answer: "Frozen",
  },
  {
    category: "Entertainment",
    question: "Which TV show features characters Ross, Rachel, Monica, Chandler, Joey, and Phoebe?",
    options: ["How I Met Your Mother", "Friends", "The Office", "Seinfeld"],
    answer: "Friends",
  },
  {
    category: "Entertainment",
    question: "Which Indian actor is called 'Big B'?",
    options: ["Shah Rukh Khan", "Aamir Khan", "Amitabh Bachchan", "Rajinikanth"],
    answer: "Amitabh Bachchan",
  },
  {
    category: "Entertainment",
    question: "Which singer is known as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Justin Bieber", "Prince"],
    answer: "Michael Jackson",
  },
  {
    category: "Entertainment",
    question: "Which animated movie features Simba, Timon, and Pumbaa?",
    options: ["The Lion King", "Madagascar", "Zootopia", "Kung Fu Panda"],
    answer: "The Lion King",
  },
  {
    category: "Entertainment",
    question: "Which Indian actress is also known as 'Desi Girl'?",
    options: ["Katrina Kaif", "Priyanka Chopra", "Deepika Padukone", "Alia Bhatt"],
    answer: "Priyanka Chopra",
  },
  {
    category: "Entertainment",
    question: "Which movie series features Jack Sparrow as a pirate?",
    options: ["Pirates of the Caribbean", "Harry Potter", "The Hobbit", "Avatar"],
    answer: "Pirates of the Caribbean",
  },
];

export default questions;
