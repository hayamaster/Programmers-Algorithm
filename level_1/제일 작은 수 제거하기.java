class Solution {
    public int[] solution(int[] arr) {
        int[] answer = new int[arr.length - 1];
        int[] imsy = { 1, 2, 3, -1 };
        int temp = arr[0];
        if (arr.length == 1) {
            int[] sol = { -1 };
            return sol;
        }
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < temp)
                temp = arr[i];
        }
        int idx = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > temp) {
                answer[idx] = arr[i];
                idx++;
            }

        }
        return answer;
    }
}