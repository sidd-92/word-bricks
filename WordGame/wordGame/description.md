# <center>The Word Scramble</center>
## **<center>Overview</center>** 

LIST OF MODULES NEEDED
1. PLAY GAME - MAIN PAGE
        1.1 PICK A WORD
        1.2 WAIT TO SOLVE
            1.2.1 SHOW JUMBLED
            1.2.2 GET WORD FROM USER
            1.2.3 HANDLE ANSWER 

---
A Small word game which is same like the word cookie game in the mobile phone game.The user will be provided with a list of letters and needs to guess the word from those letters.
---
---
# Changes To Be Made
 - [X] **Using Command Line Interface to ask questions**
- [ ] **Change the flow of the program and make it more readable and seperate**
- [ ] **Use modules/functions for each logic**
- [ ] **Make the main game function flow easy**
---
## **Goals**
---
1. Create a working model of the version 0 of the game
2. Contains a few words and user will be able to guess words the same way
3. This game should use angular as the front end
4. This game will have a scoring system also
---
## **Program Specifications**
---
1. Tasks
    1. Keep track of states
        1. State 1 : *Start of the game*
        2. State 2 : *Middle of the game*
        3. State 3 : *End of the game*
2. Basic Terminology
    1. *levelManager* : keeps track of the levels
    2. *scoreManager* : Keeps track of the scores in each level
    3. *stateManager* : keeps track of the words completed
    4. *subWordCompleted* : keeps track of whether the sub word is completed

---
# <center> **Game Mechanism**


**State 1 : Start of game**

- The user will be provided a list of jumbled letters.
    - To do this you need to “shuffle” the letters    
- User will provide a word from that list of letters


**State 2 : middle of game**

- if the user is right from the dictionary of words, then got to stage 3, otherwise go to ii
- if the user is wrong then give him a another chance, currently not taking much into account for the number of tries.

**State 3 : end of game**

- If the user is getting the words right, then track the score using **“ScoreManager”**
- If the score is equal to the length of the array then he got all the words
- retain the letters until all the words are completed: 
***levelManager : level 1 = givenWord***
- As soon as the ***"subWordCompleted".length == answers.length***
- set ***stateManager = level 1 = giveWord***
- set levelManager to next random word, excluding the level 1




