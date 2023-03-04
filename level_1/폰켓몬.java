import java.util.Arrays;

class Solution {
    public int solution(int[] nums) {
        int[] arr = Arrays.stream(nums).distinct().toArray();
        if (arr.length > (nums.length / 2))
            return nums.length / 2;
        return arr.length;
    }
}
