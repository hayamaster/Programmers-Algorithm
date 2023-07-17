const solution = (babbling) => (babbling.map(balum => {
    ["aya", "ye", "woo", "ma"].forEach((mal) => balum = balum.replace(mal, " "));
    return balum;
})).reduce((acc, cur) => acc += (cur.trim() === "") ? 1 : 0, 0);