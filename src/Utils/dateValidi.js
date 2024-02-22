export function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}
console.log(isDateValid("10/2/2024"))