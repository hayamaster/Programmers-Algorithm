import java.util.Arrays;

class Solution {
    public String solution(String[] participant, String[] completion) {
        int idx = 0;
        Arrays.sort(participant);
        Arrays.sort(completion);
        while (idx < completion.length) {
            if (participant[idx].equals(completion[idx]))
                idx++;
            else
                break;
        }
        return participant[idx];
    }
}