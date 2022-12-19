def solution(nums):
    size = len(nums)//2
    nums = list(set(nums))
    return (len(nums) if size > len(nums) else size)
