

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


# [두 배열의 교집합 데이터 구하기](https://eminentstar.github.io/2017/06/24/two-array-intersection.html)

# 다른사람 풀이1
def def solution(input):
    str1 = [str1[i:i+2].lower() for i in range(len(str1)-1) if str1[i:i+2].isalpha()]
    str2 = [str2[i:i+2].lower() for i in range(len(str2)-1) if str2[i:i+2].isalpha()]
    
    gyo = set(str1) & set(str2) # str1.intersection(str2) 와 같다
    hap = set(str1) | set(str2) # str2.union(b)와 같다

    if len(hap) == 0:
        return 65536

    # 교집합 요소에 대해 원래 배열에서 개수를 카운트함(set은 중복요소 포함이 안되므로)
    gyo_sum = sum([min(str1.count(gg), str2.count(gg)) for gg in gyo])
    hap_sum = sum([max(str1.count(hh), str2.count(hh2)) for hh in hap])

    return math.floor((gyo_sum/hap_sum)*65536)

# 다른사람 풀이2
from collections import Counter
def solution(str1, str2):
    s1 = [str1[i:i+2].lower() for i in range(len(str1)-1) if str1[i:i+2].isalpha()]
    s2 = [str2[i:i+2].lower() for i in range(len(str2)-1) if str2[i:i+2].isalpha()]
    if not s1 and not s2:
        return 65536
    
    c1 = Counter(s1) #Counter({'ha': 2, 'an': 1, 'nd': 1, 'ds': 1, 'sh': 1, 'ak': 1, 'ke': 1}) 
    c2 = Counter(s2) #Counter({'ha': 2, 'sh': 1, 'ak': 1, 'ke': 1, 'an': 1, 'nd': 1, 'ds': 1})
	
    intersectionCount = sum((c1&c2).values())
    unionCount = sum((c1|c2).values())
    answer = int(intersectionCount / unionCount*65536)
    return answer