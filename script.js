// นำเข้าตัวแปร
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];


//รับค่าจากการกดปุ่ม
addButton.addEventListener("click",() => {

    const taskText = taskInput.value; //เอาค่าจาก taskText

    //return;
    if(taskText == null || taskText.trim() ==""){
        alert("Input your list!!");
        taskInput.value = ""; //เคลียค่า
        return;
    }

    //confirm;
    const confirmed = confirm("Are you sure to add a task?");
    if(!confirmed){ //select "NO"
        taskInput.value = "";
        return;
    }

    tasks.push(taskText)

    // const listItem = document.createElement("li");  //สร้างค่าใหม่ลงใน list
    // listItem.textContent = taskText; //โดยเอาค่าจาก taskText

    // taskList.appendChild(listItem); //เพิ่มค่า ListItem ใน taskList

    updateTaskList();

    taskInput.value = ""; //โดยที่ taskInput เป็นค่าว่าง 
});

//function เพิ่มค่าใน list
function updateTaskList(){
    taskList.innerHTML = ""; //ทำให้ task list ว่าง
    for(let i=0; i<tasks.length; i++){
        const task = tasks[i];
        const listItem = document.createElement("li");
        listItem.textContent = task;

        taskList.appendChild(listItem);
    }
}