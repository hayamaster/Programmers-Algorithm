function solution(citations) {
    let count = [];
    citations.sort();
    for (let i = 0; i <= citations.length; i++)
    {
        let cnt = 0;
        citations.map(paper => {
            if (paper >= i)
                cnt++;
        })
        if (cnt >= i)
            count.push(i);
    }
    return Math.max(...count)
}