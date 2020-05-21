let game = document.getElementsByTagName("game")[0]

function createFish() {
    let fish = document.createElement("fish")
    game.appendChild(fish)

    fish.addEventListener("click", clickDead) 
    
    let randomPosx = Math.random() * window.innerWidth
    let randomPosy = Math.random() * window.innerHeight
    let randomHuedeg = Math.random() * 360

    let posx = randomPosx
    let posy = randomPosy
    let huedeg = randomHuedeg

    fish.style.transform = `translate(${posx}px, ${posy}px)`
    fish.style.filter = `hue-rotate(${huedeg}deg)`
}

function createBubble() {
    let bubble = document.createElement("bubble")
    game.appendChild(bubble)

    bubble.addEventListener("click", clickRemove) 

    let randomPosx = Math.random() * window.innerWidth
    let randomPosy = Math.random() * window.innerHeight
    
    let posx = randomPosx
    let posy = randomPosy

    bubble.style.transform = `translate(${posx}px, ${posy}px)`
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