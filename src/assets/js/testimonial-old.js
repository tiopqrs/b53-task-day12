// class Testimonial {
//     #author = ""
//     #image = ""
//     #content = ""

//     constructor(author, image, content) {
//         this.#author = author
//         this.#image = image
//         this.#content = content
//     }

//     set author(val) {
//         this.#author = val
//     }

//     set image(val) {
//         this.#image = val
//     }

//     set content(val) {
//         this.#content = val
//     }

//     get author () {
//         return this.#author
//     }

//     get image () {
//         return this.#image
//     }

//     get content () {
//         return this.#content
//     }
    
//     get html() {
//         return `<div class="testimonial">
//         <img src="${this.image}" class="profile-testimonial"/>
//         <p class="quote">"${this.content}"</p>
//         <p class="author">- ${this.author}</p>
//         </div>`
//     } 

// }

// const testimonial1 = new Testimonial("James", "https://i.pinimg.com/736x/7d/c3/0b/7dc30bfe7d1ca4234aaf4ab8d45666e9.jpg", "Boleh Juga Nih!")
// const testimonial2 = new Testimonial("James", "https://i.pinimg.com/736x/7d/c3/0b/7dc30bfe7d1ca4234aaf4ab8d45666e9.jpg", "Boleh Juga Nih!")
// const testimonial3 = new Testimonial("James", "https://i.pinimg.com/736x/7d/c3/0b/7dc30bfe7d1ca4234aaf4ab8d45666e9.jpg", "Boleh Juga Nih!")

// const testimonials = [testimonial1, testimonial2, testimonial3]
// let testimonialsHTML = ""

// for(let index = 0; index < testimonials.length; index++){
//     testimonialsHTML += testimonials[index].html
// }

// document.getElementById("testimonials").innerHTML = testimonialsHTML