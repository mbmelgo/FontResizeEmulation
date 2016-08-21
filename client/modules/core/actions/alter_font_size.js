export default {
  resize({LocalState}, resizePercentage,dimensionX,dimensionY){
    if(resizePercentage === false) resizePercentage = 1;
    return LocalState.set({"dimensionX": dimensionX*resizePercentage,
                           "dimensionY": dimensionY*resizePercentage,
                           "resizePercentage":resizePercentage});
  },

  renderLetter({LocalState}, letterTorender){
    return LocalState.set({"name": letterTorender,
                           "resizePercentage": null,
                           "dimensionX":null,
                           "dimensionY":null});
  },
}
