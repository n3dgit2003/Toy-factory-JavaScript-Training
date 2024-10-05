function moveEmptyBoxesToEnd(boxes) {
    let count = 0;
    let emptyCount = 0; 

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] !== 0) {
            boxes[count++] = boxes[i]; 
        } else {
            emptyCount++; 
        }
    }

   
    while (count < boxes.length) {
        boxes[count++] = 0;
    }

    return emptyCount;
}


let boxes = [1, 0, 2, 0, 3, 4, 0, 5];
let emptyBoxesCount = moveEmptyBoxesToEnd(boxes);

console.log("Updated Boxes: ", boxes);  
console.log("Number of Empty Boxes: ", emptyBoxesCount);  
