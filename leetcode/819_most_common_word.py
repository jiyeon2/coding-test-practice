class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        # re 사용방법을 몰라서..
        # 제시된 구두점을 공백으로 대체한 후, split() 메서드로 배열로 만듦
        for punc in ["!", "?", "'", ";", ",", "."]:
            paragraph = paragraph.replace(punc, ' ')
            
        # 공백과 구두점 제외한, 소문자 단어 배열
        words = [word.lower() for word in paragraph.split()]
        
        # 단어별 출현회수 저장할 딕셔너리
        dic = {}
            
        # 딕셔너리에 단어별 출현회수 저장, banned배열에 있는 단어면 넘어감
        for w in words:
            if w in banned: continue
            if w in dic:
                dic[w] += 1
            else:
                dic[w] = 1
                
        
        # 딕셔너리 돌면서 출현회수가 큰 단어가 나오면 업데이트함
        maxCount = 0
        answer = ''
        for word in dic:
            if dic[word] > maxCount:
                maxCount = dic[word]
                answer = word

        return answer
            
        

import collections
# 리스트 컴프리헨션, counter 객체 사용
class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        words = [word for word in re.sub(r'[%\w]', ' ', paragraph).lower().split() if word not in banned]
        counts = collections.Counter(words)
        return counts.most_common(1)[0][0]