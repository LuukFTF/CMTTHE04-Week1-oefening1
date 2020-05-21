let game = document.getElementsByTagName("game")[0]

function createFish() {
    let fish = document.createElement("fish")
    game.appendChild(fish)
    
    let randomPosx = Math.random() * window.innerWidth
    let randomPosy = Math.random() * window.innerHeight
    let randomHuedeg = Math.random() * 360

    let posx = randomPosx
    let posy = randomPosy
    let huedeg = randomHuedeg

    fish.style.transform = `translate(${posx}px, ${posy}px)`
    fish.style.filter = `hue-rotate(${huedeg}deg)`

    fish.addEventListener("click", clickDead) 
}


function createBubble() {
    let bubble = document.createElement("bubble")

    let randomPosx = Math.random() * window.innerWidth
    let randomPosy = Math.random() * window.innerHeight
    
    let posx = randomPosx
    let posy = randomPosy

    bubble.style.transform = `translate(${posx}px, ${posy}px)`

    bubble.addEventListener("click", clickRemove) 

    game.appendChild(bubble)
}

function clickDead(){
    this.classList.add("dead")
}

function clickRemove(){
    this.remove()
}


for (let i = 0; i < 100; i++) {
    createBubble()
    createFish()
}