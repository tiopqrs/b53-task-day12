const express = require('express')
const app = express()
const port = 3000

app.set('view engine','hbs')
app.set('views','src/views')

app.use('/assets', express.static('src/assets'))
app.use(express.urlencoded({extended: false}))

app.get('/', home)
app.get('/contact', contact)
app.get('/project', project)
app.get('/testimonial', testimonial)
app.get('/detail-project/:id', detailproject)
app.post('/project', handlePost)
app.get('/delete/:id', handleDelete)
app.post('/edit-project', handleEdit)
app.get('/edit-project/:id', editProject)

let days = ""
let months = ""
const data = []

function home(req,res) {
    res.render('index')
}

function contact(req,res) {
    res.render('contact')
}

function testimonial(req,res) {
    res.render('testimonial')
}

function project(req,res) {
  
    res.render('project', { data })
}

function detailproject(req,res) {
    const { id } = req.params

    const dataDetail = data[id]

    res.render('detail-project', { data :dataDetail })
}

function handlePost(req, res){
    let { projectname, startdate, enddate, description, nodejs, nextjs, reactjs, typescript } = req.body

    if (typeof nodejs === 'undefined') {
      node = false
    }
    if (typeof nextjs === 'undefined') {
        next = false
    }
    if (typeof reactjs === 'undefined') {
        react = false
    }
    if (typeof typescript === 'undefined') {
        typescript = false
    }

    let checkbox = { nodejs, reactjs, nextjs, typescript }
    
    const dataProject = {
      projectname,
      startdate,
      enddate,
      description,
      nodejs,
      reactjs,
      typescript,
      duration: durasi(startdate, enddate),
      techs: icon(checkbox) 
    }
    
    data.unshift(dataProject)
    
    res.redirect('/project')
}

function handleDelete(req,res){
    const { id } = req.params

    data.splice(id,1)

    res.redirect('/project')
}

function handleEdit(req, res){
    let { id, projectname, startdate, enddate, description, nodejs, nextjs, reactjs, typescript } = req.body

    if (typeof nodejs === 'undefined') {
      node = false
    }
    if (typeof nextjs === 'undefined') {
        next = false
    }
    if (typeof reactjs === 'undefined') {
        react = false
    }
    if (typeof typescript === 'undefined') {
        typescript = false
    }

    let checkbox = { nodejs, reactjs, nextjs, typescript }
    
    const dataProject = {
      id,
      projectname,
      startdate,
      enddate,
      description,
      nodejs,
      reactjs,
      typescript,
      duration: durasi(startdate, enddate),
      techs: icon(checkbox) 
    }

    data[parseInt(id)] = dataProject

    res.redirect('/project')
    
}

function editProject(req,res){
    const { id } = req.params
    const dataFilter = data[parseInt(id)]
    dataFilter.id = parseInt(id)  
    res.render ('edit-project', {data: dataFilter})
}

function durasi(start, end){

  let datastart = new Date(start)
  let dataend = new Date(end)
  let oneday = 1000 * 3600 * 24

  let selisih = dataend.getTime() - datastart.getTime()
  let totaldays = selisih / oneday
  months = Math.floor(totaldays / 30)
  days = totaldays % 30
  if (months > 0) {
      return months + " Months"
  } else if (days > 0) {
      return days + " Days"
  }
}

function icon(ikon){
  let codeicon = ""

  if (ikon.nodejs) {
      codeicon += `<img src="/assets/img/nodejs.png" style="height: 40px;">`
  }
  if (ikon.nextjs) {
      codeicon += `<img src="/assets/img/nextjs.png" style="height: 40px;">`
  }
  if (ikon.reactjs) {
      codeicon += `<img src="/assets/img/reactjs.png" style="height: 40px;">`
  }
  if (ikon.typescript) {
      codeicon += `<img src="/assets/img/typescript.png" style="height: 40px;">`
  }

  return codeicon
}

function newdate(date) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Augu", "Sept", "Oct", "Nov", "Dec"];

  const d = new Date(date)

  let day = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()

  return `${day} ${month} ${year}`
}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})