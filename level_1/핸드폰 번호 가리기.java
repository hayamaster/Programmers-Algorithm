class Solution {
    public String solution(String phone_number) {
        int size = phone_number.length();
        String answer = "";
        for (int i = 0; i < size - 4; i++)
            answer += '*';
        for (int i = size - 4; i < size; i++)
            answer += phone_number.charAt(i);
        return answer;
    }
}