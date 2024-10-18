// function ErrorPage() {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="lg:width-1/2 h-[50dvh] bg-gray-500/20 rounded-2xl p-10">
//         <h1 className="text-9xl flex justify-center">404</h1>
//         <h2 className="text-2xl font-mono">
//           Sorry, The Page that your are looking for is <span className="italic font-serif">Not Found 😭</span> 
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default ErrorPage;
// import React from 'react';

function ErrorPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="lg:w-1/2 h-[50dvh]  bg-gradient-to-r from-blue-500 to-purple-600backdrop-blur-md rounded-2xl p-10 shadow-lg">
        <h1 className="text-9xl flex justify-center font-bold">404</h1>
        <h2 className="text-xl font-mono mt-4 text-center">
          Sorry, the page you are looking for is <span className="italic font-serif">not found 😭</span>
        </h2>
        <div className="flex justify-center my-3">
          <a
            href="/"
            className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;