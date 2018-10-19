const printToDom = (stringToPrint) => {
    const printHere = document.getElementById(stringToPrint)
    printHere.innerHTML += stringToPrint;
};
export {printToDom};