class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
        for (int i = 0; i < n; i++)
        {
            String str = Integer.toBinaryString(arr1[i] | arr2[i]);
            String item = "";
            while (str.length() != n)
                str = "0" + str;
            for (int j = 0; j < n; j++)
                item += (str.charAt(j) == '0') ? " " : "#";
            answer[i] = item;
        }
        return answer;
    }
}