const inquirer = require('inquirer');
const { EOL } = require('os');
const figlet = require('figlet');
const chalk = require('chalk');

class View {
  static async getUserInfo(themes) {
    return await inquirer.prompt([
      { name: 'userName', type: 'input', message: 'Введи своё имя:', prefix: '🦅' },
      {
        name: 'theme',
        type: 'list',
        message: 'Выбери тему викторины:',
        choices: themes,
        prefix: '🦅',
      },
    ]);
  }

  static async greetUser(username) {
    const text = figlet.textSync(` ${EOL}Good Luck, ${username} !`, {
      font: 'ANSI Shadow',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      whitespaceBreak: true,
    });

    const padded = text
      .split('\n')
      .map((line) => '    ' + line)
      .join('\n');

    console.log(chalk.green(padded));
  }

  static async greetings() {
    const data = await new Promise((resolve, reject) => {
      figlet('Flashcards Game', { font: 'ANSI Shadow' }, (err, txt) =>
        err ? reject(err) : resolve(txt),
      );
    });

    const lines = data.split('\n');
    for (const line of lines) {
      console.log(chalk.hex('#fff87dff')(line));
      await new Promise((r) => setTimeout(r, 200));
    }

    const terminalWidth = process.stdout.columns || 80;
    const msg = `ДОБРО ПОЖАЛОВАТЬ В ИГРУ!`;
    const padding = Math.max(0, Math.floor((terminalWidth - msg.length) / 3.2));
    console.log(' '.repeat(padding) + chalk.hex('#fff87dff')(msg));

    process.stdout.write(EOL);
    await new Promise((r) => setTimeout(r, 50));
  }

  static async askQuestion(q) {
    const choices = q.choices.map((choice, index) => ({
      name: choice,
      value: index,
    }));

    const { userAnswer } = await inquirer.prompt([
      {
        type: 'list',
        name: 'userAnswer',
        message: q.question,
        choices,
      },
    ]);

    return userAnswer;
  }

  static showMiddleRes(isTrue, q) {
    if (isTrue) {
      console.log(
        chalk.greenBright(
          `${EOL}                   /|_
        ........  /   |_ ........
      .........../     /............
    ............/      >..............
  .............(      >................
 ............./      /..................
............./     /.....................    МОЛОДЕЦ!
............/      /.....................
.........__/      \\_____.................      ТАК
 ......./'             |................      ДЕРЖАТЬ!
  ......./     /-\\     /...............
   ...../      /   \\--/................
    .../     /.......................
      /      /.....................
     (      >....................
    /      >...................
   /     _| .................
  /  __/      .............
 /_/            .........
                  .....
                   ...
                    .
${EOL}`,
        ),
      );
    } else {
      console.log(
        chalk.red(
          `${EOL}                   /|_
                  /   |_
                 /     /
                /      >
               (      >
              /      /
             /     /
            /      /
         __/      \\_____
        /'             |
         /     /-\\     /
        /      /  \\--/
       /     /
      /      /   
     (      >    НЕДОЛЁТ, ДРУЖИЩЕ...
    /      >
   /     _|
  /  __/
 /_/
${EOL}`,
        ),
      );
    }
  }

  static showResult(score, total) {
    if (score === 0) {
      const text = figlet.textSync(` Fail `, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
      });

      const padded = text
        .split('\n')
        .map((line) => '    ' + line)
        .join('\n');

      console.log(chalk.red(padded));
    } else if (score === total) {
      const text = figlet.textSync(` You winner `, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
      });

      const padded = text
        .split('\n')
        .map((line) => '    ' + line)
        .join('\n');

      console.log(chalk.yellow(padded));
      console.log(
        chalk.magenta(`${EOL}Ты молодец, у тебя ${score} очков из ${total}${EOL}`),
      );
      const texts = figlet.textSync(` Game Over `, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
      });

      const paddedy = texts
        .split('\n')
        .map((line) => '    ' + line)
        .join('\n');

      console.log(chalk.white(paddedy));
    } else if (score > 0) {
      const text = figlet.textSync(`  Amaizing!  `, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
      });

      const padded = text
        .split('\n')
        .map((line) => '    ' + line)
        .join('\n');

      console.log(chalk.yellow(padded));
      console.log(`${EOL}Конец игры - У тебя ${score} очков из ${total}${EOL}`);
      const text_1 = figlet.textSync(` You winner `, {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        whitespaceBreak: true,
      });

      const padded_1 = text_1
        .split('\n')
        .map((line) => '    ' + line)
        .join('\n');

      console.log(chalk.white(padded_1));
    }
  }
}

module.exports = View;
