// import React, { useState } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const TextToSpeech = () => {
//   const [text, setText] = useState("");
//   const [pitch, setPitch] = useState(1);
//   const [rate, setRate] = useState(1);
//   const [voiceIndex, setVoiceIndex] = useState(null);
//   const onEnd = () => {
//     // You could do something here after speaking has finished
//   };
//   const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
//     onEnd,
//   });
//
//   const voice = voices[voiceIndex] || null;
//
//   const styleFlexRow = { display: "flex", flexDirection: "row" };
//   const styleContainerRatePitch = {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: 12,
//   };
//
//   return (
//     <React.Fragment>
//       <div
//         className="row m-2 p-4"
//         style={{ background: "#f5f5f5", textAlign: "center" }}
//       >
//         <h1
//           style={{
//             fontFamily: "Georgia, Times, serif",
//             fontSize: "45px",
//             fontWeight: "bolder",
//           }}
//         >
//           Text to Speech
//         </h1>
//       </div>
//       <form>
//         {!supported && (
//           <p>
//             Oh no, it looks like your browser doesn&#39;t support Speech
//             Synthesis.
//           </p>
//         )}
//         {supported && (
//           <React.Fragment>
//             <div className="column">
//               <div className="row m-2 p-2" style={{ textAlign: "center" }}>
//                 <p>
//                   {`Type a message below then click 'Speak'
//                 and SpeechSynthesis will read it out.`}
//                 </p>
//                 <div style={{ display: "none" }}>
//                   <label htmlFor="voice">Voice</label>
//                   <select
//                     id="voice"
//                     name="voice"
//                     value={voiceIndex || ""}
//                     onChange={(event) => {
//                       setVoiceIndex(event.target.value);
//                     }}
//                   >
//                     <option value="">Default</option>
//                     {voices.map((option, index) => (
//                       <option key={option.voiceURI} value={index}>
//                         {`${option.lang} - ${option.name}`}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="col-9 row">
//                   <div className="col-6 px-5" style={styleContainerRatePitch}>
//                     <div style={styleFlexRow}>
//                       <label htmlFor="rate">Rate: </label>
//                       <div className="rate-value">{rate}</div>
//                     </div>
//                     <input
//                       type="range"
//                       min="0.5"
//                       max="2"
//                       defaultValue="1"
//                       step="0.1"
//                       id="rate"
//                       onChange={(event) => {
//                         setRate(event.target.value);
//                       }}
//                     />
//                   </div>
//                   <div className="col-6 px-5" style={styleContainerRatePitch}>
//                     <div style={styleFlexRow}>
//                       <label htmlFor="pitch">Pitch: </label>
//                       <div className="pitch-value">{pitch}</div>
//                     </div>
//                     <input
//                       type="range"
//                       min="0"
//                       max="2"
//                       defaultValue="1"
//                       step="0.1"
//                       id="pitch"
//                       onChange={(event) => {
//                         setPitch(event.target.value);
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div
//                   className="col-9"
//                   style={{
//                     border: "4px solid #f8f9fa",
//                     backgroundColor: "#f8f9fa",
//                   }}
//                 >
//                   <label htmlFor="message">Message</label>
//                   <br />
//                   <textarea
//                     style={{
//                       width: "100%",
//                       minHeight: "150px",
//                       fontSize: "17px",
//                       backgroundColor: "#f8f9fa",
//                     }}
//                     id="message"
//                     name="message"
//                     placeholder="Please type message you want to make speek it out."
//                     rows={3}
//                     value={text}
//                     onChange={(event) => {
//                       setText(event.target.value);
//                     }}
//                   />
//                 </div>
//                 <div className="col-3">
//                   {speaking ? (
//                     <button
//                       className="btn btn-secondary m-2 p-2"
//                       style={{ width: "100%", height: "90%" }}
//                       type="button"
//                       onClick={cancel}
//                     >
//                       Stop
//                     </button>
//                   ) : (
//                     <button
//                       className="btn btn-success m-2 p-2"
//                       style={{ width: "100%", height: "90%" }}
//                       type="button"
//                       onClick={() => speak({ text, voice, rate, pitch })}
//                     >
//                       Speak
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </React.Fragment>
//         )}
//       </form>
//     </React.Fragment>
//   );
// };
//
// export default TextToSpeech;



