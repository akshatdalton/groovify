// #!/usr/bin/env node

// const { LavasfyClient } = require("lavasfy");
// const { TrackUtils, Manager } = require("erela.js");

// const lavasfy = new LavasfyClient({
//     clientID: "d242a0d22fd44070bf3237a1f985e08e",
//     clientSecret: "0758dfa0ab31421fbb306fad9468e20d",
//     // playlistPageLoadLimit: 1,
//     // filterAudioOnlyResult: true,
//     // autoResolve: true,
//     // useSpotifyMetadata: true,
// }, [
//     {
//         id: "main",
//         host: "localhost",
//         port: 2333,
//         password: "youshallnotpass",
//         secure: false
//     }
// ]);

// (async () => {
//     // We need to call this to get the Spotify API access token (only needs once after the LavasfyClient instantiated).
//     await lavasfy.requestToken();

//     // Select node to use with its id.
//     const node = lavasfy.getNode("main");

//     // Use Node#load to load album, playlist, and track
//     // const album = await node.load("https://open.spotify.com/album/4sZni6V6NvVYhfUFGqKuR3");
//     // console.log(album);

//     // const playlist = await node.load("https://open.spotify.com/playlist/2NdDBIGHUCu977yW5iKWQY");
//     // console.log(playlist);

//     const track = await node.load("https://open.spotify.com/track/4zsxBgPkUFYEoOGDncGIBd");
//     console.log(track);
//     console.log(track.tracks[0])
//     console.log(TrackUtils.build(track.tracks[0], "Akshat"))

//     // Response object: https://github.com/Allvaa/lava-spotify/blob/master/src/typings/Lavalink/index.ts#L22
// })();

// const { SpotifyPlaybackSDK } = require("spotify-playback-sdk-node");
// const fs = require("fs");

// const file = fs.createWriteStream(__dirname + "/test.webm");


// async function test() {
// 	const spotify = new SpotifyPlaybackSDK();
// 	await spotify.init({executablePath: "/usr/bin/google-chrome-stable"});

// 	const player = await spotify.createPlayer({
// 		name: "Web",
// 		getOAuthToken() {
// 			// get your Access token here: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
// 			return "BQBKgTBUYlcmAnKtvmtX0D1Xcje_4xvzQOilaEq0vA6mZnLW-PFLn1qkU7TyZa-z2PW7o2x5bxuGs3-maH_HOzWbb3Sqz8ms6-Lqra6IFb-3pvXkT1fAmXlPipmQ3YEmmYRdVWXjvtIB5bQeV4M6sHd-t7bnsvW7Enr4oz-FkJh0z3lRaq3G9SY";
// 		},
// 	});
// 	player.on("player_state_changed", console.log);

// 	const stream = await player.getAudio();
// 	const connected = await player.connect();
// 	if (!connected) throw "couldn't connect";

// 	console.log("connected", stream);
//     stream.pipe(file);
// }

// test();

import createVlc from "@richienb/vlc";

async function fun () {
	const vlc = await createVlc();
	console.log("vlc created")
	await vlc.command("in_play", {
		input: "test.mp3",
	});

	// await vlc.command("pl_stop");
	console.log("vlc played")
}
console.log("fun start");
(async () => {
	await fun()
})().catch(err => {
    console.error(err);
});
console.log("fun done");


// import fs from "fs";
// import ytdl from "ytdl-core";
// // TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// // TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// // TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// ytdl('https://www.youtube.com/watch?v=7xzU9Qqdqww', {filter: "audioonly"})
//   .pipe(fs.createWriteStream('test.mp3'));
