//This file is used to define functions that can be used in every .vue file
export default {
    methods: {
        formatMyDate(val) {
            return "Date: " + val
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        swapUnderscoresWithSpaces(string){
            return string.replace(/_/g, " ");
        }
    }
}