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
            
        
    return answer+1