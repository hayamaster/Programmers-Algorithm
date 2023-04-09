import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

class Solution {
    public int solution(int[] d, int budget) {
        ArrayList<Integer> arr = new ArrayList<>();
        for (int item : d)
            arr.add(item);
        Collections.sort(arr);
        int idx = 0;
        while (idx < d.length)
        {
            if (budget - arr.get(idx) < 0)
                return idx;
            budget -= arr.get(idx);
            idx++;
        }
        return idx;
    }
}