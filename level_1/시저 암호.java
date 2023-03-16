class Solution {
    public String solution(String s, int n) {
        String answer = "";
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') {
                answer += s.charAt(i);
                continue;
            }
            if ((s.charAt(i) <= 90 && s.charAt(i) + n > 90) ||
                    (s.charAt(i) <= 122 && s.charAt(i) + n > 122))
                answer += (char) (s.charAt(i) + n - 26);
            else
                answer += (char) (s.charAt(i) + n);
        }
        return answer;
    }
}