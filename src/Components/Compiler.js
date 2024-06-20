import React, { useEffect, useState } from 'react'
import '../Css/Question.css'
import '../Css/Compiler.css'
import Split from 'react-split'
import assert from "assert"; 
import isEqual from 'lodash/isEqual';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import twoSum from '../Problems/Two-sum'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Compiler = () => {
  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
          // Your logic when Ctrl+' is pressed
          handlesubmit(value)
      }
  };

  // Attach the event listener to the document body
  document.body.addEventListener('keydown', handleKeyDown);

  // Clean up the event listener when the component unamounts
  return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
  };
}, []);
  
    const [value,setValue]=useState("function TwoSum(nums,Target){ };");
   const boilerplatecode=`function TwoSum(nums,Target){
    //Write Your Code Here
   };`
   const[output,setOutput]=useState('')
   const handlesubmit=(fn)=>{
    try {
      const nums = [
        [2, 7, 11, 15],
        [3, 2, 4],
        [3, 3],
      ];
  
      const targets = [9, 6, 6];
      const answers = [
        [0, 1],
        [1, 2],
        [0, 1],
      ];
      const cb = new Function(`return ${fn}`)();
      // for (let i = 0; i < nums.length; i++) {
      //   // result is the output of the user's function and answer is the expected output
        const result = cb(nums[0], targets[0]);
        result==undefined?toast("Function should return a list"):setOutput(`[${result}]`);
        console.log(result)
        // if(!isEqual(result, answers[0])){
        //   toast(`Failed at test case${0}`)
        //   return false;
        // }
        // assert.deepStrictEqual(result, answers[i]);
      // }
      // toast("All test cases passed")
      // console.log("All Test case passed")
      return true;
      
    } catch (error) {
      console.log("twoSum handler function error");
		throw new Error(error);
    }
   }
  return (
    
    <div className="C-Compiler">
              
    <div className="C-editor">
    <CodeMirror value={boilerplatecode}
     height="55vh" 
     extensions={[javascript({ jsx: true })]} 
     onChange={(value)=>{setValue(value);console.log(value)}}
     style={{fontSize:16}} />
     {/* value={value} 
     onChange={(value)=>{setValue(value)}} */}

     <div className="run-submit">
       <div className="run" onClick={()=>{handlesubmit((value))}} >Run</div>
       <div className="submit" onClick={()=>{handlesubmit((value))}}>Submit</div>
     </div>
    </div>
        {/* <textarea name="" id="" cols="30" rows="10">Enter</textarea> */}
    <div className="C-testcases">
      <div className="test">
        <p className="test-p">
          {/* Testcases */}
          OTUPUT:
        </p>
      </div>
      <div className="cases-box">

      <div className="output">
      <div className="output-feilds">
      {output}
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
