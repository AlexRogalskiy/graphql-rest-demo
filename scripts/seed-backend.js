const faker = require('faker');
const fs = require('fs-extra');
const path = require('path');

const posts = new Array(100).fill(undefined)
  .reduce((merged) => {
    const first = faker.name.firstName();
    const last = faker.name.lastName();
    merged.push({
      title: faker.lorem.sentence(),
      user: faker.random.uuid(),
      id: faker.random.uuid(),
      email: faker.internet.email(),
      published: faker.date.past(),
      body: faker.lorem.paragraphs(),
    });

    return merged;
  }, []);

const users = posts.slice(0).map(({ user }) => ({
  id: user,
  first: faker.name.firstName(),
  last: faker.name.lastName()
}));

const postComments = posts.slice(0).reduce((merged, { id }) => {
  return merged.concat(new Array(Math.floor(Math.random() * 10)).fill(undefined).map(() => ({
    author: users[Math.floor(Math.random() * users.length)].id,
    body: faker.lorem.paragraph(),
    parent: id,
    id: faker.random.uuid(),
    published: faker.date.past()
  })));
}, []);

async function run() {
  await Promise.all([
    fs.writeFile(path.resolve('./posts.json'), JSON.stringify(posts, null, 2), 'utf8'),
    fs.writeFile(path.resolve('./users.json'), JSON.stringify(users, null, 2), 'utf8'),
    fs.writeFile(path.resolve('./comments.json'), JSON.stringify(postComments, null, 2), 'utf8')
  ]);
}

run();
