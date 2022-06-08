const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const albums = {
    'time-man': {
        'name': '(Don\'t Mess with the) Time Man',
        'releaseDate': 'March 21, 2000', 
        'albumType': 'Studio EP',
        'peakPosition': 0
    },
    'breaking-the-silence': {
        'name': 'Breaking the Silence',
        'releaseDate': '2001', 
        'albumType': 'Studio EP',
        'peakPosition': 0
    },
    'one-and-done': {
        'name': 'One and Done',
        'releaseDate': 'April 25, 2006', 
        'albumType': 'Studio EP',
        'peakPosition': 0
    },
    'halestorm': {
        'name':'Halestorm', 
        'releaseDate': 'April 28, 2009',
        'albumType': 'Studio LP', 
        'peakPosition': 11
    }, 
    'live-in-philly-2010': {
        'name':'Live in Philly 2010', 
        'releaseDate': 'November 16, 2010',
        'albumType': 'Live EP', 
        'peakPosition': 0
    },
    'reanimate': {
        'name': 'Reanimate: The Covers EP',
        'releaseDate': 'March 22, 2011', 
        'albumType': 'Studio EP',
        'peakPosition': 20
    },
    'mz-hyde': {
        'name': 'Hello, It\'s Mz. Hyde',
        'releaseDate': 'January 24, 2012', 
        'albumType': 'Studio EP',
        'peakPosition': 11
    },
    'the-strange-case-of': {
        'name': 'The Strange Case Of...',
        'releaseDate': 'April 10, 2012', 
        'albumType': 'Studio LP',
        'peakPosition': 7
    },
    'in-the-live-room': {
        'name': 'In the Live Room',
        'releaseDate': 'November 6, 2012', 
        'albumType': 'Live EP',
        'peakPosition': 0
    },
    'reanimate-2': {
        'name': 'Reanimate 2.0: The Covers EP',
        'releaseDate': 'October 15, 2013', 
        'albumType': 'Studio EP',
        'peakPosition': 5
    },
    'into-the-wild-life': {
        'name': 'Into the Wild Life',
        'releaseDate': 'April 14, 2015', 
        'albumType': 'Studio LP',
        'peakPosition': 1
    },
    'into-the-wild-live': {
        'name': 'Into the Wild Live: Chicago',
        'releaseDate': 'April 15, 2016', 
        'albumType': 'Live EP',
        'peakPosition': 0
    },
    'reanimate-3': {
        'name': 'Reanimate 3.0: The Covers EP',
        'releaseDate': 'January 6, 2017', 
        'albumType': 'Studio EP',
        'peakPosition': 1
    },
    'vicious': {
        'name': 'Vicious',
        'releaseDate': 'July 27, 2018', 
        'albumType': 'Studio LP',
        'peakPosition': 1
    },
    'vicious-stripped': {
        'name': 'Vicious (Stripped)',
        'releaseDate': 'March 6, 2020', 
        'albumType': 'Studio EP',
        'peakPosition': 0
    },
    'reimagined': {
        'name': 'Reimagined',
        'releaseDate': 'August 14, 2020', 
        'albumType': 'Studio EP',
        'peakPosition': 0
    },
    'back-from-the-dead': {
        'name': 'Back from the Dead',
        'releaseDate': 'May 6, 2022', 
        'albumType': 'Studio LP',
        'peakPosition': 4
    },
    'unknown':{
        'name': 'unknown',
        'releaseDate': 'unknown',
        'albumType': 'unknown',
        'peakPosition': 0
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/albums', (request,response)=>{
    response.json(albums)
})

app.get('/albums/:name', (request,response)=>{
    const albumName = request.params.name.toLowerCase().replaceAll(' ', '-')
    if( albums[albumName] ){
       response.json(albums[albumName]) 
    }else{
        response.json(albums['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})