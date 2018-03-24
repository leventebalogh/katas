/*
* Number of DOTS in all representations: 42
* Number of LINES in all representations: 48
*/

const COLUMN_NUM = 3;
const ROW_NUM = 3;

module.exports = function lcd (number) {
    const characters = Array.from(new Array(ROW_NUM * COLUMN_NUM));

    return characters
        .map((character, index) => index)
        .reduce((output, index) => {
            const column = index + 1;
            const character = '.';
            const isEndOfRow = column % COLUMN_NUM === 0;
            const isLastCharacter = column === ROW_NUM * COLUMN_NUM;

            if (isEndOfRow && !isLastCharacter) {
                return `${ output }${ character }\n`;
            }

            return `${ output }${ character }`;
        }, '');
};
