def solution(m, n, board):
    count = 0
    board = [list(line) for line in board]
    willBeDeleted = set()
    
    def fillEmptyBlock():
        # 빈칸 채우기
        
        # 삭제된 칸의 열만 추려냄
        emptyCols = set([col for (row,col) in willBeDeleted])
        for col in emptyCols:
            for i in range(m-1,-1,-1):
                if board[i][col] != '0': continue
                    
                notEmptyRow = -1
                for k in range(i-1, -1, -1):
                    if board[k][col] == '0': continue
                    notEmptyRow = k
                    break
                    
                if notEmptyRow == -1: break 
                    
                board[i][col], board[notEmptyRow][col] = board[notEmptyRow][col], board[i][col]

    def browse():
        # 좌표 i : m-2부터 0 까지, j : 0부터 n-1까지 탐색
        # 인접블록 확인
        for i in range(m-2,-1,-1):
            for j in range(n-1):
                if board[i][j] == board[i+1][j] == board[i][j+1] == board[i+1][j+1] != '0':
                    for (x,y) in [(i,j),(i+1,j),(i,j+1),(i+1, j+1)]:
                        willBeDeleted.add((x,y))
                        
    while True:
        browse() # 보드 탐색하며 삭제될 블록 좌표 저장
        
        # 삭제될 블록 갯수가 0 이면 while문 종료
        deletedBlockCount = len(willBeDeleted)
        if deletedBlockCount == 0: break
            
        # 삭제될 블록 개수를 합함
        count += deletedBlockCount
        
        # 실제 보드에서 블록 삭제
        for (x,y) in willBeDeleted:
            board[x][y] = '0'
        
        # 삭제될 블록이 있는 열만 탐색하며 빈 블록 채우기
        fillEmptyBlock() 
        
        # 삭제될 블록이 저장된 배열을 초기화 함
        willBeDeleted.clear()
        deletedBlockCount = 0

        
    
    return count