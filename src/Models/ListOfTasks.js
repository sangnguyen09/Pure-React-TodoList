export default class ListOfTask{
    constructor (){
        this.list = []
    }
    addTask = (task) =>{
        this.list = [...this.list, task]
    }
    findTask =(id) =>{
        return this.list.find(item => item.id === id)
    }
    findTaskIndex =(id) =>{
        return this.list.findIndex(item => item.id === id)
    }
}