
let btnAdd = $("#btnAdd")
let txtTask = $("#txtTask")
let pendingTaskList =$("#pendingTaskList")
let completedTaskList =$("#completedTaskList")


$(document).ready(function() {

    btnAdd.click(function(){ 
        let txtTaskValue = txtTask.val() 
        if (txtTaskValue == "") {
            alert("Please Enter the Task")
            txtTask.focus()
            return
        }
        let liItem  =$("<li class='taskliItem'>")

        // let checkbox =$("<input>").attr("type","checkbox")
        let checkbox =$("<input type='checkbox'>")
        
        let taskText=$("<span>").html(txtTaskValue)

        let btnRemove =$("<button>").html("Remove")
        btnRemove.button({icons:{primary:"fa fa-trash-o"},text:false})
        

        btnRemove.on('click',function() {
            $(this).parent().remove()
        })
                        
        

        checkbox.change(function() {
            if($(this).is(':checked')) {
                let completedTaskListItem = $(this).parent()
                completedTaskList.append(completedTaskListItem)
                completedTaskListItem.css("background-color", "green")
                taskText.css("text-decoration","line-through")
                }
        })
           liItem.append(checkbox) 
           liItem.append(taskText) 
            liItem.append(btnRemove)              
            pendingTaskList.append(liItem)      
            
         
    })       
       
})   

