# CheckersAI
Actually it isn't CheckersAI but wolfes and rabbit ai :), Just the name remaining from the beginning.
So the rules - 4 wolfes 1 rabbit. wolfes can move only forward rabbit to all directions - rabbit needs to get to the last line and wolfes to catch
him so the rabbit can't move.

It's at most angular project, and the ai is there. You can configure the ai to look up to 8 steps forward. Also there is a small mongoDB server that remembers statistics,
for example best score when human playing rabbit and ai is looking 6 steps forward.(everything can work fine even without it so it's optional)

It's written in angular but its portable to android via cordova, so look at 'commands.txt' file for useful info for creating from angular project android app.

The ai is using alpha-beta pruning algorithm, at every, you can look at it as "tree node", calls a bunch of funcions from brain service of complexity O(1) to calculate the score,
and then the ai decides the best decision.

View the files attached to the repository for more info, project structure.

* Another thing - we were lazy to use .env :) so put the correct URL to the statistics server(if you want to use it of course) in STATS_SERVER_URL variables in board.component.ts *

To get the nodejs statistics server: go to repo branches - server.

That's all :)

Creators: Timur Pichkhadze, Ben Itzhak Abadaev 2021-2022
Netanya academic college
Mobile Dev Final Project.
