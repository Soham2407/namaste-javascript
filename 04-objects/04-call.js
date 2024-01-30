function getLoginCount(loginCount) {
  console.log(`${this.firstName} login count - ${loginCount}`);
}

const user1 = {
  firstName: "Vivek",
  lastName: "Rajdan",
  age: 45,
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const user2 = {
  firstName: "Akash",
  lastName: "Chopra",
  age: 40,
};

user1.fullName();

// call()
user1.fullName.call(user2);

getLoginCount.call(user1, 5);
getLoginCount.call(user2, 10);
