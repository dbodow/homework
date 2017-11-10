import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here
    this.state = {leftInput: '', rightInput: '', result: 0};
  }

  // your code here
  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setLeft.bind(this)} value={this.state.leftInput} id="left-input"></input>
        <input onChange={this.setRight.bind(this)} value={this.state.rightInput} id="right-input"></input>
        <button onClick={this.clear.bind(this)}>Clear</button>
        <br/>
        <button onClick={this.addNums.bind(this)} id="add">+</button>
        <button onClick={this.subtractNums.bind(this)} id="subtract">-</button>
        <button onClick={this.multiplyNums.bind(this)} id="multiply">*</button>
        <button onClick={this.divideNums.bind(this)} id="divide">/</button>
      </div>
    );
  }

  clear(event) {
    this.setState({leftInput: '', rightInput: '', result: 0});
  }

  addNums(event) {
    const leftNum = this.state.leftInput;
    const rightNum = this.state.rightInput;
    this.setState({result: leftNum + rightNum});
  }
  subtractNums(event) {
    const leftNum = this.state.leftInput;
    const rightNum = this.state.rightInput;
    this.setState({result: leftNum - rightNum});
  }
  multiplyNums(event) {
    const leftNum = this.state.leftInput;
    const rightNum = this.state.rightInput;
    this.setState({result: leftNum * rightNum});
  }
  divideNums(event) {
    const leftNum = this.state.leftInput;
    const rightNum = this.state.rightInput;
    this.setState({result: leftNum / rightNum});
  }

  setLeft(event) {
    this.setState({leftInput: parseInt(event.target.value, 10)});
    // console.log(event.target.value);
  }

  setRight(event) {
    this.setState({rightInput: parseInt(event.target.value, 10)});
  }
}

export default Calculator;
