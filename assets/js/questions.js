/*jshint esversion:6*/

const questions = [{
        
        number: 1,
        question: "What is the profession of Chandler Bing for the main part of the show?",
        answers: [
            {text: "IT procurement manager", correct: true},
            {text: "Transponster", correct: false},
            {text: "Paleontologist", correct: false},
            {text: "Chef", correct: false}
        ],
    },
    {   number: 2,
        question: "When Ross tries to teach his son Ben about Hanukkah, what does he dress up as?",
        answers: [
            { text: "The Holiday Armadillo", correct: true },
            { text: "A dreidel", correct: false },
            { text: "A potato pancake", correct: false },
            { text: "Santa Claus", correct: false }
        ],
    },
    {   number: 3,
        question: "What is the name of Phoebe's alter ego?",
        answers: [
            { text: "Regina Phalange", correct: true },
            { text: "Smelly Nelly", correct: false },
            { text: "Lisa Turtle", correct: false },
            { text: "Gladys Glick", correct: false }
        ],
    },
    {   number: 4,
        question: "What does Ross scream when he, Rachel and Chandler are trying to move a couch into his apartment?",
        answers: [
            { text: "Pivot!", correct: true },
            { text: "Lift and slide!", correct: false },
            { text: "My Sandwitch??", correct: false },
            { text: "Shut Up! Shut Up! Shut Uuup!", correct: false }
        ],
    },
    {   number: 5,
        question: "What song does Ross want to play on the bagpipes at Monica and Chandlers wedding?",
        answers: [
            { text: "Scotland the Brave", correct: false },
            { text: "Under pressure", correct: false },
            { text: "Celebration", correct: true },
            { text: "Disco inferno", correct: false }
        ],
    },
    {   number: 6,
        question: "Which two characters accidentally got married in Las Vegas?",
        answers: [
            { text: "Joey and Pheoebe", correct: false },
            { text: "Monica and Chandler", correct: false },
            { text: "Ross and Monica", correct: false },
            { text: "Rachel and Ross", correct: true }
        ],
    },
    {   number: 7,
        question: "What does Phoebe find in a soda can?",
        answers: [
            { text: "A toe", correct: false },
            { text: "A ring", correct: false },
            { text: "A thumb", correct: true },
            { text: "A condom", correct: false }
        ],
    },
    {   number: 8,
        question: "Which country does Chandler accidentally book a trip to while trying to get away from Janice?",
        answers: [
            { text: "Yemen", correct: true },
            { text: "Island", correct: false },
            { text: "Sweden", correct: false },
            { text: "Mexico", correct: false }
        ],
    },
    {   number: 9,
        question: "Which character accidentally threw a woman's wooden leg into a fire?",
        answers: [
            { text: "Chandler", correct: false },
            { text: "Joey", correct: true },
            { text: "Rachel", correct: false },
            { text: "Phoebe", correct: false }
        ],
    },
    {   number: 10,
        question: "Who was Monica's first roommate before Rachel moved in?",
        answers: [
            { text: "Phoebe", correct: true },
            { text: "Ross", correct: false },
            { text: "Janice", correct: false },
            { text: "Joey", correct: false }
        ],
    },
    {   number: 11,
        question: "What is the name of Joey Tribbiani's soap opera character?",
        answers: [
            { text: "Dr. Richard Burke", correct: false },
            { text: "Dr. Drake Ramoray", correct: true },
            { text: "Dr. Leonard Green", correct: false },
            { text: "Dr. Barry Farber", correct: false }
        ],
    },
    {   number: 12,
        question: 'Which character famously said, "Oh. My. God."?',
        answers: [
            { text: "Gunther", correct: false },
            { text: "Chandler", correct: false }, 
            { text: "Janice", correct: true },
            { text: "Monica", correct: false }
        ],
    },
    {   number: 13,
        question: "What is the full name of Ross Geller's second wife?",
        answers: [
            { text: "Emily Waltham", correct: true },
            { text: "Carol Willick", correct: false },
            { text: "Janice Litman-Goralnik", correct: false },
            { text: "Julie Graff", correct: false }
        ],
    },
    {   number: 14,
        question: "What is the occupation of Rachel Green in the early seasons of the show?",
        answers: [
            { text: "Chef", correct: false },
            { text: "Waitress", correct: true },
            { text: "Fashion Buyer", correct: false },
            { text: "Personal Shopper", correct: false }
        ],
    },
    {   number: 15,
        question: "What is the profession of Ross Geller?",
        answers: [
            { text: "Teacher", correct: false },
            { text: "Fashion Designer", correct: false },
            { text: "Actor", correct: false },
            { text: "Paleontologist", correct: true }
        ],
    },
    {   number: 16,
        question: "What is the name of Joey's agent who represents him throughout the series?",
        answers: [
            { text: "Estelle", correct: true },
            { text: "Lauren", correct: false },
            { text: "Sally", correct: false },
            { text: "Edna", correct: false }
        ],
    },
    {   number: 17,
        question: "What is the name of Phoebes sister?",
        answers: [
            { text: "Regina", correct: false },
            { text: "Jill", correct: false },
            { text: "Ursula", correct: true },
            { text: "Janice", correct: false }
        ],
    },
    {   number: 18,
        question: "Who gets trapped in an ATM vestibule with a supermodel?",
        answers: [
            { text: "Joey", correct: false },
            { text: "Ross", correct: false },
            { text: "Gunther", correct: false },
            { text: "Chandler", correct: true }
        ],
    },
    {   number: 19,
        question: "What is Monica Geller obsessive-compulsive about?",
        answers: [
            { text: "Cleaning", correct: true },
            { text: "Shopping", correct: false },
            { text: "Cooking", correct: false },
            { text: "Painting", correct: false }
        ],
    },
    {   number: 20,
        question: "What is the name of Joey's stuffed penguin?",
        answers: [
            { text: "Fluffy", correct: false },
            { text: "Snuggles", correct: false },
            { text: "Hugsy", correct: true },
            { text: "Puddles", correct: false }
        ],
    },
    {   number: 21,
        question: "What did Phoebe legally change her name to?",
        answers: [
            { text: "Gladys", correct: false },
            { text: "Princess Consuela Banana-Hammock", correct: true },
            { text: "Anastasia Beaverhausen", correct: false },
            { text: "Regina Phalange", correct: false }
        ],
    },
    {   number: 22,
        question: "What type of animal is 'Hugsy'?",
        answers: [
            { text: "Bear", correct: false },
            { text: "Dog", correct: false },
            { text: "Panda", correct: false },
            { text: "Penguine", correct: true }
        ],
    },
    {   number: 23,
        question: "Which Friend lived on the street when they were younger?",
        answers: [
            { text: "Phoebe", correct: true },
            { text: "Joey", correct: false },
            { text: "Ross", correct: false },
            { text: "Chandler", correct: false }
        ],
    },
    {   number: 24,
        question: "What surrounds the peep-hole on the door of Monica's apartment?",
        answers: [
            { text: "Nothing", correct: false },
            { text: "A flowers wreath", correct: false },
            { text: "A picture frame", correct: true },
            { text: "Strings of lights", correct: false }
        ],
    },
    {   number: 25,
        question: "How many babies are born on the show?",
        answers: [
            { text: "3", correct: false },
            { text: "10", correct: false },
            { text: "4", correct: false },
            { text: "7", correct: true }
        ],
    },
    {   number: 26,
        question: "Who dated 'The Screamer', 'The Yeti' and the man with the 'Innapropriate Sister'?",
        answers: [
            { text: "Rachel", correct: true },
            { text: "Phoebe", correct: false },
            { text: "Monica", correct: false },
            { text: "Janice", correct: false }
        ],
    },
    {   number: 27,
        question: "How many seasons of the show were made?",
        answers: [
            { text: "8", correct: false },
            { text: "12", correct: false },
            { text: "10", correct: true },
            { text: "6", correct: false }
        ],
    },
    {   number: 28,
        question: "Who plays 'Will', an old friend of Monica and Ross' from high school who hates Rachel?",
        answers: [
            { text: "Bruce Willis", correct: false },
            { text: "Robin Williams", correct: false },
            { text: "Charlie Sheen", correct: false },
            { text: "Brad Pitt", correct: true }
        ],
    },
    {   number: 29,
        question: "What is Joey's ethnic origin?",
        answers: [
            { text: "Italian", correct: true },
            { text: "Spanish", correct: false },
            { text: "Greek", correct: false },
            { text: "Portoguese", correct: false }
        ],
    },
    {   number: 30,
        question: "Where is Chandler forced to work after falling asleep in a meeting?",
        answers: [
            { text: "Chicago", correct: false },
            { text: "Las Vegas", correct: false },
            { text: "Tulsa", correct: true },
            { text: "Springfield", correct: false }
        ],
    },
    {   number: 31,
        question: "What is the name of the neighbour who leaves everything to Monica and Rachel when he dies?",
        answers: [
            { text: "Mr. Treeger", correct: false },
            { text: "Ugly Naked Guy", correct: false },
            { text: "Gunther", correct: false },
            { text: "Mr. Heckles", correct: true }
        ],
    },
    {   number: 32,
        question: "Which friend of her parents does Monica date?",
        answers: [
            { text: "Richard Burke", correct: true },
            { text: "Pete Becker", correct: false },
            { text: "Tag Jones", correct: false },
            { text: "Barry Farber", correct: false }
        ],
    },
    {   number: 33,
        question: "In 'The one with the lottery', what causes Phoebe to drop the bowl of tickets?",
        answers: [
            { text: "A backfiring car", correct: false },
            { text: "She got pushed", correct: false },
            { text: "A flying pigeon", correct: true },
            { text: "A bat scared her", correct: false }
        ],
    },
    {   number: 34,
        question: "What is the nickname of the nude man in the apartment across from Monica's?",
        answers: [
            { text: "That Naked Guy", correct: false },
            { text: "Mr. Heckles", correct: false },
            { text: "Mr. Treeger", correct: false },
            { text: "Ugly Naked Guy", correct: true }
        ],
    },
    {   number: 35,
        question: "What does Monica's dad give her to compensate ruining her childhood possesions?",
        answers: [
            { text: "A car", correct: true },
            { text: "A tv", correct: false },
            { text: "Money", correct: false },
            { text: "A box of chocolates", correct: false }
        ],
    },
    {   number: 36,
        question: "Who is secretly married to a Canadian ice dancer?",
        answers: [
            { text: "Monica", correct: false },
            { text: "Joey", correct: false },
            { text: "Phoebe", correct: true },
            { text: "Chandler", correct: false }
        ],
    },
    {   number: 37,
        question: "What type of dessert does Rachel try to make in the Thanksgiving episode in season 6?",
        answers: [
            { text: "Brownies", correct: false },
            { text: "Cheesecake", correct: false },
            { text: "Cherrie pie", correct: false },
            { text: "Trifle", correct: true }
        ],
    },
    {   number: 38,
        question: "Which actress plays the woman who gets revenge on Chandler for childhood teasing?",
        answers: [
            { text: "Julia Roberts", correct: true },
            { text: "Sandra Bullock", correct: false },
            { text: "Reese Witherspoon", correct: false },
            { text: "Winona Ryder", correct: false }
        ],
    },
    {   number: 39,
        question: "Which character says the very first line of the very first episode of the show?",
        answers: [
            { text: "Chandler", correct: false },
            { text: "Joey", correct: false },
            { text: "Monica", correct: true },
            { text: "Gunther", correct: false }
        ],
    },
    {   number: 40,
        question: "Joey stars in a musical about which historical figure?",
        answers: [
            { text: "Joan of Arc", correct: false },
            { text: "Napoleon", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Sigmund Freud", correct: true }
        ],
    },
    {   number: 41,
        question: "Monica dated a millionair, what was his name?",
        answers: [
            { text: "Pete", correct: true },
            { text: "John", correct: false },
            { text: "Barry", correct: false },
            { text: "Jack", correct: false }
        ],
    },
    {   number: 42,
        question: "Who got stuck in a pair of leather pants during a date?",
        answers: [
            { text: "Monica", correct: false },
            { text: "Chandler", correct: false },
            { text: "Ross", correct: true },
            { text: "Rachel", correct: false }
        ],
    },
    {   number: 43,
        question: "Which friend hates Thanksgiving?",
        answers: [
            { text: "Joey", correct: false },
            { text: "Monica", correct: false },
            { text: "Rachel", correct: false },
            { text: "Chandler", correct: true }
        ],
    },
    {   number: 44,
        question: "What was the name of the comic book Ross made when he was young?",
        answers: [
            { text: "Science boy", correct: true },
            { text: "Dinosaur boy", correct: false },
            { text: "Spider boy", correct: false },
            { text: "Monkey boy", correct: false }
        ],
    },
    {   number: 45,
        question: "Why did Chandler spend thanksgiving inside a wooden box?",
        answers: [
            { text: "He ate Joeys pizza", correct: false },
            { text: "He ate everything", correct: false },
            { text: "He kissed Joeys girlfriend", correct: true },
            { text: "He burned the turkey", correct: false }
        ],
    },
    {   number: 46,
        question: "Monica kept a closet in her aparment locked, what did it contain?",
        answers: [
            { text: "Nothing, it was empty", correct: false },
            { text: "Expensive clothes", correct: false },
            { text: "Color-coded towels", correct: false },
            { text: "It was filled with junk", correct: true }
        ],
    },
];
    /*{ number: 47,
        question: "",
        answers: [
            { text: "Estelle", correct: true },
            { text: "Lauren", correct: false },
            { text: "Sally", correct: false },
            { text: "Edna", correct: false }
        ],
    },
    {   //48
        number: 48,
        question: "",
        answers: [
            { text: "Regina", correct: false },
            { text: "Jill", correct: false },
            { text: "Ursula", correct: true },
            { text: "Janice", correct: false }
        ]
    },
    {   //49
        number: 49,
        question: "",
        answers: [
            { text: "Joey", correct: false },
            { text: "Ross", correct: false },
            { text: "Gunther", correct: false },
            { text: "Chandler", correct: true }
        ],
    },
    {   //50
        number: 50,
        question: "",
        answers: [
            { text: "Cleaning", correct: true },
            { text: "Shopping", correct: false },
            { text: "Cooking", correct: false },
            { text: "Painting", correct: false }
        ]
    }
];
*/

let usedQuestionIndices = [];