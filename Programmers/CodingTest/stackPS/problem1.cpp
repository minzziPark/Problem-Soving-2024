// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어
#include <vector>
#include <iostream>

using namespace std;

vector<int> solution(vector<int> arr) 
{
    vector<int> answer;
    for(int i=0; i<arr.size(); i++){
        if(answer.size() == 0){
            answer.push_back(arr[i]);
        }else{
            if(answer.back() != arr[i]){
                answer.push_back(arr[i]);
            }
        }
    }
    
    return answer;
}