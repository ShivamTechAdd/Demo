let todoApp = {
    tasks: [],
    addTask(taskInput) {
        this.tasks.push({ text: taskInput, completed: false });
        this.renderTask();
    },

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTask();
    },

    removeCompletedTask() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.renderTask();
    },

    renderTask() {
        let taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task.text;
            li.onclick = () => this.toggleTask(index);

            if (task.completed) {
                li.classList.add('completed');
            }

            taskList.appendChild(li);
        });
    }
};

document.getElementById('addTask').onclick = () => {
    let taskIp = document.getElementById('taskInput');
    todoApp.addTask(taskIp.value);
    taskIp.value = '';
};
