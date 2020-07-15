//Pad to three for "Pokemon ID"
export const padToThree = (num) => {
    return num <= 999 ? `00${num}`.slice(-3) : num
}