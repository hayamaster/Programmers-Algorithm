class Solution {
    public int solution(int n) {
        String ternary = Integer.toString(n, 3);
        String reverse = "";
        for (int i = ternary.length() - 1; i >= 0; i--)
            reverse += ternary.charAt(i);
        return Integer.parseInt(reverse, 3);
    }
}