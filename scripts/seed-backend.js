const faker = require('faker');
const fs = require('fs-extra');
const path = require('path');

const users = new Array(100).fill(undefined)
  .reduce((merged) => {
    const first = faker.name.firstName();
    const last = faker.name.lastName();
    merged.push({
      name: {
        first,
        last
      },
      email: faker.internet.email(),
      id: faker.random.uuid(),
      location: {
        city: faker.address.city(),
        state: faker.address.state(),
        address: faker.address.streetAddress(),
        zip: faker.address.zipCode()
      }
    });

    return merged;
  }, []);

async function run() {
  await fs.writeFile(path.resolve('./users.json'), JSON.stringify(users, null, 2), 'utf8');
}

run();
