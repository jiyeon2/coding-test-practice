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
        

# 풀이1 - 리스트로 변환
class Solution:
    def isPalindrome(self, s: str) -> bool:
        # 주어진 문자열을 영문자와 숫자만 포함하는 배열로 변환하기
        strs = []
        for char in s:
            if char.isalnum(): #only returns true if a string contains alphanumeric characters
                strs.append(char.lower())
        
        while len(strs) > 1:
            # strs의 맨 앞과 맨 뒤 값을 빼내면서 비교
            # 이렇게 하면 뒤집은 배열을 따로 만들 필요가 없다
            if strs.pop(0) != strs.pop(): 
                return False
        
        return True

# 풀이2 - 데크로 최적화
import collections

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # list 대신 deque 사용
        strs: Deque = collections.deque()

        for char in s:
            if char.isalnum():
                strs.append(char.lower())
        
        while len(strs) > 1 :
            # list.pop(0) 은 O(n)이지만, deque.popleft()는 O(1)!
            if strs.popleft() != strs.pop():
                return False
        return True

# 풀이3 - 슬라이싱
class Solution:
    def isPalindrome(self, s:str) -> bool:
        s = s.lower()
        s = re.sub('[^a-z0-9]', '' ,s) # 정규표현식..?

        return s == s[::-1]
        # 대부분의 문자열작업은 슬라이싱으로 처리하는 편이 빠르다
        # 리스트로 매핑하는 방법도 좋지만 그만큼 연산비용이 필요하다(속도 느림)