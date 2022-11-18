




export default function Home() {
    return (
      <div>
        <body >
          <h1 className=" bg-pink-400 text-3xl text-pink-300 font-bold underline ">
            Hello world!
          </h1>

          <div className="p-20 flex items-center gap-6 justify-center bg-gray-100">
            <div className="" >
                <svg height="100" width="100" className="absolute top-100 right-20">
                 <circle cx="50" cy="50" r="40" stroke="pink" stroke-width="3" fill="pink" /></svg>
             </div>


            <div className="p-10 border border-pink-400 bg-pink-300 r">1</div>
            <div className="p-10 border border-pink-400 bg-pink-300">2</div>
            <div className="p-10 border border-pink-400 bg-pink-300">3</div>
          </div>
          
          <button className="flex bg-pink-400 p-3 rounded hover:bg-pink-600 transition-colors duration-300 mx-auto" >Click me!</button>
        </body>
      </div>
    );
  }
