import java.util.List;
import java.util.stream.Collectors;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int[] ranking = { 6, 6, 5, 4, 3, 2, 1 };
        int[] answer = new int[2];
        List<Integer> win_list = Arrays.stream(win_nums).boxed().collect(Collectors.toList());
        int zero_count = 0;
        int correct = 0;

        for (int num : lottos) {
            if (num == 0)
                zero_count++;
            else if (win_list.contains(num))
                correct++;
        }
        answer[0] = ranking[correct + zero_count];
        answer[1] = ranking[correct];
        return answer;
    }
}