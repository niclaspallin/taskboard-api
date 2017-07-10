# Taskboard api

## Routes

### Task
* GET api/tasks - Get all tasks
* GET api/tasks/:id - Get specific task

### Category
* GET api/categories - Get all categories
* GET api/categories/:id - Get specific category

## TODO
- [x] Get data from a real store (sql database / document database)
- [ ] Implement core RESTful concepts
 - [ ] Interaction with resources through verbs like POST, GET, PUT, DELETE, (PATCH)
 - [ ] Uniform interface
 - [ ] [HATEOAS (Hypermedia As The Engine of Application State)](https://en.wikipedia.org/wiki/HATEOAS)
## Endpoints
- [x] POST api/tasks - Create new task
- [ ] PUT api/tasks/:id - Update task
- [x] POST api/categories - Create new category
- [ ] PUT api/categories/:id - Update category
