# 우선 균형잡힌 문자열을 만드는 재귀함수 makeRight를 만들고
# 문제에 주어진 문자열 변환과정을 만들었다
# 그 과정에서 필요한 함수들, 균형잡힌 문자열로 분리하는 divide 함수와
# 균형잡힌 문자열인지 아닌지 확인하는 checkRight 함수를 만들었다

def solution(p):

    # 입력받은 문자열을 두 문자열 
    # u(더이상 나눠지지 않는 균형잡힌 문자열),
    # v(나머지, 혹은 빈 문자열)로 분리하여 반환한다
    # balance 라는 변수를 0으로 초기화해두고
    # 입력받은 문자열을 하나씩 확인하면서 ( 이면 +1을 하고 ) 이면 -1을 해서
    # 매번 balance를 확인하고 그 값이 0인 경우의 인덱스를 기준으로
    # 문자열을 잘라서 내보냈다
    def divide(s) -> ['str', 'str']:
        balance = 0
        i = 0
        for idx, value in enumerate(s):
            balance = balance + 1 if value == '(' else balance -1
            if balance == 0:
                i = idx
                break
        return [s[:i+1], s[i+1:]]
    
    # 스택이라는 변수를 빈 리스트로 초기화해서 입력된 문자열 s에서 마지막 요소를 하나씩 빼서 넣었다
    # 넣을 때 마다 stack의 마지막 요소가 '('이고 마지막에서 두번째 요소가 ')'이면 두개를 빼냈다
    # 처음에 헷갈려서 괄호를 반대로 했다가 원하는 답이 안나와서 고쳤다
    # 문자열s를 모두 확인했을 때, 스택에 값이 남아있으면 균형잡힌 문자열이 아니므로 false를 반환한다
    def checkRight(s) -> bool:
        stack = []
        while s:
            stack.append(s[-1])
            s = s[:-1]
        
            if len(stack) >= 2 : 
                if stack[-2] == ")" and stack[-1] == "(":
                    stack = stack[:-2]  
        
        return False if stack else True
    
    # 문제에서 주어진 균형잡힌 문자열 만드는 방법을 그대로 따라한 재귀함수이다
    def makeRight(s) -> str:
        if s == '': return s
        [u,v] = divide(s)
        result = ''
        if checkRight(u):
            result = u+makeRight(v)
        else:
            temp = '('
            temp = temp+makeRight(v)
            temp += ')'
        
            # u = u[1:-1]
            u = [char for char in u[1:-1]]  
            for i in u:
                temp += '(' if i == ')' else ')'
            result = temp
        return result
    
    answer = makeRight(p)
    
    return answer