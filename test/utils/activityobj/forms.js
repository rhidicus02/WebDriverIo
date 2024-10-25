/**
 * @class FormUtils
 * @description Utility class for form-related actions
 */
class FormUtils {
  /**
   * @function fillInputField
   * @description Fills an input field with a specified value
   * @param {Object} inputField - Input field element to fill
   * @param {String} value - Value to fill the input field with
   * @returns <value>
   */
  async fillInputField(inputField, value) {
    await inputField.setValue(value);
  }

  /**
   * @function clickButton
   * @description Clicks a button element
   * @param {Object} button - Button element to click
   * @returns {Promise<void>}
   */
  async clickButton(button) {
    await button.click();
  }

  async getObjectText(objElement) {
    await objElement.waitForExist();
    await objElement.getText();
  }
  /**
   * @function getTableData
   * @description Gets the data from a table element
   * @param {Object} tableElement - Table element to get data from
   * @returns {Array} - Array of arrays containing the table data
   */
  async getTableData(tableElement) {
    const rows = await tableElement.$$("tr");
    const tableData = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const columns = await row.$$("td, th");

      const rowData = [];
      for (let j = 0; j < columns.length; j++) {
        const column = columns[j];
        const columnText = await column.getText();
        rowData.push(columnText);
      }

      tableData.push(rowData);
    }
    return tableData;
  }
}

export default new FormUtils();
