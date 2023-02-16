#include<iostream>
using namespace std;
int main(){
    int tempNum=0;
    cout << "Enter the nax limit ";
    cin >> tempNum ;
    for(int i=1;i<tempNum;){
        cout << i << endl;
        i = i + 2;
    }
    return 0;
}

// output :-
// Enter the nax limit 23
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19
// 21