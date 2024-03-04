// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> nums)
{
    int cnt = nums.size()/2;
    sort(nums.begin(), nums.end());
    nums.erase(unique(nums.begin(), nums.end()), nums.end());
    
    return nums.size() > cnt ? cnt : nums.size();
}