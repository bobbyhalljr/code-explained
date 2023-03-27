import Head from "next/head";
import { useState } from "react";
import { useOpenAi } from "../hooks/useOpenAi";

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

      <main className="hero w-full md:px-6">
      {/* <div className="hero min-h-screen bg-base-200"> */}
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center max-w-md lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl leading-snug font-bold">Take your Coding Journey to the Next Level 🙌🏽 </h1>
            <h2 className="font-light text-gray-400 text-xl flex justify-center my-8">AI Generated Code</h2>
            <ul className="steps">
              <li className="step font-semibold text-sm text-gray-500 step-primary">Copy & paste your code</li>
              <li className="step font-semibold text-sm text-gray-500 step-primary">Click submit</li>
              <li className="step font-semibold text-sm text-gray-500 step-primary">Let AI enhance your code</li>
              <li className="step font-semibold text-sm text-gray-500 step-primary">Get refactored code</li>
            </ul>
          </div>
          <div className="card lg:ml-16 flex-shrink-0 w-full max-w-lg min-w-sm">
            <div className="bg-gradient-to-r from-cyan-300 to-blue-300 z-0 rounded-lg rounded-bl-[16rem]">
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
      {/* </div> */}
      </main>
      {result &&
      <div className='bg-gray-300 w-full py-10 flex justify-center'>
        <div className="card lg:w-2/3 w-full bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Results:</h2>
            <div className="mockup-code pl-8 py-16">
              <pre><code className="whitespace-normal leading-loose">{result}</code></pre>
            </div>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Try Again!</button>
            </div> */}
          </div>
        </div>
      </div>}
    </div>
    );
  }
  
  {/* <form onSubmit={onSubmit}>
    <textarea className="textarea textarea-bordered" type="textarea"
        name="code"
        placeholder="Enter Code Here"
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}></textarea>
      <button type='submit' className="btn">Button</button>
    </form>
    <div className=''>{result}</div> */}