// import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header'
import Footer from './mycomponents/Footer'
import PropTypes from 'prop-types'
import { useReducer, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Contact,
  History,
  Document
} from './mycomponents/Pages'



const lists = [
  // "Kurta Pajama",
  // "Court pent",
  // "Pent shirt"
  {
    "name": "Nikhil",
    "company": "TCS"
  },
  {
    "name": "Brijesh",
    "company": "Oracle"
  }
];

function SecretComponent() {
  return (
    <p>I am from Secret text.</p>
  )
}

function RegularComponent() {
  return (
    <p>I am from Regular text.</p>
  )
}
        const list1 = [1,2,3,4,5];
        const newlist = list1.map((n) => n * 2);
        console.log(newlist);

function App(login, props) {


  // const [checked, toggle] = useReducer(
  //   (checked) => (!checked),
  //   false
  // );

  const [emotion, setEmotion] = useState("Happy");

  function happy() {
    // console.log('happy')
    setEmotion("Happy");
  }
  var sad = () => {
    setEmotion("Sad")
  }

  //https://api.github.com/users/mojombo



  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error , setError] = useState(null);

  useEffect(() => {
    // debugger;
    if(!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login.value}`)
      .then((response) =>  response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if(loading) return <h1>Loading...</h1>;

  if(error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if(!data) return null;

  // if (data) {
    return (
      <>
        <Header title="Enter title here" searchBar={true} />

        
        <h1>
          My current mood is {emotion}.
        </h1>

        <button className="btn" style={{ width: 100, height: 50, margin: 20 }} onClick={happy}>
          Happy
        </button>
        <button className="btn" style={{ width: 100, height: 50, margin: 20 }} onClick={sad}>
          Sad
        </button>
        <button className="btn" style={{ width: 100, height: 50, margin: 20 }} onClick={() => setEmotion("Tired")}>
          Tired
        </button>
        {/* <div style={{ width: "100%", border: "2px solid blue", margin: "10px" }} >
          {JSON.stringify(data)}
        </div> */}
        
        <div style={{ textAlign: "center", background: "gray" }}>
          <h3 style={{ color: "white", border: "1px solid blue", width: "100%", background: "blue" }}>Name: {data.name}</h3>
          <h2 style={{ color: "blue", border: "1px solid blue" }}>Location: {data.location}</h2>
          <img src={data.avatar_url} alt="Profile image" width = "200px" height = "200px" />
          <p style={{ background: "black", color: "white", margin: "10px" }}>Blog: {data.blog}</p>
        </div>
        
        {/* <Footer /> */}

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
            <Route path="history" element={<History />}/>
            <Route path="document" element={<Document />}/>
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer year={new Date().getFullYear()} lists={lists} />

      </>
    );

  // }

  return (
    <div>"no user available"</div>
    // <>


    /*{     
          <Header title="Enter title here" searchBar={true} />
    
          <Footer year={new Date().getFullYear()} lists={lists} />
    
          {props.authorized ? <RegularComponent /> : <SecretComponent />}
    
          <input
            type="checkbox"
            value={checked}
            onChange={toggle}
          />
          <p>
            {checked ? "Checked" : "Not Checked"}
          </p>
    
          }*/


  );

}

export default App;
