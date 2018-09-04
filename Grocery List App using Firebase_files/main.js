

let txtGroceryCategory = $("#txtGroceryCategory")
let btnAdd = $("#btnAdd")

$(document).ready(() =>{

    btnAdd.on('click',(e)=>{
        let txtGroceryCategoryValue = txtGroceryCategory.val()
        console.log("button")
        console.log(txtGroceryCategoryValue )
        $('#groceryCategory').append($('<option>', {
            value: txtGroceryCategoryValue ,
            text: txtGroceryCategoryValue 
        }));
        e.preventDefault()
    })
})