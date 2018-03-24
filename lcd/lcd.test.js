const test = require('tape');
const lcd = require('./lcd');

test('LCD', function (t) {
    const number = lcd(3);
    const lines = number.split('\n');
    const [line] = lines;

    t.equal(lines.length, 3, 'should have 3 rows per digit');
    t.equal(line.length, 3, 'should have 3 columns per digit');
    t.end();
});