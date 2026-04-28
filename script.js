const ul = document.querySelector('ul');
let jami = []

let alo = []
let orta = []
let yomon = []

students.forEach( (student) => {
    if(student.score >= 70){
    alo.push(
    ` <li>
    <div class="top">
    <div class="top__img-wrapper">
    <img src="${student.img}" alt="avatar">
    <p> ${student.name} </p>
    </div>
    
    <div class="top__right-wrapper">
    <div class="right-elemet id">No ${student.id}</div>
    <div style="color: rgba(16, 244, 134, 0.949); " class="right-elemet score">${student.score} score</div>
    <div class="right-elemet group"> ${student.group} group</div>
    </div>
    </div>    
    
    <div class="bottom">
    <div class="email">    <i></i> ${student.email}  </div>
    <div class="username"> <i></i>${student.username}  </div>
    <div class="phone">    <i></i>  ${student.phone}  </div>
    </div>
    </li>
    ` 
)}
},

students.forEach( (student) => {

    if(student.score <= 70 && student.score >= 50 ){
    orta.push( 
    ` <li>
    <div class="top">
    <div class="top__img-wrapper">
    <img src="${student.img}" alt="avatar">
    <p> ${student.name} </p>
    </div>
    
    <div class="top__right-wrapper">
    <div class="right-elemet id">No ${student.id}</div>
    <div style="color: rgba(255, 238, 0, 0.976); " class="right-elemet score">${student.score} score</div>
    <div class="right-elemet group"> ${student.group} group</div>
    </div>
    </div>   
    
    <div class="bottom">
    <div class="email">    <i></i> ${student.email}  </div>
    <div class="username"> <i></i>${student.username}  </div>
    <div class="phone">    <i></i>  ${student.phone}  </div>
    </div>
    </li>
    ` 
    )}
},

students.forEach( (student) => {


    if(student.score <= 50){
    yomon.push( 
    ` <li>
    <div class="top">
    <div class="top__img-wrapper">
    <img src="${student.img}" alt="avatar">
    <p> ${student.name} </p>
    </div>
    
    <div class="top__right-wrapper">
    <div class="right-elemet id">No ${student.id}</div>
    <div style="color: rgba(241, 18, 104, 0.695); " class="right-elemet score">${student.score} score</div>
    <div class="right-elemet group"> ${student.group} group</div>
    </div>
    </div>
    
    <div class="bottom">
    <div class="email">    <i></i> ${student.email}  </div>
    <div class="username"> <i></i>${student.username}  </div>
    <div class="phone">    <i></i>  ${student.phone}  </div>
    </div>
    </li>
    ` 
    )} },


    jami = jami.concat(),

    ul.innerHTML = jami,


console.log(`jami:${jami.length} alo:${alo.length} yomon: ${yomon.length} orta: ${orta.length}`)
