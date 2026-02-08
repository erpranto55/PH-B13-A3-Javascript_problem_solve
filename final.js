//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof
        discount !== "number" || discount < 0 || discount > 100) {
        return "Invalid";
    }
    let res = 0;
    let dis = (currentPrice * discount) / 100;
    res = currentPrice - dis;
    return res.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }
    if (otp.length !== 8 || !otp.startsWith("ph-")) {
        return false;
    }
    else {
        return true;
    }
}

//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    let { right, wrong, skip } = omr;
    if ((right + wrong + skip) !== 100) {
        return 'Invalid';
    }
    let scor = right - (wrong * 0.50);
    return Math.round(scor);
}

//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";
    }
    let ha = 0, na = 0;
    for (let vote of array) {
        if (vote === 'ha') {
            ha++;
        }
        else {
            na++;
        }
    }
    if (ha == na) {
        return "equal";
    }
    else if (ha > na) {
        return true;
    }
    else {
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company
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

