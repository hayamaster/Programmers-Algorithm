function solution(id_list, report, k) {

    let userMap = new Map();
    let banned = [];
    const set = new Set(report);
    const arr = [...set];
    let imsy = [];
    let count = [];
    for(let i = 0; i < id_list.length; i++){
        count.push(0);
    }
    
    for(let i = 0; i < arr.length; i++){
        let imsy2 = [arr[i].split(' ')[0], arr[i].split(' ')[1]];
        imsy.push(imsy2);
    }    
    
    for(let x of arr){
        if(userMap.has(x.split(' ')[1]))
            userMap.set(x.split(' ')[1], userMap.get(x.split(' ')[1]) + 1);
        else
            userMap.set(x.split(' ')[1], 1);
    }
    
    for(let [ban, count] of userMap){
        if(count >= k) banned.push(ban);
    }
    
     for(let i = 0; i < arr.length; i++){
        for(x of banned){
            if(imsy[i][1] === x){
            count[id_list.indexOf(imsy[i][0])]++;
            }
        }
    }
    return count;    
}
