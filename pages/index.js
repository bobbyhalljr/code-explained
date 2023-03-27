import Head from "next/head";
import { useState } from "react";
import { useOpenAi } from "../hooks/useOpenAi";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { SiSpeedtest } from 'react-icons/si';
import { VscDebugAll } from 'react-icons/vsc';
import { BiCodeAlt } from 'react-icons/bi';

export default function Home() {
  const [codeInput, setCodeInput] = useState();
  const [result, setResult] = useState();
  // const [code, loaing, error] = useOpenAi();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/generate', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: codeInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setCodeInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="">
      <Head>
        <title>Code Explained</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className="hero w-full">
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center max-w-md lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl leading-snug font-bold">Take your Coding Journey to the Next Level 🙌🏽 </h1>
            <h2 className="font-light text-gray-400 text-2xl flex justify-center my-8">AI Generated Code</h2>
            <ul className="text-lg">
              <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-3xl text-gray-800">Quickly <span className="text-blue-500">Create</span> Applications</div></li>
              <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-3xl text-gray-800"><span className="text-blue-500">Automate</span> Testing</div></li>
              <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-3xl text-gray-800">Automated <span className="text-blue-500">Debugging</span></div></li>
              <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-3xl text-gray-800">Enhace Productivity</div></li>
            </ul>
            {/* <ul className="steps steps-vertical">
              <li className="step font-semibold text-sm text-gray-500 step-primary">Copy & paste your code</li>
              <li className="step font-semibold text-sm text-gray-500 step-primary">Click submit</li>
              <li className="step font-semibold text-sm text-gray-500 step-primary">Let AI enhance your code</li>
              <li className="step font-semibold text-sm text-gray-500 step-primary">Get refactored code</li>
            </ul> */}
          </div>
          <div className="card lg:ml-16 flex-shrink-0 w-full max-w-lg min-w-sm">
            <div className="bg-gradient-to-r from-cyan-300 to-blue-300 z-0 rounded-lg rounded-bl-[20rem]">
              <div className="card-body z-10">
                <div className="mockup-code shadow-2xl pr-5">
                  <pre>
                    <code className="shadow-2xl">
                      <textarea
                        className="textarea textarea-bordered bg-gray-200 text-gray-900 font-mono w-full placeholder-gray-500" 
                        rows="10" cols="40" 
                        type="textarea"
                        name="code"
                        placeholder="Debug this code ... [Insert Code Here]"
                        value={codeInput}
                        onChange={(e) => setCodeInput(e.target.value)}>
                      </textarea>
                    </code>
                  </pre>
                </div>
                <div className="form-control mt-6">
                  <button onClick={onSubmit} className="btn btn-primary shadow-2xl">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
      {result &&
      <div className='bg-gray-300 w-full py-10 flex justify-center'>
        <div className="card lg:w-2/3 w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Results:</h2>
            <div className="mockup-code pl-8 py-16">
              <pre><code className="whitespace-normal leading-loose">{result}</code></pre>
            </div>
          </div>
        </div>
      </div>}

      <div className="flex flex-col justify-center text-center mt-24 lg:mt-0 px-4 mb-16">
        <h1 className="text-3xl lg:text-4xl font-bold">Meet your new AI pair programing partner! <span>💪🏽</span><span>😎</span></h1>
        <p className="text-xl lg:text-2xl mt-4 font-normal text-gray-400">Unlock your coding potential with the ultimate programming assistant!</p>
      </div>

      <div className="flex flex-col md:flex-row px-4 text-lg lg:text-xl">
        <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
          <VscGitPullRequestCreate className="text-3xl text-blue-500"/>
          <h3 className="font-semibold mt-3">Create Faster</h3>
          <p className="text-gray-500 mt-3 text-sm lg:text-lg">From react componets to server functions write code faster with AI.</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
          <SiSpeedtest className="text-3xl text-blue-500"/>
          <h3 className="font-semibold text-bold mt-3">Automate Tests</h3>
          <p className="text-gray-500 mt-3 text-sm lg:text-lg">Unlock the power of automated testing with AI it's faster, easier, than most testing software.</p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
            <VscDebugAll className="text-3xl text-blue-500"/>
            <h3 className="font-semibold mt-3">Auto Debugging</h3>
            <p className="text-gray-500 mt-3 text-sm lg:text-lg">Just copy and paste some buggy code and watch AI resolve the issue.</p>
          </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
            <BiCodeAlt className="text-3xl text-blue-500"/>
            <h3 className="font-semibold mt-3">Enhance Productivity</h3>
            <p className="text-gray-500 mt-3 text-sm lg:text-lg">Helping developers save time and effort by quickly finding and fixing issues in their code.</p>
          </div>
      </div>

    </div>
    );
  }
  