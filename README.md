# yashcli

A modular, object-oriented CLI tool built with **Node.js + TypeScript** for the SESD project.

## Features

- 10 custom commands (7 local + 3 API-based)
- OOP design using a `BaseCommand` abstraction
- Modular code structure (commands + services)
- Colored output via `chalk`
- Basic validation and error handling
- Help + version support

## Commands

### Basic Commands (7)

- `greet <name>`: Greet a user
- `time`: Show current time
- `random`: Generate a random number
- `calc <num1> <operator> <num2>`: Simple calculator
- `fileinfo <filename>`: Show file information
- `uuid`: Generate a unique id
- `helpme`: Custom help

### API Commands (3)

- `github <username>`: Fetch GitHub user info (live API)
- `weather <city>`: Fetch weather information (requires API key)
- `quote`: Fetch a random quote (with local fallback for reliability)

## Setup

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
npm install
```

### Environment (optional)

For the `weather` command, set an OpenWeatherMap API key:

```bash
# .env file (already .gitignored)
WEATHER_API_KEY=your_key_here
```

## Run (development)

```bash
npm run dev -- <command> [args]
```

### Examples

```bash
npm run dev -- greet yash
npm run dev -- time
npm run dev -- random
npm run dev -- calc 10 + 5
npm run dev -- uuid
npm run dev -- fileinfo README.md
npm run dev -- helpme
npm run dev -- github torvalds
npm run dev -- weather London
npm run dev -- quote
```

## Development Plan (Step-by-step commits)

✅ 1. Base architecture (`BaseCommand`, minimal dispatcher)
✅ 2. Basic commands (greet, time, random)
✅ 3. Remaining local commands (calc, uuid, fileinfo, helpme)
✅ 4. API services (GitHub, Weather, Quote)
✅ 5. API commands + final polish (colors, validation, help/version)

## Status: ✅ Project Complete

All 10 commands are implemented and working. The CLI is ready for SESD demo.

## Notes

- API keys (if required) are provided via environment variables.
- Uses `commander` for CLI parsing, `chalk` for colors, and `axios` for HTTP.
- Includes a `utils/Validator` for reusable validation logic.
- Quote command includes a local fallback to ensure reliability during demos.
