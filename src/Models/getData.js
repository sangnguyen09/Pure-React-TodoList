import Task from './Task';
import ListOfTasks from './ListOfTasks';
import TasksData from './TasksData';

let listOfTasks = new ListOfTasks();

for (let task of TasksData) {
    let id = task.id;
    let name = task.name;
    let priority = task.priority
    let labelArr = task.labelArr
    let status = task.status
    let memberArr = task.memberArr
    let description = task.description
    let newTask = new Task(id,name,priority,labelArr,memberArr,status,description)
    listOfTasks.addTask(newTask);
}
export default listOfTasks