const express = require("express")

const app = express()



app.get("/", (req, res)=>{

    const query = req.query

    const lingua = req.get("Accept-Language").substr(0, 2)

    const rum = req.get("Device-Memory")

    const os = req.get("User-Agent")

    console.log(rum)

    if (lingua === "it"){
        if (os.substr(13, 9) === "Macintosh"){
            res.send("Ciao " + query.nome + " " + query.cognome + ". Tu hai " + query.età + "  anni" + "! Com'è usare Macintosh?")
        }
        if (os.substr(13, 9) === "Linux; An"){
            res.send("Ciao " + query.nome + " " + query.cognome + ". Tu hai " + query.età + "  anni" + "! Com'è usare Android?")
        } 
        if (os.substr(13, 9) === "Windows N"){
            res.send("Ciao " + query.nome + " " + query.cognome + ". Tu hai " + query.età + "  anni" + "! Com'è usare Windows?")
        }
    }else {
        if (os.substr(13, 9) === "Macintosh"){
            res.send("Hi " + query.name + " " + query.surname + ". You are " + query.age + "! How's to use Macintosh?")
        }
        if (os.substr(13, 9) === "Linux; An"){
            res.send("Hi " + query.name + " " + query.surname + ". You are " + query.age + "! How's to use Android?")
        } 
        if (os.substr(13, 9) === "Windows N"){
            res.send("Hi " + query.name + " " + query.surname + ". You are " + query.age + "! How's to use Windows?")
        }
    }
})



app.get("/Jalome", (req, res) => {

    const query = req.query
    if (query.età > 18){
        res.send("Hey tu, vuoi vincere un iphone 14 pro max ultra light? Chiedi a Jalome, +39 666 666 6666")
    }else{
        res.send("Non hai i requisiti minimi di età per ricevere i contatti del venditore di iphone 14 pro max ultra light.")
    }
})




app.listen(8000, () => console.log("App listening on port 8000. Si...Può...Fareeeeeee!"))