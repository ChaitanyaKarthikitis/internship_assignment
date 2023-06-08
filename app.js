// Variables for targeting them

let list_elements = document.querySelectorAll(".list");
let left_box = document.querySelector(".left_box");
let right_box = document.querySelector(".right_box");
let container = document.querySelector(".container");
let boxes = document.querySelectorAll('.box');
let temp = document.querySelector(".temp");
let resetButton = document.querySelector('.btn')




// effects
list_elements.forEach(element=>{
    element.addEventListener("dragstart",()=>{
        element.classList.add('dragging')
    })
    element.addEventListener("dragend",()=>{
        element.classList.remove('dragging')
        
        
        
    })
    
})

//  main logic of drag and drop
boxes.forEach(box =>{
    box.addEventListener('dragover',()=>{
        console.log("drag over")

        let draggable_element = document.querySelector('.dragging')
        
       
        box.appendChild(draggable_element)

        draggable_element.classList.remove('blinkit')

    })
})

// Action on resetting 
resetButton.addEventListener('click',()=>{
    location.reload();
})