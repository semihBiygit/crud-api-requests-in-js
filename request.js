const apiURL = "https://jsonplaceholder.typicode.com/";

// const getTodosById = (id) => {
//   const response = fetch(apiURL + "todos/"+id)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// getTodosById(1);

// const getTodosById = async (id) => {
//   const response = await fetch(apiURL + "todos/" + id);
//   const data = await response.json();
//   // console.log(data);
//   return data;
// };

// getTodosById(1);
// getTodosById(4);

// const getUsersById = (id) => {
//   const res = fetch(apiURL + "users/" + id)
//     .then((response) => response.json())
//     .catch((err) => console.log(err));
//   return res;
// };

// usersArray.push(getUsersById(3));
// console.log(usersArray);

// usersArray.push(getUsersById(3));
// console.log(usersArray);

// getUsersById(3);

///////////////////////////////////////////////////////////////////////////

const usersArray = [];

const getUsersById = async (id) => {
  const response = await fetch(apiURL + "users/" + id);
  const data = await response.json();
  return data;
};

const arrayAdd = async (id) => {
  getUsersById(id)
    .then((user) => usersArray.push(user))
    .catch((err) => console.log(err));
};

// arrayAdd(3);
// arrayAdd(2);
// arrayAdd(4);
// console.log(usersArray);

////////////////////////////////////PROMISE///////////////////////////////

// Promise.all([getUsersById(7)]).then(
//   (values) => {
//     usersArray.push(values);
//     console.log(usersArray);
//   }
//   );

const getTodos = async () => {
  try {
    const query = "todos";
    const response = await fetch(apiURL + query);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const getTodosByUserId = async (id) => {
  try {
    const query = "todos?userId=" + id;
    const response = await fetch(apiURL + query);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

// const getTodosByUserId = (userId) => {
//   getUsersById(userId)
//     .then((data) => data.id)
//     .then((id) => getTodoById(id))
//     .then((todos) => console.log(todos))
//     .catch((err) => console.log(err));
// };

getTodos().then((res) => console.log(res));
getTodosByUserId(2).then((res) => console.log(res));
