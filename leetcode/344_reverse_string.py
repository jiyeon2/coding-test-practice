# list.reverse() 메서드 사용
class Solution:
    def reverseString(self, s: List[str]) -> None:
        s.reverse() 


# 투포인터 사용(두개의 포인터 이용해 범위 조정하면서 풀이)
class Solution:
    def reverseString(self, s: List[str]) -> None:
        left = 0 # 배열의 첫번째 요소
        right = len(s)-1 # 배열의 마지막 요소
        while left < right:
            s[left], s[right] = s[right], s[left] # 스왑
            left += 1
            right -= 1
    