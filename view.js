const inquirer = require('inquirer');
const { EOL } = require('os');
const figlet = require('figlet');
const chalk = require('chalk');

class View {
  static async getUserInfo(themes) {
    return await inquirer.prompt([
      { name: 'userName', type: 'input', message: 'Введи своё имя:', prefix: '🐺' },
      {
        name: 'theme',
        type: 'list',
        message: 'Выбери тему викторины:',
        choices: themes,
        prefix: '🐺',
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
}
