function getInfo(age, isMarried) {
  console.log(
    `${this.firstName} is ${age} years old, and maritial status - ${isMarried}`
  );
}

const user1 = {
  firstName: "Vivek",
  lastName: "Rajdan",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

const user2 = {
  firstName: "Akash",
  lastName: "Chopra",
};

// bind
const user2FullName = user1.fullName.bind(user2);
user2FullName();

const user1Info = getInfo.bind(user1, 35, true);
user1Info();
