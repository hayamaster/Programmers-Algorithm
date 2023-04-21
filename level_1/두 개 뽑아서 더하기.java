import java.util.*;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        List<Integer> arr = new ArrayList<>();
        for (int i = 0; i < numbers.length - 1; i++) {
            for (int j = i + 1; j < numbers.length; j++) {
                int cur = numbers[i] + numbers[j];
                if (arr.contains(cur))
                    continue;
                else
                    arr.add(cur);
            }
        }

        answer = arr.stream().mapToInt(i -> i).toArray();
        Arrays.sort(answer);
        return answer;
    }
}