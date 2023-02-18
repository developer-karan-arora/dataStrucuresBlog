```
#include<bits/stdc++.h>
using namespace std;

int main (){
    int array[7] = {1,2,3,4,-5,6,19};
    int Min = INT_MAX;
    int Max = INT_MIN;
    for(int i=0 ; i<7;i++){
        if(array[i]>Max){Max = array[i] ;}
        if(array[i]<Min){Min = array[i] ;}
    }
    cout << " Max:- " << Max ;
    cout << " Min:- " << Min ;
    return 0;
}
```
```
#include <iostream>
using namespace std;
struct Pair {int min;int max;};
struct Pair getMinMax(int arr[], int low, int high){
    struct Pair minmax, mml, mmr;
    int mid;
    // If there is only one element
    if (low == high) {
        minmax.max = arr[low];
        minmax.min = arr[low];
        return minmax;
    }
    // If there are two elements
    if (high == low + 1) {
        if (arr[low] > arr[high]) {
            minmax.max = arr[low];
            minmax.min = arr[high];
        }
        else {
            minmax.max = arr[high];
            minmax.min = arr[low];
        }
        return minmax;
    }
    // If there are more than 2 elements
    mid = (low + high) / 2;
    mml = getMinMax(arr, low, mid);
    mmr = getMinMax(arr, mid + 1, high);
    // Compare minimums of two parts
    if (mml.min < mmr.min) minmax.min = mml.min;
    else minmax.min = mmr.min;
    // Compare maximums of two parts
    if (mml.max > mmr.max) minmax.max = mml.max;
    else minmax.max = mmr.max;
    return minmax;
}
// Driver code
int main(){
    int arr[] = { 1000, 11, 445, 1, 330, 3000 };
    int arr_size = 6;
    struct Pair minmax = getMinMax(arr, 0, arr_size - 1);
    cout << "Minimum element is " << minmax.min << endl;
    cout << "Maximum element is " << minmax.max;
    return 0;
}
```
```
#include<iostream>
using namespace std;
struct Pair{int min;int max;};
Pair getMinMax(int arr[], int n){
    struct Pair minmax;    
    int i;
    // If there is only one element
    if (n == 1){
        minmax.max = arr[0];
        minmax.min = arr[0];    
        return minmax;
    }
    // If there are more than one elements,
    if (arr[0] > arr[1]){
        minmax.max = arr[0];
        minmax.min = arr[1];
    }else{
        minmax.max = arr[1];
        minmax.min = arr[0];
    }
    for(i = 2; i < n; i++){
        if (arr[i] > minmax.max) minmax.max = arr[i];    
        else if (arr[i] < minmax.min) minmax.min = arr[i];
    }
    return minmax;
}
int main(){
    int arr[] = { 1000, 11, 445, 1, 330, 3000 };
    int arr_size = 6;
    struct Pair minmax = getMinMax(arr, arr_size);
    cout << "Minimum element is "<< minmax.min << endl;
    cout << "Maximum element is "<< minmax.max; 
    return 0;
}
```