
    const testimonials = [
        {
            author: "Zayn",
            content: "Mantap bro",
            image: "https://i.pinimg.com/564x/fd/35/cc/fd35ccd34f3050708897efaa09778756.jpg",
            rating: 4,
        },
        {
            author: "Boy",
            content: "Kurang Cuy",
            image: "https://i.pinimg.com/564x/4c/5c/eb/4c5cebf0941c2eed32280bac702510fb.jpg",
            rating: 2,
        },
        {
            author: "Zee",
            content: "Semangat Kak!",
            image: "https://i.pinimg.com/564x/65/ed/62/65ed62e0cc6304e712f2390327fc92a7.jpg",
            rating: 5,
        }
    ]

    function allTestimonial() {
    const testimonialHTML = testimonials.map((value) => {
        return `<div class="testimonial">
        <img src="${value.image}" class="profile-testimonial"/>
        <p class="quote">"${value.content}"</p>
        <p class="author">- ${value.author}</p>
        </div>`
    })

    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ")
}

    function filterTestimonial(rating){ 
        const filteredTestimonial = testimonials.filter((value) => value.rating === rating)
        const filteredTestimonialHTML = filteredTestimonial.map((value) => {
            return `<div class="testimonial">
            <img src="${value.image}" class="profile-testimonial"/>
            <p class="quote">"${value.content}"</p>
            <p class="author">- ${value.author}</p>
            </div>`
        })
        
        document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ")
    } 

allTestimonial()