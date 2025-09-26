const FlastCardView = require('./view');
const FlashCardModel = require('./model');

class FlashCardController {
  static async start() {
    FlastCardView.greetings();
    const themes = FlashCardModel.getFiles();
    const questions = FlashCardModel.loadQuestions();
  }
}

module.exports = FlashCardController;
