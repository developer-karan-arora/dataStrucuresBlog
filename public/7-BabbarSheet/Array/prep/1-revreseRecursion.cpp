#include<iostream>
using namespace std;
void print(int arr[],int n){
    for(int i=0;i<n;i++){
        cout << arr[i] << " ";
    }
    cout << endl ;
}
void reverse(int arr[],int start,int end){
    if(start>end) return;
    swap(arr[start],arr[end]);
    start++;end--;
    reverse(arr,start,end);
}
int main(){
    int arr[5] = {2,1,55,53,13};
    print(arr,5);
    reverse(arr,0,5);
    return 0;
}