//Object.keys
// bitwise operators


const weights = {
    green: 6,
    purple: 9,
    yellow: 5,
    red: 7,
    blue: 8
}

const weighted = function(weights) {
    const entries = [...Object.entries(weights)]
    const results = [];
    for (let i = 0; i < entries.length; i++) {
        for (let j = 0; j < entries[i][1] ; j++) {
            results.push(entries[i][0]);
        }
    };
    return(results[Math.floor(Math.random() * results.length)]);
};
console.log(weighted(weights));

//jordan's way:
const weightedLottery = weights => {
    let containerArray = [];
    Object.keys(weights).forEach(key =>{
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })
    return containerArray[(Math.random() * containerArray.length) | 0];
}
console.log(weightedLottery(weights));
