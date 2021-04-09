const fsPromises = require('fs/promises')

const readAnyFileAsync = async () => {
    try {
        let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
        txt1 = txt1.toUpperCase()
        await  fsPromises.writeFile('hello.txt', txt1)
      } catch (e) {
        console.log(e.message)
      }
}

readAnyFileAsync()
