const getTwoIntervalOnSubsequence = (boxes, k) => {
    let finalResult = []
    try {
        let result = []
        boxes.forEach((box, index) => {
            let pen = box;
            let interval = [index]
            for (let x = index; x < boxes.length; x++) {
                let nextIndex = x + 1;
                interval.push(nextIndex);
                pen = pen + boxes[nextIndex];
                if (pen === k) {
                    result.push(interval);
                    break;
                }
            }
        });

        const formattedResult = formatResult(result);
        finalResult = validateResult(formattedResult);
        return finalResult;
    } catch (err) {
        console.log("There's an error: ", err);
    } finally {
        return finalResult;
    }
}

const formatResult = arr => {
    let result = [];
    // format to range only not including all indexes
    arr.forEach(sub => {
        const firstIndex = sub[0];
        const lastIndex = sub[sub.length - 1];
        const newArr = [firstIndex, lastIndex];
        
        result.push(newArr);
    })
    return result;
}

const validateResult = arr => {
    let result = [];

    // remove overriding
    let prevItem = null;
    for (const [i, res] of result.entries()) {
        console.log("test :: ", res);
        if (prevItem === null) {
            prevItem = res;
            continue;
        }
        
        const duplicate = prevItem.filter(val => res.includes(val));
        if(duplicate.length !== 0) {
            result.splice(i, 1);
        }
    }

    // select minimum boxes
    result = arr.sort((a,b) => {
        const aFirst = a[0];
        const aLast = a[1];

        const bFirst = (b[0]);
        const bLast = (b[1]);

        const aLength = aLast - aFirst;
        const bLength = bLast - bFirst;
        
        return aLength - bLength
    }).splice(0, 2);

    return result;
}

let arr = [1, 2, 2, 3, 4, 6, 3, 1, 4, 2, 8];
let k = 5

const test = getTwoIntervalOnSubsequence(arr, k);
console.log("This is a test: \n", test);