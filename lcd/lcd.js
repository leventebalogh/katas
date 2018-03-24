/*
* Number of DOTS in all representations: 42
* Number of LINES in all representations: 48
*
* Storing the indexes of empty spaces as config.
*/

const COLUMN_NUM = 3;
const ROW_NUM = 3;
const CHARACTERS = {
    PIPE: '|',
    UNDERSCORE: '_',
    EMPTY: '.'
};
const EMPTY_INDEXES = [
    [1, 3, 5], // 0
    [1, 2, 3, 4, 5, 7, 8], // 1
    [1, 3, 4, 9], // 2
    [1, 3, 4, 7], // 3
    [1, 2, 3, 7, 8], // 4
    [1, 3, 6, 7], // 5
    [1, 3, 6], // 6
    [1, 3, 4, 5, 7, 8], // 7
    [1, 3], // 8
    [1, 3, 7, 8] // 9
];

module.exports = function lcd (number) {
    return getCharacterArray()
        .map((character, index) => index)
        .reduce((output, index) => {
            const shiftedIndex = index + 1;
            const character = getCharacter(shiftedIndex, number);

            if (isEndOfRow(shiftedIndex) && !isLastCharacter(shiftedIndex)) {
                return `${ output }${ character }\n`;
            }

            return `${ output }${ character }`;
        }, '');
};

function getCharacter (index, number) {
    const emptyIndexes = EMPTY_INDEXES[number] || [];
    const isEmpty = emptyIndexes.indexOf(index) >= 0;

    if (isEmpty) {
        return CHARACTERS.EMPTY;
    }

    if (isEndOfRow(index) || isBeginningOfRow(index)) {
        return CHARACTERS.PIPE;
    }

    return CHARACTERS.UNDERSCORE;
}

function isBeginningOfRow (index) {
    return (index - 1) % COLUMN_NUM === 0;
}

function isEndOfRow (index) {
    return index % COLUMN_NUM === 0;
}

function isLastCharacter (index) {
    return index === ROW_NUM * COLUMN_NUM;
}

function getCharacterArray() {
    return Array.from(new Array(ROW_NUM * COLUMN_NUM));
}
