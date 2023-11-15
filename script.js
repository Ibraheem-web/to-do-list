const taskInput = document.getElementById("textBox");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value;

    if (taskText.trim() !== "") {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'w-full', 'gap-2', 'py-3', 'text-slate-600', 'leading-tight', 'tracking-wide');
        li.innerHTML = `${taskText} <span><img src="./images/close.svg" alt="close-mark" class="w-5 lg:w-7 cursor-pointer" onclick="deleteTask(this)"></span>`;

        taskList.appendChild(li);
        taskInput.value = '';
    };
};

function deleteTask(span) {
    const li = span.closest('li');
    if (li) {
        taskList.removeChild(li);
    }
};