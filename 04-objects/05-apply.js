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

// apply
getInfo.apply(user1, [25, false]);
getInfo.apply(user2, [30, true]);
