function solution(lottos, win_nums) {
    var answer = [];
    const rank = {1 : 6, 2 : 5, 3 : 4, 4 : 3, 5 : 2};
    let my = lottos.filter(x => !win_nums.includes(x));
    let win = win_nums.filter(x => !lottos.includes(x));

    let count = lottos.length - my.length;
    let count_zero = 0;
    my.forEach(x => {
        if(x === 0) count_zero++
    });
        
    const good = count + count_zero;
    const bad = count;
    
    for(let i = 1; i < 6; i++){
        if(rank[i] == good) answer.push(i);
        if(rank[i] == bad) answer.push(i);
    }
    if(answer.length < 2) answer.push(6);
    if(answer.length < 2) answer.push(6);

    return answer;
}