/**
 * Movie Database - IMDb-style data
 * Organized by genre with cover art, ratings, and details
 */

const MovieDatabase = {
    action: [
        {
            id: 'action-1',
            title: 'The Dark Knight',
            year: 2008,
            rating: 9.0,
            director: 'Christopher Nolan',
            cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
            plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
            runtime: '152 min',
            genre: ['Action', 'Crime', 'Drama']
        },
        {
            id: 'action-2',
            title: 'Mad Max: Fury Road',
            year: 2015,
            rating: 8.1,
            director: 'George Miller',
            cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
            plot: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
            poster: 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            runtime: '120 min',
            genre: ['Action', 'Adventure', 'Sci-Fi']
        },
        {
            id: 'action-3',
            title: 'Inception',
            year: 2010,
            rating: 8.8,
            director: 'Christopher Nolan',
            cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
            plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
            runtime: '148 min',
            genre: ['Action', 'Sci-Fi', 'Thriller']
        },
        {
            id: 'action-4',
            title: 'The Matrix',
            year: 1999,
            rating: 8.7,
            director: 'Lana Wachowski, Lilly Wachowski',
            cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
            plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            runtime: '136 min',
            genre: ['Action', 'Sci-Fi']
        },
        {
            id: 'action-5',
            title: 'John Wick',
            year: 2014,
            rating: 7.4,
            director: 'Chad Stahelski',
            cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
            plot: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg',
            runtime: '101 min',
            genre: ['Action', 'Thriller']
        },
        {
            id: 'action-6',
            title: 'Die Hard',
            year: 1988,
            rating: 8.2,
            director: 'John McTiernan',
            cast: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
            plot: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            runtime: '132 min',
            genre: ['Action', 'Thriller']
        }
    ],
    comedy: [
        {
            id: 'comedy-1',
            title: 'The Grand Budapest Hotel',
            year: 2014,
            rating: 8.1,
            director: 'Wes Anderson',
            cast: ['Ralph Fiennes', 'F. Murray Abraham', 'Mathieu Amalric'],
            plot: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg',
            runtime: '99 min',
            genre: ['Comedy', 'Drama']
        },
        {
            id: 'comedy-2',
            title: 'Superbad',
            year: 2007,
            rating: 7.6,
            director: 'Greg Mottola',
            cast: ['Michael Cera', 'Jonah Hill', 'Christopher Mintz-Plasse'],
            plot: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2VkMDg4ZTYtN2M3Yy00NWZiLWE2ODEtZjU5MjZkYWNkNGEzXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_SX300.jpg',
            runtime: '113 min',
            genre: ['Comedy']
        },
        {
            id: 'comedy-3',
            title: 'Groundhog Day',
            year: 1993,
            rating: 8.0,
            director: 'Harold Ramis',
            cast: ['Bill Murray', 'Andie MacDowell', 'Chris Elliott'],
            plot: 'A weatherman finds himself inexplicably living the same day over and over again.',
            poster: 'https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            runtime: '101 min',
            genre: ['Comedy', 'Fantasy', 'Romance']
        },
        {
            id: 'comedy-4',
            title: 'The Big Lebowski',
            year: 1998,
            rating: 8.1,
            director: 'Joel Coen, Ethan Coen',
            cast: ['Jeff Bridges', 'John Goodman', 'Julianne Moore'],
            plot: 'Jeff "The Dude" Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_SX300.jpg',
            runtime: '117 min',
            genre: ['Comedy', 'Crime']
        },
        {
            id: 'comedy-5',
            title: 'Monty Python and the Holy Grail',
            year: 1975,
            rating: 8.2,
            director: 'Terry Gilliam, Terry Jones',
            cast: ['Graham Chapman', 'John Cleese', 'Eric Idle'],
            plot: 'King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many very silly obstacles.',
            poster: 'https://m.media-amazon.com/images/M/MV5BN2IyNTE4YzUtZWU0Mi00MGIwLTgyMmQtMzQ4YzQxYWNlYWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            runtime: '91 min',
            genre: ['Comedy', 'Adventure']
        },
        {
            id: 'comedy-6',
            title: 'Airplane!',
            year: 1980,
            rating: 7.7,
            director: 'Jim Abrahams, David Zucker, Jerry Zucker',
            cast: ['Robert Hays', 'Julie Hagerty', 'Leslie Nielsen'],
            plot: 'A man afraid to fly must ensure that a plane lands safely after the pilots become sick.',
            poster: 'https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDI3Ni00ZDg3LTlhMGItZmNjZmRlYWE5ZGY0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            runtime: '88 min',
            genre: ['Comedy']
        }
    ],
    drama: [
        {
            id: 'drama-1',
            title: 'The Shawshank Redemption',
            year: 1994,
            rating: 9.3,
            director: 'Frank Darabont',
            cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
            plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            runtime: '142 min',
            genre: ['Drama']
        },
        {
            id: 'drama-2',
            title: 'The Godfather',
            year: 1972,
            rating: 9.2,
            director: 'Francis Ford Coppola',
            cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
            plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            runtime: '175 min',
            genre: ['Drama', 'Crime']
        },
        {
            id: 'drama-3',
            title: 'Forrest Gump',
            year: 1994,
            rating: 8.8,
            director: 'Robert Zemeckis',
            cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
            plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
            poster: 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            runtime: '142 min',
            genre: ['Drama', 'Romance']
        },
        {
            id: 'drama-4',
            title: 'Good Will Hunting',
            year: 1997,
            rating: 8.3,
            director: 'Gus Van Sant',
            cast: ['Robin Williams', 'Matt Damon', 'Ben Affleck'],
            plot: 'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
            poster: 'https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            runtime: '126 min',
            genre: ['Drama', 'Romance']
        },
        {
            id: 'drama-5',
            title: 'The Green Mile',
            year: 1999,
            rating: 8.6,
            director: 'Frank Darabont',
            cast: ['Tom Hanks', 'Michael Clarke Duncan', 'David Morse'],
            plot: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg',
            runtime: '189 min',
            genre: ['Drama', 'Fantasy', 'Mystery']
        },
        {
            id: 'drama-6',
            title: 'A Beautiful Mind',
            year: 2001,
            rating: 8.2,
            director: 'Ron Howard',
            cast: ['Russell Crowe', 'Ed Harris', 'Jennifer Connelly'],
            plot: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            runtime: '135 min',
            genre: ['Drama', 'Biography']
        }
    ],
    horror: [
        {
            id: 'horror-1',
            title: 'The Shining',
            year: 1980,
            rating: 8.4,
            director: 'Stanley Kubrick',
            cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
            plot: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
            poster: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
            runtime: '146 min',
            genre: ['Horror', 'Drama']
        },
        {
            id: 'horror-2',
            title: 'The Exorcist',
            year: 1973,
            rating: 8.1,
            director: 'William Friedkin',
            cast: ['Ellen Burstyn', 'Max von Sydow', 'Linda Blair'],
            plot: 'When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.',
            poster: 'https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
            runtime: '122 min',
            genre: ['Horror']
        },
        {
            id: 'horror-3',
            title: 'Get Out',
            year: 2017,
            rating: 7.7,
            director: 'Jordan Peele',
            cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'],
            plot: 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
            runtime: '104 min',
            genre: ['Horror', 'Mystery', 'Thriller']
        },
        {
            id: 'horror-4',
            title: 'Hereditary',
            year: 2018,
            rating: 7.3,
            director: 'Ari Aster',
            cast: ['Toni Collette', 'Milly Shapiro', 'Gabriel Byrne'],
            plot: 'A grieving family is haunted by tragic and disturbing occurrences.',
            poster: 'https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg',
            runtime: '127 min',
            genre: ['Horror', 'Drama', 'Mystery']
        },
        {
            id: 'horror-5',
            title: 'A Quiet Place',
            year: 2018,
            rating: 7.5,
            director: 'John Krasinski',
            cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds'],
            plot: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SX300.jpg',
            runtime: '90 min',
            genre: ['Horror', 'Drama', 'Sci-Fi']
        },
        {
            id: 'horror-6',
            title: 'The Conjuring',
            year: 2013,
            rating: 7.5,
            director: 'James Wan',
            cast: ['Patrick Wilson', 'Vera Farmiga', 'Ron Livingston'],
            plot: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg',
            runtime: '112 min',
            genre: ['Horror', 'Mystery', 'Thriller']
        }
    ],
    scifi: [
        {
            id: 'scifi-1',
            title: 'Interstellar',
            year: 2014,
            rating: 8.6,
            director: 'Christopher Nolan',
            cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
            plot: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            runtime: '169 min',
            genre: ['Sci-Fi', 'Drama', 'Adventure']
        },
        {
            id: 'scifi-2',
            title: 'Blade Runner 2049',
            year: 2017,
            rating: 8.0,
            director: 'Denis Villeneuve',
            cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
            plot: 'Young Blade Runner K\'s discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who\'s been missing for thirty years.',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg',
            runtime: '164 min',
            genre: ['Sci-Fi', 'Drama', 'Mystery']
        },
        {
            id: 'scifi-3',
            title: 'The Terminator',
            year: 1984,
            rating: 8.0,
            director: 'James Cameron',
            cast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn'],
            plot: 'A cyborg assassin from the future attempts to find and kill a young woman who is destined to give birth to a warrior who will save mankind.',
            poster: 'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            runtime: '107 min',
            genre: ['Sci-Fi', 'Action']
        },
        {
            id: 'scifi-4',
            title: '2001: A Space Odyssey',
            year: 1968,
            rating: 8.3,
            director: 'Stanley Kubrick',
            cast: ['Keir Dullea', 'Gary Lockwood', 'William Sylvester'],
            plot: 'After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            runtime: '149 min',
            genre: ['Sci-Fi', 'Adventure', 'Mystery']
        },
        {
            id: 'scifi-5',
            title: 'Arrival',
            year: 2016,
            rating: 7.9,
            director: 'Denis Villeneuve',
            cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
            plot: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg',
            runtime: '116 min',
            genre: ['Sci-Fi', 'Drama', 'Mystery']
        },
        {
            id: 'scifi-6',
            title: 'Ex Machina',
            year: 2014,
            rating: 7.7,
            director: 'Alex Garland',
            cast: ['Alicia Vikander', 'Domhnall Gleeson', 'Oscar Isaac'],
            plot: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg',
            runtime: '108 min',
            genre: ['Sci-Fi', 'Drama', 'Thriller']
        }
    ],
    romance: [
        {
            id: 'romance-1',
            title: 'The Notebook',
            year: 2004,
            rating: 7.8,
            director: 'Nick Cassavetes',
            cast: ['Ryan Gosling', 'Rachel McAdams', 'Gena Rowlands'],
            plot: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_SX300.jpg',
            runtime: '123 min',
            genre: ['Romance', 'Drama']
        },
        {
            id: 'romance-2',
            title: 'Eternal Sunshine of the Spotless Mind',
            year: 2004,
            rating: 8.3,
            director: 'Michel Gondry',
            cast: ['Jim Carrey', 'Kate Winslet', 'Tom Wilkinson'],
            plot: 'When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg',
            runtime: '108 min',
            genre: ['Romance', 'Drama', 'Sci-Fi']
        },
        {
            id: 'romance-3',
            title: 'Before Sunrise',
            year: 1995,
            rating: 8.1,
            director: 'Richard Linklater',
            cast: ['Ethan Hawke', 'Julie Delpy', 'Andrea Eckert'],
            plot: 'A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.',
            poster: 'https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            runtime: '101 min',
            genre: ['Romance', 'Drama']
        },
        {
            id: 'romance-4',
            title: 'Pride & Prejudice',
            year: 2005,
            rating: 7.8,
            director: 'Joe Wright',
            cast: ['Keira Knightley', 'Matthew Macfadyen', 'Brenda Blethyn'],
            plot: 'Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_SX300.jpg',
            runtime: '129 min',
            genre: ['Romance', 'Drama']
        },
        {
            id: 'romance-5',
            title: 'La La Land',
            year: 2016,
            rating: 8.0,
            director: 'Damien Chazelle',
            cast: ['Ryan Gosling', 'Emma Stone', 'Rosemarie DeWitt'],
            plot: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg',
            runtime: '128 min',
            genre: ['Romance', 'Musical', 'Drama']
        },
        {
            id: 'romance-6',
            title: 'Casablanca',
            year: 1942,
            rating: 8.5,
            director: 'Michael Curtiz',
            cast: ['Humphrey Bogart', 'Ingrid Bergman', 'Paul Henreid'],
            plot: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.',
            poster: 'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg',
            runtime: '102 min',
            genre: ['Romance', 'Drama', 'War']
        }
    ],
    thriller: [
        {
            id: 'thriller-1',
            title: 'Se7en',
            year: 1995,
            rating: 8.6,
            director: 'David Fincher',
            cast: ['Morgan Freeman', 'Brad Pitt', 'Kevin Spacey'],
            plot: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
            poster: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            runtime: '127 min',
            genre: ['Thriller', 'Crime', 'Drama']
        },
        {
            id: 'thriller-2',
            title: 'The Silence of the Lambs',
            year: 1991,
            rating: 8.6,
            director: 'Jonathan Demme',
            cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
            plot: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
            poster: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
            runtime: '118 min',
            genre: ['Thriller', 'Crime', 'Drama']
        },
        {
            id: 'thriller-3',
            title: 'Gone Girl',
            year: 2014,
            rating: 8.1,
            director: 'David Fincher',
            cast: ['Ben Affleck', 'Rosamund Pike', 'Neil Patrick Harris'],
            plot: 'With his wife\'s disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it\'s suspected that he may not be innocent.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg',
            runtime: '149 min',
            genre: ['Thriller', 'Drama', 'Mystery']
        },
        {
            id: 'thriller-4',
            title: 'Shutter Island',
            year: 2010,
            rating: 8.2,
            director: 'Martin Scorsese',
            cast: ['Leonardo DiCaprio', 'Emily Mortimer', 'Mark Ruffalo'],
            plot: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
            poster: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            runtime: '138 min',
            genre: ['Thriller', 'Mystery']
        },
        {
            id: 'thriller-5',
            title: 'Prisoners',
            year: 2013,
            rating: 8.1,
            director: 'Denis Villeneuve',
            cast: ['Hugh Jackman', 'Jake Gyllenhaal', 'Viola Davis'],
            plot: 'When Keller Dover\'s daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads.',
            poster: 'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_SX300.jpg',
            runtime: '153 min',
            genre: ['Thriller', 'Crime', 'Drama']
        },
        {
            id: 'thriller-6',
            title: 'Zodiac',
            year: 2007,
            rating: 7.7,
            director: 'David Fincher',
            cast: ['Jake Gyllenhaal', 'Robert Downey Jr.', 'Mark Ruffalo'],
            plot: 'Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer.',
            poster: 'https://m.media-amazon.com/images/M/MV5BN2UwNDc5NmEtNjVjZS00OTI5LWE5YjctMWM3ZjBiZGYwMGI2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
            runtime: '157 min',
            genre: ['Thriller', 'Crime', 'Drama']
        }
    ]
};

