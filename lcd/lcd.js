/*
* Number of DOTS in all representations: 42
* Number of LINES in all representations: 48
*/

const COLUMN_NUM = 3;
const ROW_NUM = 3;
const CHARACTERS = {
    PIPE: '|',
    UNDERSCORE: '_',
    EMPTY: '.'
};
const EMPTY_INDEXES = [
    [1, 3, 5]
];

module.exports = function lcd (number) {
    return getCharacterArray()
        .map((character, index) => index)
        .reduce((output, index) => {
            const column = index + 1;
            const character = getCharacter(column, number);

            if (isEndOfRow(column) && !isLastCharacter(column)) {
                return `${ output }${ character }\n`;
            }

            return `${ output }${ character }`;
        }, '');
};

function getCharacter (index, number) {
    const emptyIndexes = EMPTY_INDEXES[number] || [];

    if (emptyIndexes.indexOf(index) >= 0) {
        return CHARACTERS.EMPTY;
    }

    if (isEndOfRow(index) || isBeginningOfRow(index)) {
        return CHARACTERS.PIPE;
    }

    return CHARACTERS.UNDERSCORE;
}

function isBeginningOfRow (column) {
    return (column - 1) % COLUMN_NUM === 0;
}

function isEndOfRow (column) {
    return column % COLUMN_NUM === 0;
}

function isLastCharacter (column) {
    return column === ROW_NUM * COLUMN_NUM;
}

function getCharacterArray() {
    return Array.from(new Array(ROW_NUM * COLUMN_NUM));
}
