import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {dimension, y, fillUpIndexes}= this.props;
    var indvdualBox = [];
    for(var x = 0; x<dimension.x; x++){
      indvdualBox.push(
                        <div key={x} className='oneRow'
                        id={fillUpIndexes.indexOf(y+","+x) > -1 ? "black":""}>
                          &nbsp;
                        </div>
                      );
    }
    return (
      <div>
        {indvdualBox}
      </div>
    );
  }
}

export default Box;
