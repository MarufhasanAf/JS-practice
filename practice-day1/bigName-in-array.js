var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var bigName = friends[0];
for (let i = 0; i < friends.length; i++) {
  if (friends[i].length > bigName.length) {
    bigName = friends[i];
  }
}
console.log(bigName);
