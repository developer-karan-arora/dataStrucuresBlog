#include<iostream>

using namespace std;
void reverse(int array[],int n){
    int count = (n+1)/2;
    for(int i=0;i<count;i++){
        swap(array[i],array[n-1]);
        n--;
    }
}
void print(int a[] , int n){
    for(int i=0;i<n;i++){
        cout << a[i] << " ";
    }
    cout << endl ;
}
int main(){
    int arrayA[5]={2,3,4,5,6};
    int arrayB[6]={2,3,4,5,6,7};
    reverse(arrayA,5);
    reverse(arrayB,6);
    print(arrayA,5);
    print(arrayB,6);
    return 0;
}