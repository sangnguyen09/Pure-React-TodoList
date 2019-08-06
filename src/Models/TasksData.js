import randomId from 'random-id';

const  TaskData = [
    {
        id: randomId(5,'aA0'),
        name:'Soạn ReacJs',
        labelArr:["Frontend", "Backend"],
        priority:1,
        memberArr:["user_2"],
        status:2,
        description:'Phải soạn thảo ReactJs kèm với Nodejs và Redux',
    },
    {
        id: randomId(5,'aA0'),
        name:'Dạy Angular 8',
        labelArr:["Frontend", "API"],
        priority:2,
        memberArr:["user_1","user_4"],
        status:1,
        description:'Học Angular phiên bản mới nhất',
    },
    {
        id: randomId(5,'aA0'),
        name:'Soạn Python',
        labelArr:[ "Backend"],
        priority:2,
        memberArr:["user_3","user_4"],
        status:2,
        description:'Phải soạn thảo Python tập trung vào game và giải quyết vấn đề',
    },
]
export default TaskData;