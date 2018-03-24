/*
* Number of DOTS in all representations: 42
* Number of LINES in all representations: 48
*/

module.exports = function lcd (number) {
    const columns = 3;
    const rows = 3;
    const characters = Array.from(new Array(rows * columns));

    return characters
        .map((character, index) => index)
        .reduce((output, index) => {
            const column = index + 1;
            const character = '.';
            const isEndOfRow = column % columns === 0;
            const isLastCharacter = column === rows * columns;

            if (isEndOfRow && !isLastCharacter) {
                return `${ output }${ character }\n`;
            }

            return `${ output }${ character }`;
        }, '');
};
