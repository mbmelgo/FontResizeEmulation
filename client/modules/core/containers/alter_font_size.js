import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import AlterFontSize from '../components/alter_font_size.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, LocalState, Collections} = context();
  LocalState.get("resizePercentage") ?
    LocalState.get("resizePercentage"):
    LocalState.set("resizePercentage",1);
  LocalState.get("name") ?
    LocalState.get("name"):
    LocalState.set("name","A");
  if (Meteor.subscribe('letters',LocalState.get("name")).ready()) {
    const letters = Collections.Letters.find({name:LocalState.get("name")}).fetch();
    const char = letters[0];
    var fillUpIndexes = char.fillUpIndexes;
    LocalState.get("dimensionX") ?
      LocalState.get("dimensionX"):
      LocalState.set("dimensionX",char.dimensionX);
    LocalState.get("dimensionY") ?
      LocalState.get("dimensionY"):
      LocalState.set("dimensionY",char.dimensionY);
    const dimensionX = LocalState.get("dimensionX");
    const dimensionY = LocalState.get("dimensionY");
    const dimension = {
      x: dimensionX,
      y: dimensionY,
    }
    const initialDimension = {
      x: char.dimensionX,
      y: char.dimensionY
    }
    const resizePercentage = LocalState.get("resizePercentage");
    if (resizePercentage > 1) {
      let newFillUpIndexes = [];
      for (var i = 0; i < fillUpIndexes.length; i++) {
        let x = parseInt(fillUpIndexes[i].substring(0,1));
        let y = parseInt(fillUpIndexes[i].substring(2,3));
        for (var j = 0; j < resizePercentage; j++){
          for (var m = 0; m < resizePercentage; m++) {
            newFillUpIndexes.push(((x*resizePercentage)+j)+","+((y*resizePercentage)+m));
          }
        }
      }
      fillUpIndexes = newFillUpIndexes;
    }
    onData(null, {dimension, fillUpIndexes, initialDimension});
  }
};

export const depsMapper = (context, actions) => ({
  resize: actions.alter_font_size.resize,
  renderLetter: actions.alter_font_size.renderLetter,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(AlterFontSize);
