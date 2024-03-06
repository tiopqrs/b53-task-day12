
function getTestimonialData () {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api.npoint.io/f2c385a221b4e51c7d9b", true)
    xhr.onload = () => {
        console.log("status", xhr.status)
        if (xhr.status === 200){
        const respone = JSON.parse(xhr.responseText)
        resolve(respone)
        } else {
            reject('Error loading data')
    }
}
xhr.onerror = () => {
    reject("Network Error!")
}

xhr.send()

    })
}

async function allTestimonial() {
    document.getElementById("testimonials").innerHTML = "Loading..."
    const testimonials = await getTestimonialData()

    const testimonialHTML = testimonials.map((value) => {
        return `<div class="testimonial">
        <img src="${value.image}" class="profile-testimonial"/>
        <p class="quote">"${value.content}"</p>
        <p class="author">- ${value.author}</p>
        <p class="value-rating">${value.rating} <img src="./assets/img/star-card.png" style="width: 5%; height: 5%; margin-left: 4px;"/></p>
        </div>`
    })

    document.getElementById("testimonials").innerHTML = testimonialHTML.join(" ")
}

async function filterTestimonial(rating){ 
        document.getElementById("testimonials").innerHTML = "Loading..."
        const testimonials = await getTestimonialData()
        
        const filteredTestimonial = testimonials.filter((value) => value.rating === rating)

        if(filteredTestimonial.length === 0) {
            document.getElementById("testimonials").innerHTML = "Data not found"  
        }
        else {
        const filteredTestimonialHTML = filteredTestimonial.map((value) => {
            return `<div class="testimonial">
            <img src="${value.image}" class="profile-testimonial"/>
            <p class="quote">"${value.content}"</p>
            <p class="author">- ${value.author}</p>
            <p class="value-rating">${value.rating} <img src="./assets/img/star-card.png" style="width: 5%; height: 5%; margin-left: 4px;"/></p>
            </div>`
        })
        
        document.getElementById("testimonials").innerHTML = filteredTestimonialHTML.join(" ")
    } 
    }
allTestimonial()