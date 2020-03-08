export const hashtags = (text) => {
    return text.split(" ").filter(function(word) {
        if (word.indexOf("#") === 0) 
        return word
    });
}

