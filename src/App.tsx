import { useEffect, useState } from 'react';
import './App.css';
import Card from './card';


const linksList = [
  {
    link: 'https://chatgpt.com/',
    logo: 'https://auth.openai.com/assets/openai-logo-DmWoKcI3.svg',
    name: 'Chat gpt',
  },
  {
    link: 'https://www.canva.com/',
    logo: 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg',
    name: 'Canva',
  },
  {
    link: 'https://stackblitz.com/',
    logo: 'https://developer.stackblitz.com/img/theme/docs-logo.svg',
    name: 'StackBlitz',
  },
  {
    link: 'https://vercel.com/',
    logo: 'https://www.svgrepo.com/show/361653/vercel-logo.svg',
    name: 'Vercel',
  },
  {
    link: 'https://github.com/',
    logo: 'https://pngimg.com/uploads/github/github_PNG40.png',
    name: 'Github',
  },
  {
    link: 'https://fonts.google.com/',
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/Google-Fonts-Logo.png',
    name: 'Google Fonts',
  },
  {
    link: 'https://react-icons.github.io/react-icons/',
    logo: 'https://i.ibb.co/c1XStxp/OIP-1-removebg-preview.png',
    name: 'React icons',
  },

  {
    link: 'https://codesandbox.io/',
    logo: 'https://i.ibb.co/N7N2mqd/codesandbox-removebg-preview.png',
    name: 'Codesandbox',
  },
];
function App() {
  /***
  *  const [count, setCount] = useState(0);
  const handleAddItems = () => {};
  const handleGetItems = () => {};
  */
  const [showAdd, setShowAdd] = useState(false);
  const [data, setData] = useState(linksList);
  const [value, setValue] = useState(new Date());
  const [mouse, setMouse] = useState({x:0,y:0});

  const handleAdd = () => {
    setShowAdd(true)
  };
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };

  }, [])
  const add = async (datavalue: {
    link: string;
    logo: string;
    name: string;
  }) => {
    await linksList.push(datavalue)
  }
  useEffect(() => {
    setData(linksList)
  }, [linksList])
  useEffect(()=>{
    document.body.addEventListener('mousemove',(e)=>{
      e.preventDefault()
      setMouse({x:e.clientX,y:e.clientY})    })
  },[])
  return (
    <div className="appMain" >
      <div className='mouse-point' style={{top:mouse.y,left:mouse.x}}></div>
      <div className="app">

        <h1>
          Bookmarks <span className="plus">Plus</span>
        </h1>
        <div id="clock">
          <div className='date time'>
            {
            }
            <span className='circle'>{value.getUTCHours() === 0 ? '00' : value.getUTCHours() < 10 ? `0${value.getUTCHours()}` : value.getUTCHours()}</span>
            <span className='circle'>{value.getUTCMinutes() === 0 ? '00' : value.getUTCMinutes() < 10 ? `0${value.getUTCMinutes()}` : value.getUTCMinutes()}</span>
            <span className='circle'>{value.getMilliseconds() === 0 ? '00' : value.getSeconds() < 10 ? `0${value.getSeconds()}` : value.getSeconds()}</span>

          </div>
        </div>

        <div className="">
          <p>
            Your Own <code>Bookmarks</code> add your links
          </p>
          <div className="grid-group">
            {data.map((i, key) => (
              <b  key={key}>
                <Card name={i.name} img={i.logo} des="hello world" />

              </b>
            ))}

            <Card img={'./add.png'} className="add" title="add new" onClick={handleAdd} />

          </div>
        </div>
        <div id="myModal" className="modal" style={{ display: showAdd ? 'block' : 'none' }}>

          <div className="modal-content">
            <div className='add-modal'>

              <div><input type='text' placeholder='Link Name' /></div>
              <div><input type='text' placeholder='Link URL' /></div>
              <div>
                <label>Link logo:</label>
                <input type='file' /></div>
            </div>
            <button onClick={() => {
              add({ link: 'test', logo: 'https://i.ibb.co/c1XStxp/OIP-1-removebg-preview.png', name: 'test' }).then(() => {
                setData(linksList)

              })
              setShowAdd(false)
            }}><span ></span></button>

          </div>

        </div>
        <p className="read-the-docs">
          All Rights Reserved © 2024
        </p>
      </div>
    </div>
  );
}

export default App;
