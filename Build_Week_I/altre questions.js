const question = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What is inheritance in object-oriented programming?",
        correct_answer: "The ability of a class to inherit attributes and methods from another class",
        incorrect_answers: [
            "The modification of an object's attributes during runtime",
            "The use of private variables within a class",
            "The ability of a class to hide implementation details"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What is a 'kernel' in an operating system?",
        correct_answer: "The part of the operating system that manages hardware resources",
        incorrect_answers: [
            "A programming language used for OS development",
            "A library of common functions used by programs",
            "A type of file system"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "Which protocol is commonly used to send emails over the Internet?",
        correct_answer: "SMTP",
        incorrect_answers: [
            "FTP",
            "HTTP",
            "DHCP"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does the acronym 'VPN' stand for?",
        correct_answer: "Virtual Private Network",
        incorrect_answers: [
            "Very Personal Network",
            "Virtual Public Network",
            "Visual Private Network"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "Which language is commonly used for Android app development?",
        correct_answer: "Java",
        incorrect_answers: [
            "Swift",
            "C#",
            "Python"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does the acronym 'RAM' stand for?",
        correct_answer: "Random Access Memory",
        incorrect_answers: [
            "Read-Only Memory",
            "Remote Access Module",
            "Real-time Automated Memory"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "Which programming language is mainly used for client-side web development?",
        correct_answer: "JavaScript",
        incorrect_answers: [
            "Python",
            "PHP",
            "Ruby"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What is SQL used for?",
        correct_answer: "Querying and managing relational databases",
        incorrect_answers: [
            "A programming language",
            "An operating system",
            "A network protocol"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What is the primary goal of supervised learning algorithms?",
        correct_answer: "Classifying or predicting based on labeled training data",
        incorrect_answers: [
            "Training a model without labels",
            "Training a model without supervision",
            "Improving the performance of an existing model without additional data"
        ]
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What is the purpose of the 'else' statement in programming?",
        correct_answer: "To specify a block of code to be executed when the condition in the 'if' statement is false",
        incorrect_answers: [
            "To terminate the program",
            "To create a loop",
            "To define a function"
        ]
    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Qual è il nome del protagonista principale di One Piece?",
        correct_answer: "Luffy",
        incorrect_answer: ["Zoro",
            "Sanji",
            "Nami"
        ],


    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Quale frutto del diavolo mangia Luffy?",
        correct_answer: "Gomu Gomu no mi",
        incorrect_answer: ["Mera Mera no mi",
            "Ope Ope no mi",
            "Gura Gura no mi"],

    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Qual è il sogno di Luffy?",
        correct_answer: "Diventare il re dei pirati",
        incorrect_answer: ["Essere il più forte del mondo",
            "Diventare un rivoluzionario",
            "Essere un marine"],

    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Chi è lo spadaccino della ciurma di Luffy?",
        correct_answer: "Roronoa Zoro",
        incorrect_answer: ["Sanji",
            "Trafalgar Law",
            "Marco"],
    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Qual è il nome della nave attuale di Luffy?",
        correct_answer: "Thousand Sunny",
        incorrect_answer: ["Going Merry",
            "Red Force",
            "Queen Mama Chanter"],

    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Chi è il cuoco della ciurma di Cappello di Paglia?",
        correct_answer: "Sanji",
        incorrect_answer: ["Nami",
            "Usopp",
            "Franky"],

    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Qual è la frase tipica di Luffy?",
        correct_answer: "Andiamo!",
        incorrect_answer: ["Ora ci divertiremo!", "Mi dispiace", "Non ho fame", "Andiamo!"],
    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Qual è il Frutto del diavolo di Nico Robin?",
        correct_answer: "Hana Hana no mi",
        incorrect_answer: ["Bara Bara no Mi", "Kilo Kilo no Mi", "Bane Bane no Mi"],

    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Qual è il nome del principale antagonista della serie?",
        correct_answer: "Marshall D. Teach",
        incorrect_answer: ["Akainu",
            "Kaido",
            "Barbabianca",],

    },
    {
        category: "Anime:One piece",
        type: "single",
        difficulty: "easy",
        question: "Chi è il vice-capitano della ciurma di Cappello di Paglia?",
        correct_answer: "Roronoa Zoro",
        incorrect_answer: ["Sanji",
            "Nico Robin",
            "Usopp"],
    },

    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è lo stato nativo di Nami?",
        correct_answer: "Villaggio di Arlong",
        incorrect_answers: ["Villaggio di Loguetown",
            "Villaggio di Cocoyasi",
            "Villaggio di Shimotsuki"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è il nome del padre di Portgas D. Ace?",
        correct_answer: "Gol D. Roger",
        incorrect_answers: ["Monkey D. Dragon",
            "Edward Newgate",
            "Silvers Rayleigh"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Chi ha sconfitto Bartholomew Kuma durante la Guerra di Marineford?",
        correct_answer: "Marshall D. Teach",
        incorrect_answers: ["Donquixote Doflamingo",
            "Boa Hancock",
            "Borsalino"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è la sigla che identifica la flotta di Capone Bege?",
        correct_answer: "Fire Tank Pirates",
        incorrect_answers: ["Sun Pirates",
            "Heart Pirates",
            "Barto Club"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è il vero nome del personaggio noto come Corazon?",
        correct_answer: "Donquixote Rosinante",
        incorrect_answers: ["Trafalgar Law",
            "Vergo",
            "Dellinger"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "In quale luogo è stato nascosto la Thousand Sunny durante il timeskip?",
        correct_answer: "Archipelago Sabaody",
        incorrect_answers: ["Isola degli uomini-pesce",
            "Punk Hazard",
            "Whole Cake Island"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è la posizione di Sanji nella Germa 66?",
        correct_answer: "Terzo figlio",
        incorrect_answers: ["Secondo figlio",
            "Primo figlio",
            "Quarto figlio"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è il nome della spada di Tashigi?",
        correct_answer: "Shigure",
        incorrect_answers: ["Wado Ichimonji",
            "Sandai Kitetsu",
            "Yubashiri"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Quale è l'abilità di Basil Hawkins nella serie?",
        correct_answer: "Wara Wara no Mi",
        incorrect_answers: ["Gomu Gomu no Mi",
            "Soru Soru no Mi",
            "Nikyu Nikyu no Mi"]
    },
    {
        category: "Anime:One piece",
        type: "multiple",
        difficulty: "medium",
        question: "Qual è il nome dell'isola in cui Luffy si é allenato dopo la guerra di Marineford?",
        correct_answer: "Isola delle Donne",
        incorrect_answers: ["Isola degli uomini-pesce",
            "Isola delle Api",
            "Isola di Kuraigana"]
    }
]