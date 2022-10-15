#!/usr/bin/env node

import { connectCommand } from "./commands/connectCommand";
import { disconnectCommand } from "./commands/disconnectCommand";
import { playCommand } from "./commands/playCommand";
import { skipCommand } from "./commands/skipCommand";
import { backCommand } from "./commands/backCommand";
import { loopCommand } from "./commands/loopCommand/index";
import { unpauseCommand } from "./commands/unpauseCommand";
import { pauseCommand } from "./commands/pauseCommand";
import { clearCommand } from "./commands/clearCommand";
import { jumpCommand } from "./commands/jumpCommand";
import { removeCommand } from "./commands/removeCommand";
import { shuffleCommand } from "./commands/shuffleCommand";
import { seekCommand } from "./commands/seekCommand";
import { program } from "commander";

program.version("1.0.0").description("Groovify - CLI Music Bot");

program.addCommand(connectCommand);
program.addCommand(disconnectCommand);
program.addCommand(playCommand);
program.addCommand(pauseCommand);
program.addCommand(unpauseCommand);
program.addCommand(skipCommand);
program.addCommand(backCommand);
program.addCommand(seekCommand);
program.addCommand(jumpCommand);
program.addCommand(loopCommand);
program.addCommand(removeCommand);
program.addCommand(shuffleCommand);
program.addCommand(clearCommand);
// Add a command for gvy ping -> this will return a health status OK if everything OK:
// - NestJS server running
// - VLC App running
// - Connected to the internet: https://www.npmjs.com/package/check-internet-connected

program.parse();
