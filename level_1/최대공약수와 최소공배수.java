class Solution {
    public int[] solution(int n, int m) {
        int min = Math.min(n, m);
        int i;
        for (i = min; i > 0; i--)
            if (n % i == 0 && m % i == 0)
                break;

        int lcm = n * m / i;

        int[] answer = { i, lcm };
        return answer;
    }
}