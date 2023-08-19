Chitter Challenge
=================

Hello! Thanks for taking the time to look at my Chitter challenge, I have put a lot of effort on it, and may keep updating it in the future as it's got a lot of room to improve.

Technologies: 

    I have developed the app mainly on JavaSCript, the data layer is MongoDB, for the backend I have used Mongoose, Node, Express, and tested extensively with PostMan while in development, and with Mocha so I could include some tests in the git repository (run 'npm run test' to test the back end).

    The front end of my app is a simple react JS application. it has been linted, but time constraints have prevented me from testing it to the extent I would have liked.

**Disclaimer**
    The code I am submitted is mostly my own, but you may recognise the backend "signupValidator"  as the one published in the Digital Futures ToDo app. I simply had to prioritise other functions of the app with the time I had, and what's engineering if not looking at other people's work, learning, and implementing aspects of it to enrich your own work! There's no need to re-invent the wheel at this stage of my career, but give me a couple of years!



How to run it:
-------
You will have to open two terminals:
    -front end terminal: navigate to \chitter-challenge\Frontend\chitterChallenge, and run 'npm run dev'.
    You will need to provide your own env url to run this successfully!
    -back end terminal: navigate to \chitter-challenge\Backend, and run 'npm run dev'.

-once both terminals are running, control click on the link provided on the front end and peep away!


Features:
-------

### Standard Acceptance Criteria
```
 
[x]- I want to post a message (peep) to chitter

[x]- I want to see all peeps in reverse chronological order

[x]- I want to see the time at which it was made

[x]- I want to sign up for Chitter

[x]- I want to log in to Chitter

[x]- I want to log out of Chitter

Additional requirements:
------
[x]-  You don't have to be logged in to see the peeps.
[x]-  Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
[x]- The username and email are unique.
[x]- Peeps (posts to chitter) have the name of the trainee and their user handle.
[x]- Your README should indicate the technologies used, and give instructions on how to install and run the tests.

Project Planning:
------
In order to get this project ready I spent a fair amount of time preparing models, deciding routes, what order to follow, etc. My preferred planning method is pen and paper, I will be happy to show my colourful diagrams if needed, but I am also including a couple of tables here:

Domain model:
-----
|  object |  attribute | verb   |  return |
|   ---   |     ---    |    --- |    ---  |
| peep    |   date     | post   |         |   
|         |   author   |        |         |   
|         |   message  |        |         |   
|   ---   |     ---    |    --- |   ---   |
| allPeeps| peeps[]    | view   |         |
|   ---   |     ---    |    --- |   ---   |
| user    | firstname  | login  |         |
|         |  lastname  | signup |         |
|         |  username  |        |         |
|         |  useremail |        |         |
|         |  password  |        |         |
|   ---   |     ---    |    --- |   ---   |

| request | type       | routes    | data    | restrictions|
|   ---   |     ---    |    ---    |   ---   |     ---     |
| getPeeps| Get        | /allpeeps |  JSON   |             |
| postPeep| post       | /peepit   |  JSON   |             |
| login   | post       | /login    |  JSON   |             |
|   ---   |     ---    |    ---    |   ---   |     ---     |

In all honesty, I wish we had had at least another week to work on the project, it felt unsurmountable at times and I have had quite a few late nights of hard work. For a programme that claims not to send after hours work, I sure have seen myself working weekends and past midnight a couple of times this week.

Given another week I may have even tackled the extended criteria:

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
