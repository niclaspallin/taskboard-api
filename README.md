# Taskboard api

## Endpoints

### Task
* GET     api/tasks     - Get all tasks
* GET     api/tasks/:id - Get specific task
* POST    api/tasks     - Create new task
* PUT     api/tasks     - Update task
* DELETE  api/task/:id  - Delete task


### Category
* GET    api/categories     - Get all categories
* GET    api/categories/:id - Get specific category
* POST   api/categories     - Create new category
* PUT    api/categories/:id - Update category
* DELETE api/categories/:id - Delete category

## TODO
- [x] Get data from a real store (sql database / document database)
- [ ] Implement core RESTful concepts
 - [x] Interaction with resources through verbs like POST, GET, PUT, DELETE, (PATCH)
 - [x] Uniform interface
 - [ ] [HATEOAS (Hypermedia As The Engine of Application State)](https://en.wikipedia.org/wiki/HATEOAS)
