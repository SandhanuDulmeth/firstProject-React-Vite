export default function Home() {


function printSomthing() { 
       console.log("I am clicked");
  }





    return (
        <>
            <div className="home">
                Welcome to the home page!
                <br />
                <button onClick={printSomthing}>click Me </button>
                
                
                
                </div>
        </>
    );
}