#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int **sizes, size_t sizes_rows, size_t sizes_cols)
{
    int w = 0;
    int h = 0;
    for (int i = 0; i < sizes_rows; i++)
    {
        int x = sizes[i][0];
        int y = sizes[i][1];
        if (sizes[i][0] < sizes[i][1])
        {
            int temp = x;
            x = y;
            y = temp;
        }
        if (w < x)
            w = x;
        if (h < y)
            h = y;
    }
    return w * h;
}