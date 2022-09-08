const Ex4 = () => {
    async function getNumberFromServer() {
        //some api call to return a number from a remote server
    }

    async function run1000(): Promise<void> {
        const promises: Promise<number>[] = [];
        for (let i = 0; i < 1000; i++) {
            // promises.push(getNumberFromServer());
        }

        for (const p of promises) {
            await p
        }
    }


}
export {}