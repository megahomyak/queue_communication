// Makes unique IDs, can be used for task identification
let makeIdMaker = () => {
    let takenCount = 0;
    let free = [];
    return {
        make: () => {
            let oldTakenCount = takenCount;
            ++takenCount;
            if (free.length == 0) {
                return oldTakenCount.toString();
            } else {
                return free.pop();
            }
        },
        release: id => {
            --takenCount;
            if (takenCount == 0) {
                free = [];
            } else {
                free.push(id);
            }
        },
    };
};
