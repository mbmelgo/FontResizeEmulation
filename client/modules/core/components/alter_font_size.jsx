import React from 'react';
import Box from './box.jsx';

class AlterFontSize extends React.Component {
  constructor(props) {
    super(props);
  }

  resize(e){
    e.preventDefault();
    const {resize,initialDimension} = this.props;
    const {resizePercentage} = this.refs;
    resize(resizePercentage.value,initialDimension.x, initialDimension.y);
  }

  renderLetter(e){
    e.preventDefault();
    const {renderLetter} = this.props;
    const {letterTorender,resizePercentage} = this.refs;
    resizePercentage.value = false;
    renderLetter(letterTorender.value);
  }

  render() {
    const {dimension, fillUpIndexes} = this.props;
    var rows = [];
    var options = [];
    var options2 = [];
    for(let i = 0; i<dimension.y; i++){
      rows.push(<Box key={i} dimension={dimension} y={i} fillUpIndexes={fillUpIndexes}/>);
    }
    for(let i = 2; i<=37; i++){
      options.push(<option key={i} value={i}>{i}%</option>);
    }
    for(let i = 66; i<=90; i++){
      options2.push(<option key={i} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</option>);
    }
    return (
      <div>
        <h1>Font Size Changer</h1>
        <div className="form-group col-md-12">
          <label htmlFor="resizePercentage" className='col-md-2 control-label'>Resize</label>
          <div className='col-md-10'>
            <select id='resizePercentage' ref='resizePercentage'
                    className='selectpicker form-control' id='form-control'
                    onChange={this.resize.bind(this)}>
             <option value="false">Select Resize Percentage</option>
             {options}
            </select>
          </div>
          <label htmlFor="letterTorender" className='col-md-2 control-label'>Pick a Letter</label>
          <div className='col-md-10'>
            <select id='letterTorender' ref='letterTorender'
                    className='selectpicker form-control' id='form-control'
                    onChange={this.renderLetter.bind(this)}>
              <option value="A">A</option>
             {options2}
            </select>
          </div><br/><br/>
        </div>
        <div className='col-md-12'>{rows}</div>
      </div>
    );
  }
}

export default AlterFontSize;
