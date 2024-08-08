const fs = require('fs');
const path = require('path');

test('La página debe contener mi nombre y matrícula', () => {
  const htmlContent = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
  expect(htmlContent).toContain('Starling Jose Gonzalez Miranda');
  expect(htmlContent).toContain('2022-2031');
});
