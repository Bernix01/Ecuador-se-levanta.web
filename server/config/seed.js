/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

User.find({}).remove()
  .then(() => {
    User.create( {
      provider: 'local',
      role: 'admin',
      name: 'radmin',
      email: 'radmin@ecuadorselevanta.com',
      password: 'qwasdf@zxc'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
