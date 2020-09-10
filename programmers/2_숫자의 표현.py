# [0,1,2,3,4,5, .... n]까지의 숫자 배열을 만들고
# start부터 end까지 연속된 수 배열의 합(total)을 구한다
# total < n인 경우 다음 수를 더한다(end+1)
# total > n인 경우 맨 처음의 수를 증가시킨다(start+1) 
# total == n인 경우 answer를 증가시키고 맨 처음의 수를 증가시킨다

def solution(n):
    answer = 0
    nums = [i for i in range(n+1)]
    start = 1
    end = 1
    total = 1
    while start < n-1 and end < n-1:
        if total < n:
            end += 1
            total += nums[end]
        elif total > n:
            total -= nums[start]
            start += 1
        elif total == n:
            answer += 1
            total -= nums[start]
            start += 1
            
        
    return answer+1 #start == end == n인 경우 한가지를 포함시킨다


# 다른사람 풀이
# n이 3개의 연속된 자연수의 합 i-1, i, i+1으로 표현된다고 하면
# n = 3i, 즉 n은 3의 배수이다.
# n이 5개의 연속된 자연수의 합으로 표현된다면, n은 5의 배수이다
# 따라서 n의 약수 중 홀수가 몇개있냐는 문제와 같은 문제로 해석할 수 있다...?????
def expression(num):
    return len([i for i in range(1,num+1,2) if num%i is 0])
