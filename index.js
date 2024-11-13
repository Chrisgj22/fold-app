const width = document.querySelector("#width")
const height = document.querySelector("#height")
const depth = document.querySelector("#depth")
const thickness = document.querySelector("#thickness")
const result = document.querySelector("#result")
const btn = document.querySelector("#Calculate")


btn.addEventListener("click", function(){
    let thick = thickness.value*2
    let wDimensions= width.value -  thick + (depth.value*2) - thick
    let hDimension= height.value - thick + (depth.value*2) - thick
    let dVal = depth.value - thickness.value
    result.innerHTML=`<div class="resDiv">
                    <p>Cutting size:</p>
                    <div class="Perfect"><p>Perfect fit</p> ${wDimensions} x ${hDimension}</div>
                    <div>notch:${dVal}</div>
                    <div class="safe">Brake-press backstop ${dVal}</div>
                    <div class="safe"><p>Safe fit (-1mm allowance)</p> ${wDimensions - 1} x ${hDimension - 1}</div>
                    <div class="safe">notch: ${dVal}</div>
                    <div>Brake-press backstop ${dVal}</div>
                    </div>`
    console.log("click")
    

})



