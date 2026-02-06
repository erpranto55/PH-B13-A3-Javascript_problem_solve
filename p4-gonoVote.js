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