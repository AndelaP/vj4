const http = require('http')

let poruke = [
    {
    id: 1,
    sadrzaj: 'HTML je jednostavan',
    },
    {
    id: 2,
    sadrzaj: 'React koristi JSX sintaksu',
    },
    {
    id: 3,
    sadrzaj: 'GET i POST su najvaznije metode HTTP protokola',
    }
   ]
   const app = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(poruke))
   })
   app.get('/api/poruke/:id', (req, res) =>{
    const id = Number(req.params.id)
    const poruka = poruke.find(p => p.id === id)
   
    if (poruka){
    res.json(poruka)
    } else {
    res.status(404).end()
    }
   })
   app.delete('/api/poruke/:id', (req, res) => {
    const id = Number(req.params.id)
    poruke = poruke.filter(p => p.id !== id)
    res.status(204).end()
   })
   
   
const PORT = 3001
app.listen(PORT)
console.log(`Posluzitelj je pokrenut na portu ${PORT}`);
   