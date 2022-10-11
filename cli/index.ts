#!/usr/bin/env node

import { disconnectCommand } from "./commands/disconnectCommand";
import { connectCommand } from "./commands/connectCommand";
import { skipCommand } from "./commands/skipCommand";
import { program } from "commander";

program.version("1.0.0").description("Groovify - CLI Music Bot App");

program.addCommand(connectCommand);
program.addCommand(disconnectCommand);
program.addCommand(skipCommand);

program.parse();
