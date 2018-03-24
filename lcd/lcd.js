/*
* Number of DOTS in all representations: 42
* Number of LINES in all representations: 48
*/

module.exports = function lcd (number) {
    const columnNum = 3;
    const rowNum = 3;
    const characters = Array.from(new Array(rowNum * columnNum));

    return characters
        .map((character, index) => index)
        .reduce((output, index) => {
            const column = index + 1;
            const character = '.';
            const isEndOfRow = column % columnNum === 0;
            const isLastCharacter = column === rowNum * columnNum;

            if (isEndOfRow && !isLastCharacter) {
                return `${ output }${ character }\n`;
            }

            return `${ output }${ character }`;
        }, '');
};
