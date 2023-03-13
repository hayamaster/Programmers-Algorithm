import java.lang.Math;

class Solution {
    public int solution(int n) {
        int answer = 0;
        for (int i = 2; i <= n; i++) {
            int j = 2;
            while (j <= (int) Math.sqrt(i)) {
                if (i % j == 0)
                    break;
                j++;
            }
            if (j == (int) Math.sqrt(i) + 1)
                answer++;
        }
        return answer;
    }
}