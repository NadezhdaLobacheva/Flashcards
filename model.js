const fsp = require('fs/promises');
const path = require('path');

class FlashCardModel {
  static async getFiles() {
    const content = await fsp.readdir('./topics');

    return content.map((file) => {
      return {
        name: path.basename(file, '.json'),
        value: file,
      };
    });
  }

  static async loadQuestions(themeFile) {
    const content = await fsp.readFile(`./topics/${themeFile}`, 'utf-8');
    console.log(JSON.parse(content));

    return JSON.parse(content);
  }

  static async saveResult() {}
}

module.exports = FlashCardModel;
