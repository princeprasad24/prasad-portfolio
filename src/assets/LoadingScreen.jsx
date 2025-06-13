import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const fullText = "<Hello World/>";
  const fullLoading = "Loading.....";
  
  const [text, setText] = useState("");
  // const [loading , setLoading] = useState("")



  useEffect(() => {
    let Loadingindex = 1;
    const loadingInterval = setInterval(() => {
      const title = fullLoading.substring(0, Loadingindex);
      document.title = title;
      Loadingindex++;

      if (Loadingindex > fullLoading.length) {
        clearInterval(loadingInterval);
      }
    }, 500);

    return () => clearInterval(loadingInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 300);
 
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold text-center">
        {text} <span className="animate-blink ml-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
