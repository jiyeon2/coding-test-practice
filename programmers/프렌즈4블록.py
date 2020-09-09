def solution(m, n, board):
    count = 0
    board = [list(line) for line in board]
    willBeDeleted = set()
    
    def browse():
        for i in range(m-2,-1,-1):
            for j in range(n-1):
                # 좌표 i : m-2부터 0 까지, j : 0부터 n-1까지 탐색
                
                adjacentFourBlocksValue = [] # i,j 포함 인접4블록 값 저장할 배열
                
                # i,j 의 인접4블록 탐색
                for (x,y) in [(i,j),(i+1,j),(i,j+1),(i+1, j+1)]:
                    
                    #인접블록 중 값이 '0'인 경우(빈 공간인 경우) - 블록을 내림
                    if board[x][y] == '0':
                        notEmptyIndex = -1
                        for k in range(x-1,-1,-1):
                            if board[k][y] == '0': continue
                            notEmptyIndex = k
                            break
                        if notEmptyIndex != -1:
                            board[x][y], board[notEmptyIndex][y] = board[notEmptyIndex][y],board[x][y]
                    
                    # 인접블록의 값을 배열에 저장(
                    adjacentFourBlocksValue.append(board[x][y])
                
                if adjacentFourBlocksValue[0] != '0' and adjacentFourBlocksValue.count(adjacentFourBlocksValue[0]) == len(adjacentFourBlocksValue):
                    for (x,y) in [(i,j),(i+1,j),(i,j+1),(i+1, j+1)]:
                        willBeDeleted.add((x,y))
                        
    while True:
        browse() # 보드 탐색하며 삭제될 블록 좌표 저장, 빈공간 채움
        
        # 삭제될 블록 갯수가 0 이면 while문 종료
        deletedBlockCount = len(willBeDeleted)
        if deletedBlockCount == 0: break
            
        # 삭제될 블록 개수를 합함
        count += deletedBlockCount
        
        # 실제 보드에서 블록 삭제, 삭제될 블록이 저장된 배열을 초기화 함
        for (x,y) in willBeDeleted:
            board[x][y] = '0'
        willBeDeleted.clear()
        deletedBlockCount = 0
        
    
    
    return count