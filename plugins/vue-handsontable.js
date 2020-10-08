// const HotTable = !process.client ? null : require('@handsontable/vue').HotTable
// export default HotTable

// let HotTable = null;

const HotTable = !process.client ? null : require("@handsontable/vue").HotTable;
const HotColumn = !process.client
  ? null
  : require("@handsontable/vue").HotColumn;
const BaseEditorComponent = !process.client
  ? null
  : require("@handsontable/vue").BaseEditorComponent;

module.exports = {
  HotTable,
  HotColumn,
  BaseEditorComponent
};
