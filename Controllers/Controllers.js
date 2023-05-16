



exports.regForm  = (req,res) =>{
    res.send(`
        <html>
        <head><title>Reg. Form</title></head>
        <body>
        <form method="POST"  action="/result" >
        <input name="n1"   placeholder="Enter First Number" >
        <input  name="n2" placeholder="Enter Second Number" >
        <input type="password"  name="pass" placeholder="Enter your password" >
        <button>Submit</button>
        </form>
        </body>
        </html>
    `)
}

exports.showResult = (req,res) =>{

    console.log(req.body)
    var sum  =  parseInt(req.body.n1) + parseInt(req.body.n2)
    res.send(`Sum of ${req.body.n1} &n ${req.body.n2} = ${sum}`)

}