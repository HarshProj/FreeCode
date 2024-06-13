import React, { useEffect, useState } from 'react'
import '../Css/Question.css'
import Split from 'react-split'
import assert from "assert";
import isEqual from 'lodash/isEqual';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import twoSum from '../Problems/Two-sum'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Question = () => {
  useEffect(() => {

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
          // Your logic when Ctrl+' is pressed
          handlesubmit(value)
      }
  };

  // Attach the event listener to the document body
  document.body.addEventListener('keydown', handleKeyDown);

  // Clean up the event listener when the component unmounts
  return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
  };
}, []);
  
    const [value,setValue]=useState("function TwoSum(nums,Target){ };");
   const boilerplatecode=`function TwoSum(nums,Target){
    //Write Your Code Here
   };`
   const[output,setOutput]=useState('[0,1]')
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
      for (let i = 0; i < nums.length; i++) {
        // result is the output of the user's function and answer is the expected output
        const result = cb(nums[i], targets[i]);
        result==undefined?toast("Function should return a list"):setOutput(`[${result}]`);
        if(!isEqual(result, answers[i])){
          toast(`Failed at test case${i}`)
          return false;
        }
        // assert.deepStrictEqual(result, answers[i]);
      }
      toast("All test cases passed")
      console.log("All Test case passed")
      return true;
      
    } catch (error) {
      console.log("twoSum handler function error");
		throw new Error(error);
    }
   }
  return (
    <div className='question-div'>
        <div className="Problem-statement">
            <h2>{twoSum.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: twoSum.problemStatement }} />
            <div className="examples">
              {twoSum.examples.map((val)=>(
                <>
                <h3>Example:{val.id}</h3>
                <div className="example">
                  <h3>Input:</h3>
                  <span>{val.inputText}</span>
                  <div className="output">
                  <h3>Output:</h3>
                  <span>{val.outputText}</span>
                  </div>
                  <div className="explanation">
                  <h3>Explanation:</h3>
                  <span>{val.explanation}</span>
                  </div>
                </div>
                </>
              ))}
              <h3 className='c-h3'>Constraints:</h3>
               <div className='constraints' dangerouslySetInnerHTML={{ __html: twoSum.constraints }} />
            </div>
        </div>
        <div className="Compiler">
              
        <div className="editor">
        <CodeMirror value={boilerplatecode}
         height="55vh" 
         extensions={[javascript({ jsx: true })]} 
         onChange={(value)=>{setValue(value);console.log(value)}}
         style={{fontSize:16}} />
         {/* value={value} 
         onChange={(value)=>{setValue(value)}} */}

         <div className="run-submit">
           <div className="run" >Run</div>
           <div className="submit" onClick={()=>{handlesubmit((value))}}>Submit</div>
         </div>
        </div>
            {/* <textarea name="" id="" cols="30" rows="10">Enter</textarea> */}
        <div className="testcases">
          <div className="test">
            <p className="test-p">
              Testcases
            </p>
          </div>
          <div className="cases-box">

          <div className="cases">
            <div className="case1">Case 1</div>
            <div className="case2">Case 2</div>
          </div>
          <div className="input">
            Input:
          <div className="inputs-fields">
            nums1=[2, 7, 11, 15]
          </div>
          </div>
          <div className="input">
            Output:
          <div className="inputs-fields">
          {output}
          </div>
          </div>
          </div>
        </div>
        </div>
         {/* </Split> */}
    </div>
  )
}
