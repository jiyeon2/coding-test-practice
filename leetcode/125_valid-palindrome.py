# 주어진 문자열에서 문자인 값만 소문자로 바꾸어 arr배열에 넣음
# 배열을 뒤집은 reversedArr 배열을 만들어서
# 첫 인덱스부터 비교하면서 값이 다르면 false반환하게 함 

# wrong asnwer
# 문제에서 alphanumeric만 고려하라고 했는데
# c.isalpha() 이용해서 알파벳만 추려내서 틀림
class Solution:
    def isPalindrome(self, s: str) -> bool:
        arr = [c.lower() for c in list(s) if c.isalpha() ]
        reversedArr = arr[::-1]
        for i in range(len(arr)):
            if arr[i] != reversedArr[i]:
                return False
        
        return True
        
# 문자 추려낼 때 c.isnumeric()으로 숫자인 문자도 배열에 추가해서 통과함
class Solution:
    def isPalindrome(self, s: str) -> bool:
        arr = [c.lower() for c in list(s) if c.isalpha() or c.isnumeric() ]
        reversedArr = arr[::-1]
        for i in range(len(arr)):
            if arr[i] != reversedArr[i]:
                return False
        
        return True
        