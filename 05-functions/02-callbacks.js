function getUser(id, callback) {
  const users = {
    1: { id: 1, name: "virat" },
    2: { id: 2, name: "rohit" },
  };

  setTimeout(() => {
    const user = users[id];

    if (user) {
      callback(user, null);
    } else {
      callback(null, "User Not Found");
    }
  }, 3000);
}

// callback
function displayInfo(data, error) {
  if (data) {
    console.log(data);
  } else {
    console.log(error);
  }
}

getUser(2, displayInfo);
getUser(3, displayInfo);
