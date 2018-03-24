const test = require('tape');
const lcd = require('./lcd');
const {
    DIGIT_0
} = require('./digits');

test('LCD - grid size', function (t) {
    const number = lcd(3);
    const lines = number.split('\n');
    const [line] = lines;

    t.equal(lines.length, 3, 'should have 3 rows per digit');
    t.equal(line.length, 3, 'should have 3 columns per digit');
    t.end();
});

test('LCD - numbers', function (t) {
    t.equal(lcd(0), DIGIT_0, 'should be able to display number 0');
    t.end();
});