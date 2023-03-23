import java.util.Arrays;

class Solution {
    public long solution(long n) {
        long answer = 0;
        long imsy = n;
        int size = 0;
        while (imsy > 0) {
            size++;
            imsy /= 10;
        }
        int[] nums = new int[size];
        int idx = 0;
        while (n > 0) {
            nums[idx] = (int) (n % 10);
            n /= 10;
            idx++;
        }
        Arrays.sort(nums);
        for (int i = idx - 1; i >= 0; i--)
            answer = answer * 10 + nums[i];
        return answer;
    }
}