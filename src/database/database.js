import Loki from 'lokijs';
import path from 'path';

export const database = new Loki('bigbusiness.db', {
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
        console.log('it is null my dude');
        const seed = require(path.resolve(`./${type}.json`));
        collection = db.addCollection(type, { indices });

        seed.forEach(user => {
          collection.insert(user);
        });
      }
    });
}
