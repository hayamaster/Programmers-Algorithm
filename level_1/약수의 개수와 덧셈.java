class Solution {
    public int solution(int left, int right) {
        int answer = 0;
        for (int i = left; i <= right; i++) {
            int yaksu = 1;
            for (int j = 2; j <= i; j++) {
                if (i % j == 0)
                    yaksu++;
            }
            answer += (yaksu % 2 == 0) ? i : -i;
        }
        return answer;
    }
}