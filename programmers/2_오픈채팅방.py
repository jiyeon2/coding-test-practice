# user딕셔너리를 만들고 유저가 입장하거나, 별명 변경시 해당 uid의 값을 별명으로 저장해뒀다
# 처음에는 입장, 퇴장 시 answer배열에 바로 'user[uid]님이 어쩌구'하는 문자열을 저장했다
# 문자열에 변수를 넣어서 만들었어도 저장되는 상황에서 이미 값이 정해져 있기에
# 이후에 별명을 변경해도 문자열은 바뀌지 않았다
# 대신 f 배열을 만들어 거기에 'user[uid]님이 어쩌구' 문자열을 리턴하는 함수를 저장했다
# 변경이 완료된 후 f배열의 함수를 실행하면 변경된 user[uid]가 적용된 문자열이 리턴될거라 생각했기 때문이다

def solution(record):
    answer = [] # 최종 문자열을 저장할 배열
    f = [] # 문자열 리턴하는 함수를 저장할 배열
    user = {} # {uid: nickname} 을 저장할 딕셔너리
    
    def enterLog(uid, nickName):
        user[uid] = nickName
        f.append(lambda : answer.append(f'{user[uid]}님이 들어왔습니다.'))
        
    def leaveLog(uid):
        f.append(lambda : answer.append(f'{user[uid]}님이 나갔습니다.') )
        
    def changeNickName(uid, nickName):
        user[uid] = nickName
        
    for line in record:
        info = line.split(' ')
        command = info[0]
        uid = info[1]
        nickName = '' if command == 'Leave' else info[2]
        if command == 'Enter':
            enterLog(uid, nickName)
        elif command == 'Leave':
            leaveLog(uid)
        elif command == 'Change':
            changeNickName(uid,nickName)
    for i in f:
        i()
    
    return answer