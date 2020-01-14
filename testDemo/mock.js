const { mockServer, MockList } = require('graphql-tools');
const casual = require('casual-browserify');

const schema = `
  type User {
    id: ID!
    name: String
    lists: [List]
  }
  type List {
    id: ID!
    name: String
    owner: User
    incomplete_count: Int
    tasks(completed: Boolean): [Task]
  }
  type Task {
    id: ID!
    text: String
    completed: Boolean
    list: List
  }
  type RootQuery {
    user(id: ID): User
  }
  schema {
    query: RootQuery
  }
`;

const server = mockServer(schema, {
    RootQuery: () => ({
      user: (o, { id }) => ({ id }),
    }),
    List: () => ({
      name: () => casual.word,
      tasks: () => new MockList(4, (o, { completed }) => ({ completed })),
    }),
    Task: () => ({ text: casual.words(10) }),
    User: () => ({ name: casual.name }),
  });
  
  const data = server.query(`
  query tasksForUser{
    user(id: 6) {
      id
      name
      lists {
        name
        completeTasks: tasks(completed: true) {
          completed
          text
        }
        incompleteTasks: tasks(completed: false) {
          completed
          text
        }
        anyTasks: tasks {
          completed
          text
        }
      }

    }
  }`).then((data, ss) => {
    //   console.log(JSON.stringify(data.data.user));
    console.log(new MockList(4, (o, { completed }) => ({ completed })),)
  });
