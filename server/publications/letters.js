import {Letters} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('letters', function (name) {
    check(name, String)
    return Letters.find({name:name});
  });
}
