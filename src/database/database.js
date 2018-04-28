import Loki from 'lokijs';
import path from 'path';

const PROD = process.env.NODE_ENV === 'production';

export const database = new Loki(PROD ? '/tmp/bigbusiness.db' : 'bigbusiness.db', {
  autoload: true,
  autoloadCallback: init,
  autosave: true,
  autosaveInterval: 4000
});

function init() {
  [['posts', ['id', 'email', 'user']], ['comments', ['id', 'first', 'last', 'parent']], ['users', ['email', 'name', 'id']]]
    .forEach(([type, indices]) => {
      let collection = database.getCollection(type);

      if (collection === null) {
        const seed = require(path.resolve(`./${type}.json`));
        collection = database.addCollection(type, { indices });

        seed.forEach(user => {
          collection.insert(user);
        });
      }
    });
}
