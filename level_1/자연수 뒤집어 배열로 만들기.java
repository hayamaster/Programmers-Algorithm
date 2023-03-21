class Solution {
    public int[] solution(long n) {
        int count = 0;
        long imsy = n;
        while (imsy > 0) {
            count += 1;
            imsy /= 10;
        }
        int[] answer = new int[count];
        int idx = 0;
        while (n > 0) {
            answer[idx] = (int) (n % 10);
            idx++;
            n /= 10;
        }
        return answer;
    }
}