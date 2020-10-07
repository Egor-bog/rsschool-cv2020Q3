function calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
        if (arr.length == 0) depth = 1;
        else {
            arr.forEach(item => {
                let depthItem = 1;
                depthItem += calculateDepth(item);
                if(depthItem > depth) depth = depthItem;
            })
        }
    }
    return depth;
}


console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])); 