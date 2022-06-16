function findFirstOccurrence(number: number[],target: number): number {
    let low: number = 0;
    let high: number = number.length-1;
    let result: number = -1;
    while (low <= high) {
        let mid = Math.floor((low+high)/2);
        if (number[mid] == target) {
            result = mid;
            high = mid-1;
        }else if (number[mid] < target) {
            low = mid +1;
        }else {
            high = mid -1;
        }
    }
    return result;
}
let data: number[] = [1,2,2,3,3,5,6,8,8,9];
let target: number = 3;
let index: number = findFirstOccurrence(data,target);
if (index !== -1) {
    console.log(`phan tu ${target} xuat hien dau tien o vi tri ${index}`)
}else {
    console.log(`phan tu ${target} khong ton tai trong mang`)
}