
const favDropZone = document.querySelector(".favDropZone")
const ebDropZone = document.querySelector(".ebDropZone")
const mmDropZone = document.querySelector(".mmDropZone")
const nmgDropZone = document.querySelector(".nmgDropZone")
const animes1 = document.querySelector(".animes1")
let draggedElement = null
let sourceContainer = null

animes1.addEventListener("mousedown", inicio)


function  inicio(e){
  let {target} = e
  target.draggable = true
  target.addEventListener("dragstart", handleDragStart)
  target.addEventListener("dragend", handleDragEnd)
}


function handleDragStart(evento){
  draggedElement = evento.target
  sourceContainer = draggedElement.parentNode
  console.log("drag start", draggedElement)
  
}

function handleDragEnd(event){
  console.log("drag end", draggedElement)
  draggedElement = null
  sourceContainer = null
  console.log("drag end", draggedElement)
}


favDropZone.addEventListener("dragover", handleDragOver)
favDropZone.addEventListener("dragleave", handleDragLeave)
favDropZone.addEventListener("drop", handleDrop)
ebDropZone.addEventListener("dragover", handleDragOver)
ebDropZone.addEventListener("dragleave", handleDragLeave)
ebDropZone.addEventListener("drop", handleDrop)
mmDropZone.addEventListener("dragover", handleDragOver)
mmDropZone.addEventListener("dragleave", handleDragLeave)
mmDropZone.addEventListener("drop", handleDrop)
nmgDropZone.addEventListener("dragover", handleDragOver)
nmgDropZone.addEventListener("dragleave", handleDragLeave)
nmgDropZone.addEventListener("drop", handleDrop)
animes1.addEventListener("dragover", handleDragOver)
animes1.addEventListener("dragleave", handleDragLeave)
animes1.addEventListener("drop", handleDrop)





function handleDragLeave(event){
  event.preventDefault()
  console.log("drag leave")
  
}
function handleDragOver(event){
  event.preventDefault()
  console.log("drag over")
}
function handleDrop(event){
  event.preventDefault()
  const{currentTarget, dataTransfer} = event
  console.log("current:",currentTarget)
  console.log(sourceContainer, draggedElement)
  if(sourceContainer && draggedElement){
    sourceContainer.removeChild(draggedElement)
    console.log("hijo removido")
  }
  if(draggedElement){
    console.log(draggedElement)
    img = event.currentTarget.appendChild(draggedElement)
  }
}