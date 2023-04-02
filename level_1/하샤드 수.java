class Solution {
    public boolean solution(int x) {
        int answer = 0;
        int n = x;
        while (n > 0) {
            answer += n % 10;
            n /= 10;
        }
        return x % answer == 0 ? true : false;
    }
}
