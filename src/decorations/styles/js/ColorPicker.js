export const ColorPicker = (color) => {
    switch(color){
        case 'green':
            return { primaryColor: "#5DA491", secondaryColor: "#4AD9B0" }
        case 'red':
            return { primaryColor: "#E0605A", secondaryColor: "#FC92A4" }
        case 'blue':
            return { primaryColor: "#5A94B8", secondaryColor: "#77C3F2" }
        case 'white':
            return { primaryColor: "#584C73", secondaryColor: "#3F93A6" }
        case 'brown':
            return { primaryColor: "#BF9A56", secondaryColor: "#D9BD6A" }
        case 'yellow':
            return { primaryColor: "#C49102", secondaryColor: "#FFBD2E" }
        case 'purple':
            return { primaryColor: "#584C73", secondaryColor: "#A578A9" }
        case 'pink':
            return { primaryColor: "#E6ACBF", secondaryColor: "#F9D6D0" }
        case 'gray':
            return { primaryColor: "#918F89", secondaryColor: "#B8B9AD" }
        default:
            return { primaryColor: "#584C73", secondaryColor: "#A578A9" }
    }
}

// background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);