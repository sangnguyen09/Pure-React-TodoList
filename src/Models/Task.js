export default class Task {
    constructor(id , name, priority, labelArr,memberArr, status, description) {
      this.id = id
      this.name = name
      this.priority = priority
      this.labelArr = labelArr
      this.status = status
      this.memberArr = memberArr
      this.description = description
    }
    
}