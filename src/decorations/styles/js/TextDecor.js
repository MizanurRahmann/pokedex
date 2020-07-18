//Pad to three for "Pokemon ID"
export const padToThree = (num) => {
    return num <= 999 ? `00${num}`.slice(-3) : num
}

//Make first letter Uppercase
export const CapitalFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

//Remove dash
export const RemoveDash = (string) => {
    return CapitalFirst(string.split("-").join(" "));
}