export const baseUrl = 'http://127.0.0.1:8000'
export const baseUserUrl = 'http://127.0.0.1:8000/user/'
export const baseTaskUrl = 'http://127.0.0.1:8000/task/'


/*F
Sign Up API
API - http://127.0.0.1:8000/user/signup 
http method - post
key - name, email, mobile, password, image
response - statusCode: number, message: string

Login API
API - http://127.0.0.1:8000/user/login 
http method - post
key - email, password
response - statusCode: number, message: string, token: string, userId: number, userName: string

AddTask API
API - http://127.0.0.1:8000/task/add
http method - post
key - task, description, priority
response - statusCode: number, msg: string

Pending Task API
API - http://127.0.0.1:8000/task/list/pending?user=1
http method - get
key - task, description, priority
response - statusCode: number, tasks: any[], msg: string

Completed Task API
API - http://127.0.0.1:8000/task/list/completed?user=1
http method - get
key - addeddate, task, description, priority, completeddate
response - statusCode: number, tasks: any[], msg: string

Delete API
API - http://127.0.0.1:8000/task/remove/1
http method - delete
response - statusCode: number, msg: string

Update API
API - http://127.0.0.1:8000/task/update/1
key - task, description, completedDate, status, user
http method - put
response - statusCode: number, msg: string

Search API
API - http://127.0.0.1:8000/task/search?user=1&query=task
key - addeddate, task, description, priority, completeddate
http method - get
response - statusCode: number, msg: string

Filter API
API - http://127.0.0.1:8000/task/filter/task?user=1&priority=low
key - addeddate, task, description, priority, completeddate
http method - get
response - statusCode: number, msg: string
*/