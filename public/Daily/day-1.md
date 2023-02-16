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
