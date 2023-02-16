#include<iostream>
using namespace std;
int main (){
    int tempNumA;
    int tempNumB;
    int temp;

    // Take number
    cout << "Enter temp numbers ";
    cin >> tempNumA ;
    cin >> tempNumB ;

    // printing number 
    cout<< "tempA :- " << tempNumA << endl; 
    cout<< "tempB :- " << tempNumB << endl; 

    // swaping Number
    temp = tempNumA ;
    tempNumA = tempNumB ;
    tempNumB = temp ;

    // printing number after swapping
    cout<< "tempA :- " << tempNumA << endl; 
    cout<< "tempB :- " << tempNumB << endl; 
    return 0;
}

// output :-
// Enter temp numbers 5 53
// tempA :- 5
// tempB :- 53
// tempA :- 53
// tempB :- 5