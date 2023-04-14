import java.util.*;

class Solution {
    public int[] solution(int[] answers) {
        List<Integer> answer = new ArrayList<>();
        int[] num1 = { 1, 2, 3, 4, 5 };
        int[] num2 = { 2, 1, 2, 3, 2, 4, 2, 5 };
        int[] num3 = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };
        int[] arr = new int[3];

        for (int i = 0; i < answers.length; i++) {
            if (answers[i] == num1[i % 5])
                arr[0]++;
            if (answers[i] == num2[i % 8])
                arr[1]++;
            if (answers[i] == num3[i % 10])
                arr[2]++;
        }

        int max = Math.max(arr[0], Math.max(arr[1], arr[2]));
        for (int i = 0; i < 3; i++) {
            if (arr[i] == max)
                answer.add(i + 1);
        }
        int[] list = answer.stream().mapToInt(i -> i).toArray();
        return list;
    }
}