/////////////////////////////////////////////




// import React, { useState } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
//
// const TextToSpeech = () => {
//   const [text, setText] = useState("");
//   const [pitch, setPitch] = useState(1);
//   const [rate, setRate] = useState(1);
//   const [voiceIndex, setVoiceIndex] = useState(null);
//   const onEnd = () => {
//     // You could do something here after speaking has finished
//   };
//   const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
//     onEnd,
//   });
//
//   const voice = voices[voiceIndex] || null;
//
//   return (
//     <div className="phone-container">
//       <div className="phone">
//         <div className="phone-screen">
//           <div className="assistant-container">
//             <div className="assistant-content">
//               <div className="assistant-title">
//                 <h1>Text to Speech</h1>
//               </div>
//               <div className="assistant-body">
//                 {!supported && (
//                   <p>
//                     Oh no, it looks like your browser doesn&#39;t support
//                     Speech Synthesis.
//                   </p>
//                 )}
//                 {supported && (
//                   <React.Fragment>
//                     <div className="settings-container">
//                       <div className="voice-select">
//                         <label htmlFor="voice">Voice:</label>
//                         <select
//                           id="voice"
//                           name="voice"
//                           value={voiceIndex || ""}
//                           onChange={(event) => {
//                             setVoiceIndex(event.target.value);
//                           }}
//                           style={{ maxWidth: "100%" }}
//                         >
//                           <option value="">Default</option>
//                           {voices.map((option, index) => (
//                             <option key={option.voiceURI} value={index}>
//                               {`${option.lang} - ${option.name}`}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       <div className="rate-pitch-sliders">
//                         <div className="rate-slider">
//                           <label htmlFor="rate">Rate:</label>
//                           <input
//                             type="range"
//                             min="0.5"
//                             max="2"
//                             step="0.1"
//                             value={rate}
//                             onChange={(event) => setRate(event.target.value)}
//                           />
//                           <span>{rate}</span>
//                         </div>
//                         <div className="pitch-slider">
//                           <label htmlFor="pitch">Pitch:</label>
//                           <input
//                             type="range"
//                             min="0"
//                             max="2"
//                             step="0.1"
//                             value={pitch}
//                             onChange={(event) => setPitch(event.target.value)}
//                           />
//                           <span>{pitch}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-area">
//                       <label htmlFor="message">Message:</label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         placeholder="Please type the message you want to speak out."
//                         value={text}
//                         onChange={(event) => setText(event.target.value)}
//                       />
//                     </div>
//                     <div className="button-container">
//                       <button
//                         className={`speak-button ${
//                           speaking ? "speaking" : ""
//                         }`}
//                         onClick={speaking ? cancel : () => speak({ text, voice, rate, pitch })}
//                       >
//                         {speaking ? "Stop" : "Speak"}
//                       </button>
//                     </div>
//                   </React.Fragment>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .phone-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           background: linear-gradient(135deg, #2d75ff, #a8bfff);
//         }
//         .phone {
//           width: 300px;
//           height: 500px;
//           background: #333;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
//         }
//         .phone-screen {
//           width: 100%;
//           height: 100%;
//           background: #fff;
//           padding: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         .assistant-container {
//           width: 100%;
//           max-width: 400px;
//         }
//         .assistant-content {
//           text-align: center;
//         }
//         .assistant-title {
//           font-size: 28px;
//           margin-bottom: 20px;
//         }
//         .settings-container {
//           margin-bottom: 20px;
//         }
//         .voice-select {
//           margin-bottom: 10px;
//         }
//         .rate-pitch-sliders {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 20px;
//         }
//         .rate-slider,
//         .pitch-slider {
//           width: 45%;
//         }
//         .rate-slider span,
//         .pitch-slider span {
//           margin-left: 10px;
//         }
//         .text-area {
//           margin-bottom: 20px;
//         }
//         .text-area textarea {
//           width: 100%;
//           height: 100px;
//           resize: none;
//           padding: 10px;
//           font-size: 16px;
//           border-radius: 5px;
//           border: 1px solid #ccc;
//         }
//         .button-container {
//           display: flex;
//           justify-content: center;
//         }
//         .speak-button {
//           padding: 10px 20px;
//           font-size: 16px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .speak-button:hover {
//           background-color: #4caf50;
//         }
//         .speak-button.speaking {
//           background-color: #f44336;
//         }
//       `}</style>
//     </div>
//   );
// };
//
// export default TextToSpeech;


