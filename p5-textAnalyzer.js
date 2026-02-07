function analyzeText(str) {
    if (typeof str !== 'string'||str.length===0) {
        return 'Invalid';
    }
    let words = str.split(" ");
    let mx = words[0];
    for (let word of words) {
        if (word.length > mx.length) {
            mx = word;
        }
    }
    let cnt = words.join("").length;
    return { longwords: mx, token: cnt };
}