import java.util.List;
import java.util.ArrayList;

class Solution {
    public int solution(String dartResult) {
        List<Integer> stack = new ArrayList<>();
        // "10"을 "A"로 교체
        dartResult = dartResult.replace("10", "A");

        for (int i = 0; i < dartResult.length(); i++) {
            // 문자열의 각 char을 item에 담음
            char item = dartResult.charAt(i);
            // item이 점수이면
            if (('0' <= item && item <= '9') || item == 'A') {
                // 'A'이면 stack에 10추가, 그렇지 않으면 해당 숫자 추가
                if (item == 'A')
                    stack.add(10);
                else
                    stack.add((int) item - '0');
            }
            // item이 점수가 아니면
            else {
                // stack에서 top 추출
                int num = stack.remove(stack.size() - 1);
                // item이 보너스이면
                if (item == 'S' || item == 'D' || item == 'T') {
                    if (item == 'S')
                        stack.add((int) Math.pow(num, 1));
                    else if (item == 'D')
                        stack.add((int) Math.pow(num, 2));
                    else if (item == 'T')
                        stack.add((int) Math.pow(num, 3));
                }
                // item이 *이면
                else if (item == '*') {
                    if (stack.size() > 0) {
                        int previous = stack.remove(stack.size() - 1);
                        stack.add(previous * 2);
                    }
                    stack.add(num * 2);
                }
                // item이 #이면
                else if (item == '#')
                    stack.add(-num);
            }
        }
        return stack.stream().mapToInt(Integer::intValue).sum();
    }
}