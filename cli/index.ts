#!/usr/bin/env node

import { disconnectCommand } from "./commands/disconnectCommand";
import { connectCommand } from "./commands/connectCommand";
import { skipCommand } from "./commands/skipCommand";
import { backCommand } from "./commands/backCommand";
import { loopCommand } from "./commands/loopCommand/index";
import { unpauseCommand } from "./commands/unpauseCommand";
import { pauseCommand } from "./commands/pauseCommand";
import { clearCommand } from "./commands/clearCommand";
import { program } from "commander";

program.version("1.0.0").description("Groovify - CLI Music Bot");

program.addCommand(connectCommand);
program.addCommand(disconnectCommand);
program.addCommand(pauseCommand);
program.addCommand(unpauseCommand);
program.addCommand(skipCommand);
program.addCommand(backCommand);
program.addCommand(loopCommand);
program.addCommand(clearCommand);

program.parse();
