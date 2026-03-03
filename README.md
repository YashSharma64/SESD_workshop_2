# yashcli

A modular, object-oriented CLI tool built with **Node.js + TypeScript** for the SESD project.

## Setup

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
git clone <repo-url>
cd yashcli
npm install
```

### Environment (optional)

For the `weather` command, set an OpenWeatherMap API key:

```bash
# .env file (already .gitignored)
WEATHER_API_KEY=your_key_here
```

## Available Commands

### Basic Commands

- `greet <name>` — Greet a user
- `time` — Show current time
- `random` — Generate a random number
- `calc <num1> <operator> <num2>` — Simple calculator (+, -, *, /)
- `uuid` — Generate a unique id
- `fileinfo <filename>` — Show file information
- `helpme` — Custom help

### API Commands

- `github <username>` — Fetch GitHub user info (live API)
- `weather <city>` — Fetch weather information (requires API key)
- `quote` — Fetch a random quote (with local fallback for reliability)

### Global Flags

- `--help` — Show help
- `--version` — Show version

## Example Usage

```bash
# Run commands
npm run dev -- greet yash
npm run dev -- time
npm run dev -- random
npm run dev -- calc 10 + 5
npm run dev -- uuid
npm run dev -- fileinfo README.md
npm run dev -- helpme

# API commands
npm run dev -- github torvalds
npm run dev -- weather London
npm run dev -- quote

# Global flags
npm run dev -- --version
npm run dev -- --help
```

## Features

- 10 custom commands (7 local + 3 API-based)
- OOP design using a `BaseCommand` abstraction
- Modular code structure (commands + services)
- Colored output via `chalk`
- Basic validation and error handling
- Help + version support

## Status: ✅ Project Complete

All 10 commands are implemented and working. The CLI is ready for SESD demo.

## Notes

- API keys (if required) are provided via environment variables.
- Uses `commander` for CLI parsing, `chalk` for colors, and `axios` for HTTP.
- Includes a `utils/Validator` for reusable validation logic.
- Quote command includes a local fallback to ensure reliability during demos.
