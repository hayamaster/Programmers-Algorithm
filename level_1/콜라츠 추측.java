class Solution {
    public int solution(int num) {
        int count = 0;
        return collatz((long)num, count);
    }
    
    public int collatz(long num, int cnt)
    {
        if (num == 1)
            return cnt;
        if (cnt == 500)
            return -1;
        
        return (num % 2 == 0) ? collatz(num / 2, cnt + 1) : collatz(num * 3 + 1, cnt + 1);
    }
}