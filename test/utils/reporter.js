import allure from "@wdio/allure-reporter";
import File from "./file";
class Reporter {
  async addLog(strMsg) {
    await File.appendTxtFile(global.strPath, strMsg);
    await allure.addStep(strMsg);
  }
  //   async addStep() {}
}

export default new Reporter();
