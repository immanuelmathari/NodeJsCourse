// reviewed 21.08.25

// what is asynchronous code - does not happen  immediately.
setTimeout(() => {
    console.log('Timer is done!');
    // after fetchData()
    fetchData(text => {
        console.log(text);
    })
    // fetchData2().then(text => {
    //     console.log(text);
    // })
    // advantage of using promises we can use multiple thens
    fetchData2()
        .then(text2 => {
            console.log(text2);
            return fetchData2();
        })
        .then(text3 => {
            console.log(text3);
        });
}, 2000);

console.log('Hello');
console.log('Mathari');

// 09.08.25
// the callback is the function we call once done with the timer
const fetchData = callback => {
    setTimeout(() => {
        callback('Done1');
    }, 1500)
}

const fetchData2 = () => {
    // after fetching the function in the setTimeout, we want to use a promise
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Done2');
    }, 1500);
    });
    return promise;
};

// you need to know that Javascript does not stop execution for asynchronous tasks to complete