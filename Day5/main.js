class Tasklist {
    constructor(task) {
      this.task = task;
    }
}

class UserInterface {
    constructor() {
        this.taskInput = document.getElementById('task_input');
        this.button = document.getElementById('button');
        this.tableBody = document.getElementById('table-body');
  
        this.tasks = [];
    }
  
    bindEventListeners() {
        this.button.addEventListener('submit', (e) => {
            this.onFormSubmit(e);
        });
    }
  
    onFormSubmit(event) {


        event.preventDefault();
    
        const task1 = new Tasklist(
            this.taskInput.value,
        );
    
        this.tasks.push(task1);
        this.populateTasksTable();
    
        this.taskInput.value = '';
    }

    populateTasksTable() {

        this.tableBody.innerHTML = '';
    
        for (const task1 of this.tasks) {
            
            const row = document.createElement('tr');
        
            const taskCell = document.createElement('td');
            const completeCell = document.createElement('td');
            const actionsCell = document.createElement('td');
    
        //   const removeButton = document.createElement('button');
    
        //   removeButton.innerHTML = 'X';
    
        //   removeButton.addEventListener('click', (e) => this.onRemoveButtonClick(task1));
        //   actionsCell.append(removeButton);
    
            row.append(taskCell);
            row.append(completeCell);
            row.append(actionsCell);
            this.tableBody.append(row);

            taskCell.innerHTML = task1.task;
        }
    } 

    // onRemoveButtonClick(taskToRemove) {
    //     this.tasks = this.tasks.filter((task1) => {
    //       return task1.isbn !== bookToRemove.isbn;
    //     });
    //     this.populateBooksTable();
    // }
}

const ui = new UserInterface();
ui.bindEventListeners();
console.log(ui);

