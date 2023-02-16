#include<iostream>
using namespace std;

int main(){
    char alphabet = 'A';
    int alphabetIndex = alphabet ;
    for(int i=1;i<=26;i++){
        char printAlph = alphabetIndex;
        cout << printAlph << endl;
        alphabetIndex++;
    }
    return 0;
}

// output :-
// A
// B
// C
// D
// E
// F
// G
// H
// I
// J
// K
// L
// M
// N
// O
// P
// Q
// R
// S
// T
// U
// V
// W
// X
// Y
// Z