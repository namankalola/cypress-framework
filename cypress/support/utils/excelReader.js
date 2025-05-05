const XLSX = require('xlsx');

export const readExcelFile = (filePath, sheetName) => {
    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
};