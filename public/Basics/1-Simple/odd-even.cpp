#include<iostream>
using namespace std;

int main(){
    int testcases=0;
    cout<<"number of testcases:-";
    cin>>testcases;
    while(testcases--){
        int tempNum ;
        cin >> tempNum;
        (tempNum%2==0)?(cout<<"Even"<<endl):(cout<<"Odd"<<endl);
    }
    return 0;
}

// output:-
// number of testcases:-4
// 2
// Even
// 3
// Odd
// 4
// Even
// 4
// Even