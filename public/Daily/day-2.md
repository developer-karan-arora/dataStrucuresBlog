 (17-February-2023)
#reverse Array
``` [reversing an array - Two pointer]
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
```
______________________________
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
________________________________
PROBLEM -- Kth smallest element
```
class Solution{
    public:
    // arr : given array
    // l : starting index of the array i.e 0
    // r : ending index of the array i.e size-1
    // k : find kth smallest element and return using this function
    int kthSmallest(int arr[], int l, int r, int k) {
        //code here
        sort(arr,arr+r+1);
        return arr[k-1];
    }
};
```
``` [just copied and pasted from gfg]
class Solution{
    public:
    // arr : given array
    // l : starting index of the array i.e 0
    // r : ending index of the array i.e size-1
    // k : find kth smallest element and return using this function
    int kthSmallest(int arr[], int l, int r, int k) {
        //code here
        priority_queue<int> pq;
        for(int i=l; i<=r; i++)
        {
            pq.push(arr[i]);
            if(pq.size() > k) pq.pop();
        }
        return pq.top();
    }
};
```
_____________________________
#Sort012
#Use sorting algorithms
-- insertion sort
-- bubble sort 
-- merge sort
-- quick sort
-- sort function


#sorting from scatch
-- using counter technique
-- using auxilary array
-- using switch case algo
-- using a temp varriable

```
class Solution
{
    public:
    void sort012(int a[], int n)
    {
        // code here 
        sort(a,a+n);
    }
    
};
```
```
class Solution
{
    public:
    void sort012(int a[], int n)
    {
        int low=0;
        int mid=0;
        int high=n-1;
        int temp;
        for(int i=0;i<=high;i++)
        {
            if(a[i]==0){
                temp=a[i];
                a[i]=a[low];
                a[low]=temp;
                low++;
                mid++;
            }
           
            else if(a[i]==2){
                temp=a[i];
                a[i]=a[high];
                a[high]=temp;
                high--;
            }
            
            else{
                mid++;
            }
        }
    }
    
};
```
```[Counter]
class Solution
{
    public:
    void sort012(int a[], int n)
    {
        // code here
        int zero=0,one=0,two=0;
        for(int i=0;i<n;i++){
            if(a[i]==0){
                zero++;
            }else if(a[i]==1){
                one++;
            }else{
                two++;
            }
        }
        int i=0;
        while(zero--){
            a[i++]=0;
        }
        while(one--){
            a[i++]=1;
        }while(two--){
            a[i++]=2;
        }
    }
    
};
```
```
class Solution
{
    public:
    void sort012(int a[], int n)
    {
        // code here 
         int low=0, mid=0, high=n-1;
        
        //logic
        while(mid<=high)
        {
            switch(a[mid])
            {
            case 0:
                swap(a[low++], a[mid++]);
                break;
                
            case 1:
                mid++;
                break;
                
            case 2:
                swap(a[mid], a[high--]);
                break;                
            }
        }
        
        
    }
    
};
```
``` [Auxillary Array]
class Solution
{
    public:
   
    void sort012(int a[], int n)
    {
        int b[n],i,j=0;
        for(i=0;i<n;i++)
        {
            if(a[i]==0)
           {
		 b[j]=a[i];
            j++;}
        }
        for(i=0;i<n;i++)
        {
            if(a[i]==1){
             b[j]=a[i];
			 j++;   
        }}
        for(i=0;i<n;i++)
        {
            if(a[i]==2)
          {
	      b[j]=a[i];
                j++;
    }    }
    for(i=0;i<n;i++)
    {
    	a[i]=b[i];
	}
    }
    
    
};
```