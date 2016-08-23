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
    for(let i = 0; i<dimension.y; i++){
      rows.push(<Box key={i} dimension={dimension} y={i} fillUpIndexes={fillUpIndexes}/>);
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
             <option value="false">Select Resize Percentage</option><option value="2">2</option>
             <option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option>
             <option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>
             <option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option>
             <option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option>
             <option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option>
             <option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option>
             <option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option>
             <option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option>
             <option value="35">35</option><option value="36">36</option><option value="37">37</option>
            </select>
          </div>
          <label htmlFor="letterTorender" className='col-md-2 control-label'>Pick a Letter</label>
          <div className='col-md-10'>
            <select id='letterTorender' ref='letterTorender'
                    className='selectpicker form-control' id='form-control'
                    onChange={this.renderLetter.bind(this)}>
              <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option>
              <option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option>
              <option value="I">I</option><option value="J">J</option><option value="K">K</option><option value="L">L</option>
              <option value="M">M</option><option value="N">N</option><option value="O">O</option><option value="P">P</option>
              <option value="Q">Q</option><option value="R">R</option><option value="S">S</option><option value="T">T</option>
              <option value="U">U</option><option value="V">V</option><option value="W">W</option><option value="X">X</option>
              <option value="Y">Y</option><option value="Z">Z</option>
            </select>
          </div><br/><br/>
        </div>
        <div className='col-md-12' id="canvas">{rows}</div>
      </div>
    );
  }
}

export default AlterFontSize;
