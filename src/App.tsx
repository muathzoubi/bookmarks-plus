import { useEffect, useState } from 'react';
import './App.css';
import Card from './card';


const linksList = [

  {
    link: 'https://www.canva.com/',
    name: 'Canva',
  },
  {
    link: 'https://stackblitz.com/',
    name: 'StackBlitz',
  },
  {
    link: 'https://vercel.com/',
    name: 'Vercel',
  },
  {
    link: 'https://github.com/',
    name: 'Github',
  },
  {
    link: 'https://fonts.google.com/',
    name: 'Google Fonts',
  },

  {
    link: 'https://codesandbox.io/',
    name: 'Codesandbox',
  }, {
    link: 'https://tldraw.dev/',
    name: 'tldraw',
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
  const [values, setValues] = useState({ link: '', logo: '', name: '' });


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
    linksList.push(datavalue)
  }
  useEffect(() => {
    setData(linksList)
  }, [linksList])
  return (
    <div className="appMain"  >
      <div className="app">
        <h1>
          Bookmarks <span className="plus">Plus</span>
        </h1>
        <div id="clock">
          <div className='date time'>
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
              <a key={key} href={i.link}>
                <Card name={i.name} img={`https://logo.clearbit.com/${i.link}`} />
              </a>
            ))}
            <Card img={'./add.png'} className="add" title="add new" onClick={handleAdd} />
          </div>
        </div>
        <div id="myModal" className="modal" style={{ display: showAdd ? 'block' : 'none' }}>
          <div className="modal-content">
            <div className='add-modal'>
              <strong className='plus'>
                Add shortcut
              </strong>
              <div>
                <label htmlFor="Link">Name</label><input type='text' onChange={
                  (e) => setValues({ ...values, name: e.target.value })} />
              </div>
              <div>
                <label htmlFor="Link">URL</label><input type='text' onChange={
                  (e) => setValues({ ...values, link: e.target.value })} />
              </div>
            </div>
            <button onClick={() => {
              let logolink = `https://logo.clearbit.com/${values.link}`
              add({ link: values.link, logo: logolink, name: values.name }).then(() => {
                setData(linksList)
              })
              setShowAdd(false)
            }}><span >OK</span></button>
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
