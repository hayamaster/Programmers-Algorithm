class Solution {
    boolean solution(String s) {
        int num = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 'p' || s.charAt(i) == 'P')
                num++;
            if (s.charAt(i) == 'y' || s.charAt(i) == 'Y')
                num--;
        }
        return num == 0 ? true : false;
    }
}