# Countdown-Timer
<p align="center">
    <img alt="npm" src="https://img.shields.io/npm/v/npm">
</p>
This is a project to demonstrate a Countdown Timer to provide a continuously decrementing display of the he months, days, hours, minutes, and seconds to a user entered event.

## Get started

### Installation

### Install NodeJs

```bash
Go to https://nodejs.org/en/download/ and install the latest version
```

### Install Angular Globally

```bash
npm install -g @angular/cli
```

### Install Angular Locally

```bash
npm install @angular/cli
```

To run a locally installed version of the angular-cli, you can call `ng` commands directly by adding the `.bin` folder within your local `node_modules` folder to your PATH. The `node_modules` and `.bin` folders are created in the directory where `npm install @angular/cli` was run upon completion of the install command.

Alternatively, you can install [npx](https://www.npmjs.com/package/npx) and run `npx ng <command>` within the local directory where `npm install @angular/cli` was run, which will use the locally installed angular-cli.

### Install Specific Version (Example: 6.1.1)

```bash
npm install -g @angular/cli@6.1.1
```


### Clone the repo

```shell
git clone https://github.com/GiAraki/Countdown-Timer
cd .\countdown-timer\
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and open your browser on `http://localhost:4200/`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.
