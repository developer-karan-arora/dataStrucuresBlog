##code-1 (16-February-2023)


----Hello World
```
#include<iostream>
using namespace std;

int main(){
    cout << "helloWorld" << endl; 
    return 0;
}
```


----One to Hundred
```
#include <iostream>
using namespace std;

int main(){
    for (int i = 1; i <= 100; i++){
        cout << i <<endl;
    }
    return 0;
}
```


----A to Z 
```
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
```


----Print Odd Even 
```
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
```


----Print Odd till N
```
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
```


----Swap With Temp 
```
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
```


----Swap Without Temp 
```
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
```


----Paliandrome Number 
```
class Solution {
public:
    bool isPalindrome(int x) {
        bool status = true;
        long reversed = 0;
        long temp = x;
        if(x<0) return false;
        if(x==0) return true;
        while(x>0){
            int digit = x%10;
            reversed = reversed*10 + digit;
            x = x/10;
        }
        (temp==reversed)?(status = true):(status =  false);
        return status;
    }
};
```
