# how to use server side:

# endpoint 1 - localhost:12345/stats/set?lookup=3&steps=21&side=wolfes
here we send db who we were playing with, the steps and ai lookup forward and if needed it updates data

# endpoint 2 - localhost:12345lookup=3&side=rabbit
get best score(steps) for lookup=3(ai looking 3 steps forward) where human played with rabbit