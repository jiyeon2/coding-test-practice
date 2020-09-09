# 테스트케이스 4,7,9,10,11 통과 못함
def solution(str1, str2):
    answer = 0
    set1 = getMultiSet(str1)
    set2 = getMultiSet(str2)
    
    intersection = getIntersection(set1,set2)
    union = getUnion(set1,set2)
    
    if len(set1) == 0 and len(set2) == 0:
        answer = 1
    else:
        if len(intersection) == 0 or len(union) == 0:
            answer = 0
        else:
            answer = len(intersection)/len(union)
            
    
    # print('s1:',set1,' s2: ',set2)
    # print(intersection, union, answer)
    return int(answer*65536)

def getMultiSet(str):
    result = []
    str = str.lower()
    alphabet = 'abcedfghijklmnopqrstuvwxyz'
    for i in range(len(str)-1):
        if str[i] not in alphabet or str[i+1] not in alphabet: continue
        result.append(str[i:i+2])
    return result
        
def getIntersection(a,b):
    result = [x for x in a if x in b]
    return result

def getUnion(a,b):
    copyA = [x for x in a]
    copyB = [x for x in b]
    intersection = getIntersection(a,b)
    for x in intersection:
        copyA.remove(x)
        copyB.remove(x)
    result = copyA + copyB + intersection
    
    return result