// Genre metadata
const GenreInfo = {
    action: {
        title: 'Action',
        emoji: '💥',
        description: 'High-octane thrills, explosive sequences, and heart-pounding adventures',
        color: '#ef4444'
    },
    comedy: {
        title: 'Comedy',
        emoji: '😂',
        description: 'Laughter, wit, and feel-good moments that brighten your day',
        color: '#f59e0b'
    },
    drama: {
        title: 'Drama',
        emoji: '🎭',
        description: 'Compelling stories that explore the depth of human emotion',
        color: '#8b5cf6'
    },
    horror: {
        title: 'Horror',
        emoji: '👻',
        description: 'Spine-chilling tales that will keep you up at night',
        color: '#dc2626'
    },
    scifi: {
        title: 'Sci-Fi',
        emoji: '🚀',
        description: 'Journey beyond reality into worlds of imagination and possibility',
        color: '#3b82f6'
    },
    romance: {
        title: 'Romance',
        emoji: '❤️',
        description: 'Love stories that touch the heart and warm the soul',
        color: '#ec4899'
    },
    thriller: {
        title: 'Thriller',
        emoji: '🔪',
        description: 'Edge-of-your-seat suspense that keeps you guessing',
        color: '#6366f1'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MovieDatabase, GenreInfo };
}
