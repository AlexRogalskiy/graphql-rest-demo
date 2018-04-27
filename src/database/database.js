import Loki from 'lokijs';

export const database = new Loki('bigbusiness.db', {
  autoload: true,
  autosave: true,
  autosaveInterval: 4000
});