//////////////////////////////////////////////////////////////



import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [voiceIndex, setVoiceIndex] = useState(null);
  const onEnd = () => {
    // You could do something here after speaking has finished
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

  return (
    <div className="phone-container">
      <div className="phone">
        <div className="phone-screen">
          <div className="assistant-container">
            <div className="assistant-content">
              <div className="assistant-title">
                <h1 className="title">Text to Speech</h1>
              </div>
              <div className="assistant-body">
                {!supported && (
                  <p>
                    Oh no, it looks like your browser doesn&#39;t support
                    Speech Synthesis.
                  </p>
                )}
                {supported && (
                  <React.Fragment>
                    <div className="settings-container">
                      <div className="voice-select">
                        <label htmlFor="voice">Voice:</label>
                        <select
                          id="voice"
                          name="voice"
                          value={voiceIndex || ""}
                          onChange={(event) => {
                            setVoiceIndex(event.target.value);
                          }}
                          style={{ maxWidth: "100%" }}
                        >
                          <option value="">Default</option>
                          {voices.map((option, index) => (
                            <option key={option.voiceURI} value={index}>
                              {`${option.lang} - ${option.name}`}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="rate-pitch-sliders">
                        <div className="rate-slider">
                          <label htmlFor="rate">Rate:</label>
                          <input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={rate}
                            onChange={(event) => setRate(event.target.value)}
                          />
                          <span>{rate}</span>
                        </div>
                        <div className="pitch-slider">
                          <label htmlFor="pitch">Pitch:</label>
                          <input
                            type="range"
                            min="0"
                            max="2"
                            step="0.1"
                            value={pitch}
                            onChange={(event) => setPitch(event.target.value)}
                          />
                          <span>{pitch}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-area">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Please type the message you want to speak out."
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                      />
                    </div>
                    <div className="button-container">
                      <button
                        className={`speak-button ${
                          speaking ? "speaking" : ""
                        }`}
                        onClick={speaking ? cancel : () => speak({ text, voice, rate, pitch })}
                      >
                        {speaking ? "Stop" : "Speak"}
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .phone-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Adjust the height to match FaceRecognition */
          background: linear-gradient(135deg, #2d75ff, #a8bfff);
        }
        .phone {
          width: 85%; /* Adjust the width to match FaceRecognition */
          height: 95%; /* Adjust the height to match FaceRecognition */
          max-width: 750px; /* Set maximum width */
          max-height: 800px; /* Set maximum height */
          background: #333;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          background: #fff;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .assistant-container {
          width: 100%;
          max-width: 400px;
        }
        .assistant-content {
          text-align: center;
        }
        .assistant-title {
          font-size: 28px;
          margin-bottom: 20px;
        }
        .title {
          text-shadow: 1px 1px 2px #000; /* Add shadow effect */
        }
        .settings-container {
          margin-bottom: 20px;
        }
        .voice-select {
          margin-bottom: 10px;
        }
        .rate-pitch-sliders {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .rate-slider,
        .pitch-slider {
          width: 45%;
        }
        .rate-slider span,
        .pitch-slider span {
          margin-left: 10px;
        }
        .text-area {
          margin-bottom: 20px;
        }
        .text-area textarea {
          width: 100%;
          height: 100px;
          resize: none;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }
        .button-container {
          display: flex;
          justify-content: center;
        }
        .speak-button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .speak-button:hover {
          background-color: #4caf50;
        }
        .speak-button.speaking {
          background-color: #f44336;
        }
      `}</style>
    </div>
  );
};

export default TextToSpeech;


