import {useState} from "react";

const number = {
        firstNumber: 0,
        secondNumber: 0
}

function Calculator() {
        const [result, setResult] = useState(0)
        const [firstNumber, setFirstNumber] = useState(number.firstNumber)
        const [secondNumber, setSecondNumber] = useState(number.secondNumber)

        const NumberA = (e) => {
                setFirstNumber(e.target.value)
        }
        const NumberB = (e) => {
                setSecondNumber(e.target.value)
        }
        const Addition = () => {
                let total = parseInt(firstNumber) + parseInt(secondNumber)
                setResult(total)

        }
        const  Subtraction = () => {
                let total = parseInt(firstNumber) - parseInt(secondNumber)
                setResult(total)
        }
        const  Multiplication = () => {
                let total = parseInt(firstNumber) * parseInt(secondNumber)
                setResult(total)
        }
        const Division = () => {
                let total = parseInt(firstNumber) / parseInt(secondNumber)
                setResult(total)
        }

return(
    <div>
        <input id='firstNumber' onKeyUp={(e)=> NumberA(e)}/>
        <input id='secondNumber' onKeyUp={(e)=> NumberB(e)}/>
        <p>Result: {result} </p>
        <button onClick={Addition}>+</button>
        <button onClick={Subtraction}>-</button>
        <button onClick={Multiplication}>x</button>
        <button onClick={Division}>/</button>
    </div>
)

}
export default Calculator;