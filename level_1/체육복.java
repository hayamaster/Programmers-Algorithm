import java.util.*;
import java.util.stream.Collectors;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        List<Integer> arr_lost 
            = Arrays.stream(lost).boxed().collect(Collectors.toList());
        List<Integer> arr_reserve 
            = Arrays.stream(reserve).boxed().collect(Collectors.toList());
        
        for (int i = 0; i < arr_lost.size(); i++)
        {
            for (int j = 0; j < arr_reserve.size(); j++)
            {
                if (arr_lost.get(i) == arr_reserve.get(j))
                {
                    arr_lost.remove(i--);
                    arr_reserve.remove(j--);
                    break;
                }
            }
        }
        Collections.sort(arr_lost);
        Collections.sort(arr_reserve);
        
        for (int i = 0; i < arr_lost.size(); i++)
        {
            for (int j = 0; j < arr_reserve.size(); j++)
            {
                if (arr_lost.get(i) - 1 == arr_reserve.get(j) 
                   || arr_lost.get(i) + 1 == arr_reserve.get(j))
                {
                    arr_lost.remove(i--);
                    arr_reserve.remove(j--);
                    break;
                }
            }
        }
        return n - arr_lost.size();
    }
}