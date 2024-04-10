const fs = require('fs')

const requestHadler = (req,res) => {


    const url = req.url

    const method = req.method

    if(url === '/'){
            //Write and Send Html as a response
            res.write('<html>')
            res.write('<head><title>My Node Page</title></head>')
            res.write('<body><form  action="/message" method="POST"> <input type="text" name="message"><button type="submit">SEND</button> </form></body>')
            res.write('</html>')
            return res.end() //Close the response we are sending to the header
        }


        if(url === '/message' && method === 'POST'){
            const body= []; //Contain a memory space but keep the data inside

            //Fetch the data from the request via event listeners
            req.on('data', (chunk)=>{
                console.log(chunk)
                body.push(chunk)

            }) //Allows us to listen for events and whenever a new chunk is ready to be ready

            return req.on('end',()=>{
                //Buffer the chucks in the anonymous function above
                const parsedBody = Buffer.concat(body).toString()
                //Console log the parsedBody
                console.log(parsedBody)
                const message = parsedBody.split('=')[1]
                fs.writeFileSync('message.txt',message)
                // fs.writeFile('message.txt',message, (error) => {
                //     //Gracefully return an error that may occur
                // })
            })

            //Create a new file write and store the file
            //fs.writeFileSync('message.txt','PHOENIX- RISE FROM THE ASHES')
            //streams (Bits of info) and buffers(Bus Stop)
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        }
        
        //Pass Meta Info
        res.setHeader(
            'Content-Type',
            'text/html'
        )
        //Write and Send Html as a response
        res.write('<html>')
        res.write('<head><title>My Node Page</title></head>')
        res.write('<body><center>Hello Nodes</center></body>')
        res.write('</html>')
        res.end() //CLose the response we are sending to the header

}

module.exports= {
    handler : requestHadler,
    text:"Hello There"
}
