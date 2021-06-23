const elements = document.getElementsByClassName("faq-item");
const faq_items = Array.from(elements);


const closeAll = (elements) => {
    elements.forEach(element => {
        element.setAttribute("state", "closed")
    })
}

faq_items.forEach(element => {
    element.addEventListener('click', (e) => {
        const node = e.target.parentElement;
        const state = node.getAttribute("state");
        closeAll(faq_items);
        if (state === "closed") {
            element.setAttribute("state", "open")
        }
    })
})
