class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letLogs = []
        digLogs = []
        result = []
        for log in logs:
            splitLog = log.split(' ') # 띄어쓰기로 구분된 문자열을 배열로 변환
            if splitLog[1].isnumeric(): # identifier 제외한 부분이 숫자인 경우
                digLogs.append(log)     # 숫자로그 배열에 넣음
            else:
                originLog = log
                logForSort = ' '.join(splitLog[1:])
                identifier = splitLog[0]
                letLogs.append([originLog, logForSort,identifier])
        # 문자로그의 경우 identifier 제외하고 오름차순 정렬, 같은 값이면 identifier순으로 정렬
        letLogs.sort(key=lambda x:(x[1], x[2]))
        
        # result에 문자로그 먼저 넣고, 숫자로그를 입력된 순서대로 넣음
        for letLog in letLogs:
            result.append(letLog[0])
        for digLog in digLogs:
            result.append(digLog)
            
        return result
        

# 람다함수로 정렬하고 +연산자로 이어붙이기
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        letters, digits = [], []
        for log in logs:
            if log.split()[1].isdigit():
                digits.append(log)
            else:
                letters.append(log)
        
        letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))
        return letters+digits # + 연산자로 리스트 연결 가능

# str.isdigit() / str.isnumeric() / str.isdecimal()
# isdecimal() : 0123456789로만 이뤄진, int형으로 바로 변환가능한 문자열에만 true
# isdigit() : 3² 도 true리턴
# isnumeric() : isdigit보다 더 포괄적임. ½ 와 같은 텍스트도 true반환