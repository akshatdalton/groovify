# groovify

# Requirements

You must have VLC installed on your system and please check if you can play youtube links on it.
Check for `node` and `yarn` version requirements in the `package.json` file.

# Getting Started

-   Clone this repo: `git clone git@github.com:akshatdalton/Resolve-IT.git`.
-   Install the dependencies: `yarn install`
-   Build the files: `yarn build`
-   Install Groovify globally: `npm install -g .`

Now you are ready to search and play any song. Give it a try:

```shell
gvy connect
gvy play "cold mess by prateek khudad"
```

You can look for available commands by:

```shell
gvy help

Usage: gvy [options] [command]

Groovify - CLI Music Bot

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  connect            connect the bot
  disconnect         disconnect the bot
  play <query>       Loads your input and adds it to the queue
                     If there is no playing track, then it will start playing.
  pause              Pauses playback
  unpause|resume     Resumes playback
  skip|next          Skip the current song
  back               Play the previous song
  seek <timestamp>   Skips to the specified timestamp in the currently playing track
  queue              Displays the current song queue
  jump <position>    Skips to the specified track
  loop               Loop your current song or queue
  remove <position>  Removes the specified track from the queue
  shuffle [options]  Randomizes the current order of tracks in the queue
  song [id]          Displays info about the specified track in the queue
  clear              Removes all tracks from the queue
  help [command]     display help for command

```
