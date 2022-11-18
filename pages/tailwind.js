


export default function Home() {
    return (
      <div>
        <body >
          <h1 className=" bg-pink-400 text-3xl text-pink-300 font-bold underline ">
            Hello world!
          </h1>
          <div className="p-20 flex items-center gap-6 justify-center bg-gray-100">
            <div className="p-10 border border-pink-400 bg-pink-300">1</div>
            <div className="p-10 border border-pink-400 bg-pink-300">2</div>
            <div className="p-10 border border-pink-400 bg-pink-300">3</div>
            <button className="bg-pink-400 p-3 rounded hover:bg-blue-200" >Click me!</button>
          </div>
        </body>
      </div>
    );
  }
