

import math
def solution(str1, str2):
    s1 = str1.lower()
    s2 = str2.lower()

    # 두 문자열로부터 2개의 문자로만 이뤄진 다중집합 만듦
    # string.isalpha() : 문자열이 알파벳으로만 이뤄져있는지 여부 판별    
    set1 = []
    for i in range(len(s1)-1):
        if s1[i:i+2].isalpha():
            set1.append(s1[i:i+2])
            
    set2 = []
    for i in range(len(s2)-1):
        if s2[i:i+2].isalpha():
            set2.append(s2[i:i+2])
    
    # 다중집합이 공집합일 경우 바로 리턴
    if set1 == set2 == []:
        return 65536
            
    # 두 다중집합의 교집합, 합집합을 구함
    intersection = getIntersection(set1,set2)
    union = getUnion(set1,set2,intersection)
    answer = len(intersection) / len(union)
    
    return math.floor(answer*65536)

# 교집합 구하기
# 길이가 짧은 배열 a 기준으로 for루프를 돌려서
# b에도 같은 요소가 있다면 b에서 해당 요소를 삭제하고 교집합 배열에 추가함
def getIntersection(a,b):
    if len(a) > len(b):
        a,b = b,a
    copyA = a[:]
    copyB = b[:]
    intersection = []
    for c in copyA:
        if c in copyB:
            copyB.remove(c)
            intersection.append(c)
    return intersection

# 합집합 구하기 
# 합집합은 a+b-intersection
def getUnion(a,b,intersection):
    union = a[:]+b[:]
    for c in intersection:
        if c in union:
            union.remove(c)
    return union
