+++
title = "Poetry Bot"
date = 2024-04-01
+++

<img src="poetry bot.gif" alt="a gif of the poetry bot in action" title="a gif of the poetry bot in action" style="width:600px" />

This was a quick project I threw together in a couple days during spring break. I had the idea on the bus ride home, and a day later I had a working prototype. The basic was idea was for the user's request for a poem on a given topic to be recieved by the Discord bot, and forwarded to openAI's ChatGPT API. The API would send back a short poem, which would be sent by the bot back to the Discord server. I enjoy making things that are actually useful to me, and I was able to use this project in a Discord server to write annoying poems on demand, so this was a pretty enjoyable project.

## Technical Details

To make the Discord bot, I used the Discord.js framework, which was a lot easier than doing it from scratch, which was what Discord's developer documentation suggested. The Discord.js tutorial project was in commonjs however, and converting it into ES6 was probably the most time consuming part of the project. But when I finished, it was as easy as installing the OpenAI npm package and using async/await to call and use its response.

At this point I had a working product, but I still needed to deploy it. Even though I had spent $10 on tokens for the ChatGPT API, I was weary of using AWS, because I wasn't entirely sure how much it would cost me, and I had just found out that my fraternity's website had cost a total of $1000 a year because it had been deployed improperly on google cloud(there were something like 50 instances running at the same time).

Thankfully, a friend of mine had offered to throw it on one of his servers, so I deceided to dockerize it to make it easy for him to run. This was a very simple but interesting process, as I did not have much experience with docker prior to this. To deal with the .env file, which I ommited from the repo, I sent it to him separately, and used docker compose to mount it as a volume.

I could have easily stopped here, but I was a little worried the  bot would crash while running on my friend's server, and I would haveno way to restart it. So, I downloaded an error logging package, andwrapped every possible point of failure in a try catch statement, thencalled it a day.

The repo can be found at <https://github.com/andrewyur/poetry-bot>.
