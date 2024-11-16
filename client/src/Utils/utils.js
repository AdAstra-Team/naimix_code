export const formatBirthday = (milliseconds) => {
  const date = new Date(milliseconds);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const generateRandomUsers = (count) => {
  const users = [];
  const names = [
    "Алексей",
    "Иван",
    "Петр",
    "Сергей",
    "Дмитрий",
    "Николай",
    "Михаил",
    "Андрей",
    "Владимир",
    "Александр"
  ];
  const surnames = [
    "Антошкин-круглов",
    "Петров",
    "Иванов",
    "Смирнов",
    "Кузнецов",
    "Попов",
    "Лебедев",
    "Козлов",
    "Новиков",
    "Морозов"
  ];
  const signs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  for (let i = 0; i < count; i++) {
    const user = {
      name: names[Math.floor(Math.random() * names.length)],
      surname: surnames[Math.floor(Math.random() * surnames.length)],
      number: `+7 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 90) + 10}`,
      email: `${Math.random().toString(36).substr(2, 9)}@${Math.random().toString(36).substr(2, 5)}.io`,
      birthday: Date.now() - Math.floor(Math.random() * 31536000000), // random date in the last year
      sign: signs[Math.floor(Math.random() * signs.length)]
    };

    users.push(user);
  }

  return users;
};
