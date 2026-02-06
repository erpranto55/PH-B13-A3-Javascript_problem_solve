function finalScore(omr) {
    let { right, wrong, skip } = omr;
    if ((right + wrong + skip) !== 100) {
        return 'Invalid';
    }
    let scor = right - (wrong * 0.50);
    return Math.round(scor);
}