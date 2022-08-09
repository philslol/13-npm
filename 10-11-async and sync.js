


const { readFileSync, writeFileSync}  = require('fs');


//const first = readFileSync('./content/first.txt', 'utf8')
//const second = readFileSync('./content/second.txt', 'utf-8')
//console.log(first, second)

//writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`,{flag: 'a'})


const { readFile, writeFile}  = require('fs');



readFile('./content/first.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const first = result
        readFile('./content/second.txt', 'utf-8', (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            const second = result
            writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`,
                (err, result)=> {
                    if(err)
                    {
                        console.log(err)
                        return
                    }
                })
        })
    }
)