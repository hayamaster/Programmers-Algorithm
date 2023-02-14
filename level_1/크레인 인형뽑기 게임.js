function solution(board, moves) {
    let arr = []
    for(let i=0; i<moves.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[j][moves[i]-1] != 0) {
                arr.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0
                break;
            } 
        }
    }
    const size = arr.length
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] == arr[i+1]){
            arr.splice(i,2);
            i -= 2;
        }
    }
    return size - arr.length
}