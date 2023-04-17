import Head from "next/head";
import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { VscGitPullRequestCreate } from 'react-icons/vsc';
import { SiSpeedtest } from 'react-icons/si';
import { VscDebugAll } from 'react-icons/vsc';
import { BiCodeAlt } from 'react-icons/bi';
import { BsCheckLg } from 'react-icons/bs'
import Navbar from "../components/Navbar";

export default function Home() {
  const [codeInput, setCodeInput] = useState();
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false)
  // const {code, error, loading} = useOpenAi(codeInput);

  function formatText(text, format) {
    let result = "";
    if (format === "paragraph") {
      result = `<p>${text}</p>`;
    } else if (format === "list") {
      const items = text.split(",");
      result = "<ul>";
      items.forEach(item => {
        result += `<li>${item.trim()}</li>`;
      });
      result += "</ul>";
    }
    return result;
  }

  async function onSubmit(event) {
    event.preventDefault();
    setLoading(true)
    try {
      const response = await fetch('/api/generateText', {
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
      setLoading(false)
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

      {/* NAVBAR */}
      <Navbar className=''/>

      {/* CONTAINER */}
      <div className="w-full max-w-6xl flex flex-col justify-center mx-auto">
        <div className="hero w-full mt-12">
          <div className="hero mb-16 bg-base-100">
            <div className="hero-content flex-col lg:flex-row">

              {/* HERO TEXT */}
              <div className=" max-w-md lg:text-left mb-12 lg:mb-0">
                <h1 className="text-4xl lg:text-5xl leading-snug font-bold">Take your Coding Journey to the Next Level 🙌🏽 </h1>
                <h2 className="font-light text-gray-400 text-2xl my-8">AI Generated Code</h2>
                <ul className="text-lg">
                  <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-xl md:text-2xl text-gray-800 ml-0"><span className="text-blue-500">Skip</span> Writing boilerplate Code</div></li>
                  <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-xl md:text-2xl text-gray-800">Focus on Solving <span className="text-blue-500"> Problems</span></div></li>
                  <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-xl md:text-2xl text-gray-800"><span className="text-blue-500">Understand</span> complex code bases</div></li>
                  <li className='flex items-center text-blue-500 text-xl'><IoIosCheckmarkCircleOutline className="mr-2 my-2 text-4xl" /><div className="font-bold text-xl md:text-2xl text-gray-800"><span className="text-blue-500">Easily</span> Fix Errors</div></li>
                </ul>
              </div>

              {/* FORM */}
              <div className="card lg:ml-16 flex-shrink-0 w-full max-w-lg min-w-sm">
                <div className="font-bold text-2xl text-gray-800 my-2">
                  <h1>Try it <span className="text-blue-500 mr-1">FREE</span>below!</h1>
                </div>
                <div className="bg-gradient-to-r from-cyan-300 to-blue-300 z-0 rounded-lg rounded-bl-[20rem]">
                  <div className="card-body z-10">
                    <div className="mockup-code shadow-2xl pr-5">
                      <pre>
                        <code className="shadow-2xl">
                          {/* <CodeEditorWindow /> */}
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
                      <button onClick={onSubmit} className="btn bg-gray-600 shadow-2xl">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {loading && 
          <div class="flex items-center justify-center my-16">
            <div
              class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status">
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span>
            </div>
            <div className="ml-6 text-lg">Loading results ... <span className="text-2xl lg:text-3xl">🧑🏽‍💻</span></div>
          </div>}

        {/* {error && 
        <div className="alert alert-error shadow-lg w-2/4 mx-auto mb-10">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{`${error}`}</span>
          </div>
        </div>} */}

        {/* RESULT */}
        {result && !loading &&
          <div className='bg-gray-50 w-full py-10 flex justify-center mb-24'>
            <div className="card lg:w-2/3 w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl">Results:</h2>
                <div className="mockup-code pl-8 py-16">
                  <pre><code className="whitespace-normal leading-loose">{result}</code></pre>
                </div>
              </div>
            </div>
          </div>}

        {/* HEADLINE */}
        <div className="flex flex-col justify-center text-center mt-24 px-4 mb-24">
          <h1 className="text-3xl lg:text-4xl font-bold">Meet your new AI pair programing partner! <span>💪🏽</span><span>😎</span></h1>
          <p className="text-xl lg:text-2xl mt-4 font-normal text-gray-400">Unlock your coding potential with the ultimate programming assistant!</p>
        </div>

        {/* FEATURE SECTION */}
        <div className="flex flex-col md:flex-row px-10 text-lg lg:text-xl">
          <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
            <VscGitPullRequestCreate className="text-3xl text-blue-500" />
            <h3 className="font-semibold mt-3">Create Faster</h3>
            <p className="text-gray-500 mt-3 text-sm lg:text-lg">From react componets to server functions write code faster with AI.</p>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
            <SiSpeedtest className="text-3xl text-blue-500" />
            <h3 className="font-semibold text-bold mt-3">Automate Tests</h3>
            <p className="text-gray-500 mt-3 text-sm lg:text-lg">Unlock the power of automated testing with AI it's faster and easier than most testing software.</p>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
            <VscDebugAll className="text-3xl text-blue-500" />
            <h3 className="font-semibold mt-3">Auto Debugging</h3>
            <p className="text-gray-500 mt-3 text-sm lg:text-lg">Just copy and paste some buggy code and watch AI resolve the issue.</p>
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="grid flex-grow md:w-1/4 card place-items-center mb-8 border-2 border-blue-300 p-4 shadow-lg">
            <BiCodeAlt className="text-3xl text-blue-500" />
            <h3 className="font-semibold mt-3">Enhance Productivity</h3>
            <p className="text-gray-500 mt-3 text-sm lg:text-lg">Helping developers save time and effort by quickly finding and fixing issues in their code.</p>
          </div>
        </div>

        {/* HOW TO USE */}
        <div className="flex flex-col text-lg lg:text-xl bg-gray-700 rounded-tr-[6rem] mx-0 md:mx-12 my-16 pb-16">
            <p className='pl-10 pt-10 text-4xl text-bold text-white'>Let's see how it work's</p>
          <div className="flex flex-col md:flex-row mt-6 ml-6 justify-evenly pt-12">

            <div className="grid flex-grow md:w-1/4 card place-items-start mr-6 lg:mr-10 mb-12 md:mb-0 lg:pl-8">
              <p className="text-teal-800 text-bold text-xl bg-teal-300 w-10 h-10 rounded-full flex justify-center items-center">1</p>
              <h3 className="font-semibold mt-3 text-white text-xl">Understand complax code bases</h3>
              <p className="mt-3 text-[1rem] lg:text-lg text-gray-300">Just copy and paste your code and ask the AI asisstant to explain thecode line by line.</p>
            </div>

            <div className="grid flex-grow md:w-1/4 card place-items-start mr-6 lg:mr-10 mb-12 md:mb-0">
              <p className="text-teal-800 text-bold text-xl bg-teal-300 w-10 h-10 rounded-full flex justify-center items-center">2</p>
              <h3 className="font-semibold mt-3 text-white text-xl">Create functions on the fly</h3>
              <p className="mt-3 text-[1rem] lg:text-lg text-gray-300">Explain the functions input and output and watch the AI generate a function.</p>
            </div>

            <div className="grid flex-grow md:w-1/4 card place-items-start mr-6 lg:mr-10 mb-12 md:mb-0">
              <p className="text-teal-800 text-bold text-xl bg-teal-300 w-10 h-10 rounded-full flex justify-center items-center">3</p>
              <h3 className="font-semibold mt-3 text-white text-xl">Debug your code</h3>
              <p className="mt-3 text-[1rem] lg:text-lg text-gray-300">Ask for help by copying and pasting your code an ask the AI assistant to debug the code.</p>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="mx-6 lg:mx-12 pt-8 lg:pt-16">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl text-gray-800 font-bold mb-8">Save tons of time on custom functions and boilerplate code</h1>
            <p className="text-md lg:text-xl text-gray-500 mb-12">Whether your a beginner looking to start your coding journey or an experienced coding guru looking to take your coding skills to the next level.</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly my-24">
            <div className="bg-blue-100 rounded-lg p-4 border border-indigo-600 mb-10 w-full lg:w-1/2">
              <div>
                <div className="flex justify-end items-center">
                  <p className="text-center font-semibold text-white bg-indigo-400 p-2 w-24 rounded-full">Popular</p>
                </div>
                <div className="text-center mx-4">
                  <h3 className="my-6 font-bold text-xl">Coding Premium</h3>
                  <p className="text-gray-600 mb-8">Perfect one-time investment for your coding journey</p>
                  <div className="flex flex-col justify-start text-left">
                    <h4 className="font-semibold text-left my-5">What you will get:</h4>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500">10 Debugging sessions</div>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500">10 Generated Functions</div>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500 mr-2">10 Files Uploaded</div>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500 mr-2">Coding AI Coach - (100 questions)</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center my-6">
                  <p><span className="text-2xl font-bold text-center">$9.99</span> / one time fee</p>
                </div>
                <div className="flex justify-center items-center mt-10 mb-8">
                  <button className="btn rounded-full w-3/4">
                    START NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg p-4 border border-indigo-600 mb-6 lg:ml-12">
              <div>
                <div className="text-center mx-4">
                  <h3 className="my-6 font-bold text-xl">Coding Coach Assistant</h3>
                  <p className="text-gray-600 mb-8">Sharpen your skills and don't be left behind the the fast world of tech</p>
                  <div className="flex flex-col justify-start text-left">
                    <h4 className="font-semibold text-left my-5">What you will get:</h4>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500">Unlimited Debugging sessions</div>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500">Unlimited Generated Functions</div>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500 mr-2">Unlimited Files Uploaded</div>
                    </div>
                    <div className="flex justify-start items-center mb-3">
                      <span className="text-teal-500 text-lg mr-2"><BsCheckLg /></span> 
                      <div className="text-gray-500 mr-2">Coding AI Coach</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center my-6">
                  <p><span className="text-2xl font-bold text-center">$29.99</span> / month</p>
                </div>

                <div className="flex justify-center items-center mt-10 mb-8">
                  <button className="btn rounded-full w-3/4">
                    START NOW
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center bg-gray-700 w-full px-4 py-10 mb-16 rounded-2xl">
          <div className="text-center">
            <p className="text-2xl text-blue-400 my-4 font-semibold">What are you waiting for?</p>
            <h1 className="text-4xl my-4 text-white font-bold">Level Up your Coding Journey</h1>
            <div className="flex flex-col items-center mt-16">
              <button className="btn bg-blue-500 w-3/4 lg:w-2/4 rounded-full hover:bg-blue-600">Get Your Plan</button>
              <button className="btn bg-gray-900 mt-8 w-3/4 lg:w-2/4 rounded-full hover:bg-gray-800">Contact Us</button>
            </div>
          </div>
        </div>
        </div>

        <footer className="footer footer-center p-4 bg-gray-800 text-white py-4">
          <div>
            <p>Copyright © 2023 - All right reserved by <a className="text-blue-600 font-semibold" href='https://bobbyhall.dev'>BLHJR</a></p>
          </div>
        </footer>

      </div>  
  );
}
