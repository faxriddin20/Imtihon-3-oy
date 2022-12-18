const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const euro = document.querySelector("#euro");
const euro1 = document.querySelector("#euro-1");
const euro2 = document.querySelector("#euro-2");
const registration= document.querySelector(" #registration")
const email = ".....@gamil.com Your account has been saved";

euro.onclick = () =>{
    let confirmation = confirm("Per Year £71.88");
}

euro1.onclick = () =>{
    let confirmation = confirm("Per  Year £155.88");
}

euro2.onclick = () =>{
    let confirmation = confirm("Per Year £251.88");
}
btn.onclick = () =>{
    let confirmation = confirm("Sizni Accountingiz Qabul Qilindi");
}    

// modal

const myModal = new bootstrap.Modal(document.getElementById('myModal'), options);
const myModalAlternative = new bootstrap.Modal('#myModal', options);




