const users = [
  { name: "mia", premium: true },
  { name: "butch", premium: false },
  { name: "vincent", premium: true },
  { name: "jules", premium: true },
  { name: "zed", premium: true },
];

const getPremUsers = (users) => {
  return users.filter((user) => user.premium);
};

export { getPremUsers, users as default };
