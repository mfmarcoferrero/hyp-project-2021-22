
//This file is used to define functions that can be used in every .vue file
export default {
    methods: {
        formatMyDate(val) {
            return "Date: " + val
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toLowerCase(string) {
            return string.toLowerCase();
        },
        swapUnderscoresWithSpaces(string) {
            return string.replace(/_/g, " ");
        },
        swapDashesAndCapitalize(string) {
            string = string.replace(/-/g, " ");
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        generateMatrixFromArray(array, chunkSize) {
            const n = Math.ceil(array.length / chunkSize);
            var matrix = new Array(n);
            var k = 0;
            for (let i = 0; i < array.length; i += chunkSize) {
                const chunk = array.slice(i, i + chunkSize);
                matrix[k] = chunk;
                k++;
            }
            return (matrix);
        }
    }
}