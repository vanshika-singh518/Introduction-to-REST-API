import { v4 as uuidv4 } from "uuid";

export const createUsers = (req, res) => {
  // console.log(req.body)
  const user = req.body;

  //  const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  //  const userWithId = {...user, id: userId}
  //  users.push(userWithId);

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database`);
};

export const getUsers = (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  // removes the element with given id
  // filter function will keep the values for which the id is not given
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id  ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  // take data from the client or frontend
  const { firstName, lastName, age } = req.body;

  // id specifies which user to update
  const user = users.find((user) => user.id === id);

  // if we have modified values then change the necessary details
  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
