public class Solution {
    public String solution(int a, int b) {
        String[] weeks = { "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" };
        int[] months = { 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        int total_days = -1;
        for (int i = 0; i < a - 1; i++)
            total_days += months[i];
        total_days += b;
        return weeks[(total_days % 7)];
    }
}
