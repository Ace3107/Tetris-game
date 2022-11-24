
    let meld = document.getElementById("melding")
    let avv = document.getElementById("avvik")
    let stat = document.getElementById("statistikk")
    let biler = 0
    let disp = document.getElementById("utskrift")
    let disp2 = document.getElementById("Gjennomsnitt")
    let disp3 = document.getElementById("fartsbrudd")
    let disp4 = document.getElementById("samletbot")
    let sum = 0
    let fartsbrudd = 0
    let samletbot = 0 
        console.clear()    
        document.getElementById("registrer").onclick = registrer
        // document.getElementById("registrer").onclick = sumArray(array)



        function registrer(){
            let fart = document.getElementById("fart").value
            biler++
            console.log(fart)

                if (fart <= 80) {
                    meld.value = "lovlig fart"
                    avv.value = Math.abs(80 - fart)  
			    } 
                else if (fart <= 90){
                    meld.value = "1500kr i bot"
                    avv.value = Math.abs(80 - fart) 
                    fartsbrudd++
                    samletbot += 1500
                }
			    else {
                    meld.value = "3000kr i bot"
                    avv.value = Math.abs(80 - fart)  
                    fartsbrudd++
                    samletbot += 3000
                }
                sum += parseInt(fart)
                console.log(sum)
                
        

                // function sumArray(array){
                //     const gje = []
                //     let sum = 0
                //     for (let i = 0; i <
                //         gje.length; i +=1){
                //             sum += gje[i]
                //         }
                //         console.log(sum)
        
                //         return sum
                // }

                
                document.getElementById("statistikk").onclick = showstat
                document.getElementById("Nullstill").onclick = Nullstill
                
                function showstat(){
                    disp.innerHTML = "Antall biler målt i kontrollen:" + " " + biler
                    disp2.innerHTML = "Gjennomsnittsfarten er:" + " " + sum /biler + "km/t"
                    disp3.innerHTML = "Antall biler som har brutt fartsgrensen:" + " " + fartsbrudd
                    disp4.innerHTML = "Samlet bot:" + " " + samletbot + "kr"
                }  
        }