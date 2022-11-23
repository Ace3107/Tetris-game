
    let meld = document.getElementById("melding")
    let avv = document.getElementById("avvik")
    let stat = document.getElementById("statistikk")
        console.clear()    
        document.getElementById("registrer").onclick = registrer

        function registrer(){
            let fart = document.getElementById("fart").value
            console.log(fart)

                if (fart < 80) {
                    meld.value = "lovlig fart"
                    avv.value = Math.abs(80 - fart)
                
			    } 
                else if (fart < 90){
                    meld.value = "1500kr i bot"
                    avv.value = Math.abs(80 - fart) 
                    
                }
			    else {
                    meld.value = "3000kr i bot"
                    avv.value = Math.abs(80 - fart) 
                    
                }
        }