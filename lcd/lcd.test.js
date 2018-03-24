const test = require('tape');
const lcd = require('./lcd');
const {
    DIGIT_0,
    DIGIT_1,
    DIGIT_2,
    DIGIT_3,
    DIGIT_4,
    DIGIT_5,
    DIGIT_6,
    DIGIT_7,
    DIGIT_8,
    DIGIT_9,
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
    t.equal(lcd(1), DIGIT_1, 'should be able to display number 0');
    t.equal(lcd(2), DIGIT_2, 'should be able to display number 0');
    t.equal(lcd(3), DIGIT_3, 'should be able to display number 0');
    t.equal(lcd(4), DIGIT_4, 'should be able to display number 0');
    t.equal(lcd(5), DIGIT_5, 'should be able to display number 0');
    t.equal(lcd(6), DIGIT_6, 'should be able to display number 0');
    t.equal(lcd(7), DIGIT_7, 'should be able to display number 0');
    t.equal(lcd(8), DIGIT_8, 'should be able to display number 0');
    t.equal(lcd(9), DIGIT_9, 'should be able to display number 0');
    t.end();
});