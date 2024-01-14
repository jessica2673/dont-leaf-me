import React, { useState, useEffect } from "react";
import FaceDetector from "../FaceDetector";

const faceDetection = false;

const GrowthStunters: React.FC = () => {
  const [called, setCalled] = useState(0);
  const [url, setUrl ] = useState('');

  useEffect(() => {
    if (url != "") {
      localStorage.setItem(JSON.stringify(url), JSON.stringify(url));
      chrome.runtime.sendMessage(window.localStorage, function(response) {});
    }
    setUrl('');
  }, [called]);

  const submit = async () => {
    setCalled(called + 1);
  }

  return (
    <>
      <form>
        <label>
          Add new URL :
          <input type="text" name="name" onChange={async (e) => await setUrl(e.target.value)} value={url} />
        </label>
      </form>
      <button type="submit" onClick={submit}>Submit</button>
      {faceDetection && <FaceDetector />}
    </>
  );
};

export default GrowthStunters;
