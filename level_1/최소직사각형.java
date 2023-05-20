class Solution {
    public int solution(int[][] sizes) {
        int width = 0;
        int height = 0;
        for (int i = 0; i < sizes.length; i++) {
            if (sizes[i][0] < sizes[i][1]) {
                int temp = sizes[i][0];
                sizes[i][0] = sizes[i][1];
                sizes[i][1] = temp;
            }
            width = (width < sizes[i][0]) ? sizes[i][0] : width;
            height = (height < sizes[i][1]) ? sizes[i][1] : height;
        }
        return width * height;
    }
}