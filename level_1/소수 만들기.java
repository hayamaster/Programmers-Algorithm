class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        for (int i = 0; i < nums.length - 2; i++) {
            for (int j = i + 1; j < nums.length - 1; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    boolean isPrime = true;
                    int num = nums[i] + nums[j] + nums[k];
                    for (int l = 2; l <= Math.sqrt(num); l++) {
                        if (num % l == 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime)
                        answer++;
                }
            }
        }

        return answer;
    }
}