import java.util.*;

class Solution {
    public int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < moves.length; i++) {
            for (int j = 0; j < board.length; j++) {
                if (board[j][moves[i] - 1] != 0) {
                    int cur = board[j][moves[i] - 1];
                    if (stack.size() != 0 && stack.peek() == cur) {
                        stack.pop();
                        answer += 2;
                    } else
                        stack.push(cur);
                    board[j][moves[i] - 1] = 0;
                    break;
                }
            }
        }
        return answer;
    }
}