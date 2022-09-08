const regExp = (str: string) => {

    const myRegexp = /\s(\w+?)=['"](.*?)['"]/g;
    let result;

    while (result = myRegexp.exec(str)) {
        console.log(result[1] + ':' + result[2]);
    }
}

const myString = '<a href="http://example.com">'
regExp(myString)

export {}