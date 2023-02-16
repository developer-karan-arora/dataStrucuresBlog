#include<iostream>
using namespace std;

int main(){
    float tempNumA,tempNumB;
    cout << "Enter numbers:- ";
    cin >> tempNumA >> tempNumB ;

    // swapping Number
    tempNumA = tempNumA + tempNumB;
    tempNumB = tempNumA - tempNumB;
    tempNumA = tempNumA - tempNumB ;

    // printing
    cout << "tempB :- " << tempNumB << endl << "tempA :- " << tempNumA ;
    return 0;
}

// output :- 
// Enter numbers:- 5 3
// tempB :- 5
// tempA :- 3
