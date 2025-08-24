

//  varibales

const anchorElem1 = document.querySelector(".anchor-1");
console.log(anchorElem1)

// anchorElem.forEach(element => {
//     anchorElem.forEach(i => i.classList.remove("active"));
//     element.addEventListener("click", () => {
//         element.classList.add("active")
//     })
// })

document.addEventListener("DOMContentLoaded", () => {
    const projectContainerElem = document.querySelector(".project-container")
    projectContainerElem.classList.add("showContainer");
    anchorElem1.classList.add("active");
    
//     anchorElem1.addEventListener("click", () => {
//         const projectContainerElem = document.querySelector(".project-container")
//         projectContainerElem.classList.add("showContainer");
//         anchorElem1.classList.add("active");
//    }); 
})



