const fsPromises = require('fs/promises')
const axios = require('axios')



    const sendGetRequest = async () => {
        try {
            console.log('START')
            const resp = await axios.get('http://www.worldslongestwebsite.com/');
            await fsPromises.writeFile('index.html', resp.data, 'utf-8')
            stats = await fsPromises.stat('index.html')
            console.log(stats.size)
            console.log('The End')
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    sendGetRequest()