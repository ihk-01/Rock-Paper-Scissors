#**The Ultimate Rock Paper Scissors Game**  

##**Description**  
Welcome and thank you for playing! I'm Ingrid Kilmer. I built this game because it was a homework assignment in my Women In Software Engineering class at PerScholas. I've been programming in HTML, CSS, and JavaScript for two months. This is the first game I've built. So, while there is much room for improvement, the game works and meets the requirements of my assignment. :) And, I learned a lot about HTML, CSS and JavaScript along the way. I hope you like it!  

##**How does the game work?**  
It's you against the computer. In this classic game, you'll first be prompted to choose how many rounds you want to play in the game. Next, you click on one of three objects to play against your opponent: rock, paper, or scissors. Just like the manual game, rock wins against scissors, scissors win against paper, and paper wins against rock. The computer will randomly choose on of the three objects after you make your selection. If you win, you gain a point on the TOP scoreboard for that round. If you lose, Player2 gains a point on the TOP scoreboard. If the computer chooses the same choice you made, then it's a draw and there is no winner for that round and no points on the scoreboard. Play continues till the end of the number of rounds you initially chose. Whoever wins the most rounds gets a game point on the BOTTOM scoreboard. If it's a tie, nobody gets a point, either on the top or bottom scoreboard.   

After the first game, you'll again be prompted to enter the number of rounds you want to play in the next game. Repeat play until the end of the next game. The winner will again get a game point on the bottom scoreboard. Games continue until 2 out of 3 games are won by one of the players and a winner is declared.  

If you want to play another set of 3 games (or more if there is a tie), then press the blue "Play Again?" button on the left side of the screen.  

And that's it!  

##**Mentions**  
There are several people who helped me with this project. First, my instructors, Devin Kenney and Vicky Phung, who are amazingly brilliant coders and even more patient than they are brilliant, which is saying a lot. Next, my friend Todd Girvin helped me work through some complex problems associated with timing, display of results, and game flow. I watched a video by freecodecamp.org which gave me not only the functions that I needed for basic play, but also taught me how to structure the code in my first game. Here is a [link]: (https://www.youtube.com/watch?v=jaVNP3nIAv0). And, a big thanks to my classmates for their encouragement and their willingness to jump in and help. I also want to give credit for the free graphics from icons-icons.com for the rock, paper, and scissors. I also used [coolors.com] to choose a color scheme.  

##**Challenges**
There were a few challenges with this project. First, I learned the value of designing the entire game before starting to code. I was anxious to get started so that I could finish in time and ran into problems when I tried to meet a requirement to win 2 games out of 3. It had me first creating a scoreboard for the "rounds" won and then creating another scoreboard for the "games" won. If I had to do it again, I would try to design the game with one scoreboard, keeping temporary score of the rounds won. Also, I would make the reset button appear only as needed instead of enabling a static button after a set number of games is played. I would also structure the program differently, trying to work more with the input from the user than event listeners to move game play forward, if possible.This way, I think the code would be cleaner and would have fewer calls from one function to the next, which increased its complexity.  

##**Successes**  
I'm really proud of the fact that I could work through the logic to win 2 out of 3 games. That part was tricky and required some thought about how to zero out scores, update a new scoreboard, and enable a disabled replay button. Many thanks to Devin Kenney and Vicky Phung for helping me think through it and forcing me understand how functions and scope work, both individually and together.   

##**Future Plans**  
In the future, I'd like to add winnings for the winner and a store where they can buy things they can use in the game with their winnings. I'd also like to have people playing against each other instead of just against the computer.  
