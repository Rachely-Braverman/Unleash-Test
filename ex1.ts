/*
    The way to improve performance is not to wait for one and only then wait for the second
    but rather
    run both requests at the same time
    and this can be done by using the 'all' function
*/

async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
    return new Promise<number>(() => { })
}

async function myFunc() {
    let x1 = getNumberFromServer();
    let x2 = getNumberFromServer();
    const details = await Promise.all([x1, x2]);
    return details[0] + details[1];
}

myFunc();

export { }