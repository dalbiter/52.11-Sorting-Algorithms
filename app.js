// Bubble Sort
function bubbleSort(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            count++;
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }   
    }
    console.log("TOTAL COUNT:", count)
    return arr;    
}

function bubbleSort2(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i; j++){
            count++
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }   
    }
    console.log("TOTAL COUNT:", count)
    return arr;     
}

function bubbleSort3(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let j = 0; j < arr.length-i; j++){
            count++
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true;
            }
        }
        if(!swapped) break;   
    }
    console.log("TOTAL COUNT:", count)
    return arr;     
}

// Merge Sort
function merge(arr1, arr2){
    const results = [];
    let i = 0;
    let j = 0;
   while( i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    return results;
}

function mergeSort(arr){
    //base case
    if(arr.length <= 1) return arr;
        const mid = Math.floor(arr.length/2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));
        return merge (left, right)   
}