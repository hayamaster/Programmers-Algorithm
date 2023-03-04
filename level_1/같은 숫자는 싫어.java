import java.util.*;

public class Solution {
    public int[] solution(int[] arr) {
        ArrayList<Integer> num = new ArrayList<Integer>();
        num.add(arr[0]);
        for (int i = 1; i < arr.length; i++) {
            if (num.get(num.size() - 1) != arr[i])
                num.add(arr[i]);
        }
        int[] answer = num.stream().mapToInt(Integer::intValue).toArray();
        return answer;
    }
}
