import Reporter from "./reporter";
class objUtil {
  /**
   * @function clickObject
   * @description Click on the object
   * @param {Object} objElement - Object to be clicked
   * @returns <name>
   */

  async clickObject(objElement) {
    await Reporter.addLog("Started Function: clickObject");
    await objElement.waitForExist();
    await objElement.click();
    const strXPath = await objElement.selector;
    await Reporter.addLog(
      `Completed Function: clickedObject - Sucess ${strXPath}`
    );
  }
  /**
   * @function setObjectValue
   * @description Set the value to the object
   * @param {Object} objElement - Object to set the value
   * @param {String} value - Value to be set
   * @returns <name>
   */
  async setObjectValue(objElement, value) {
    await Reporter.addLog("Started Function: setObjectValue");
    await objElement.waitForExist();
    await objElement.setValue(value);
    const strXPath = await objElement.selector;
    await Reporter.addLog(
      `Completed Function: Set the value ${value} to the object with xpath: ${strXPath}`
    );
  }
  /**
   * @function getObjectText
   * @description Get the text of the object
   * @param {Object} objElement - Object to get the text
   * @returns <name>
   */
  async getObjectText(objElement) {
    await Reporter.addLog("Started Function: getObjectText");
    await objElement.waitForExist();
    const strXText = await objElement.getText();
    const strXPath = await objElement.selector;
    await Reporter.addLog(
      `Completed Function: getObjectText - Sucess: ${strXPath}`
    );
    return strXText;
  }
}
export default new objUtil();
