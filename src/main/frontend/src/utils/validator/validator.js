
export let required = (value) => {
    if (value) {
        return undefined;
    } else {
        return "Field is required";
    }
}
export let maxLength = (length) => (value) => {
    if(value.length < length) {
        return undefined;
    } else {
        return `Max length is ${length}`;
    }
}