import { useState } from 'react';
import './App.css';
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
  return (
    <>
      <h1>
        Bookmarks <span className="plus">Plus</span>
      </h1>
      <div className="card">
        <button>Add +</button>
        <p>
          Your Own <code>Bookmarks</code> add your links
        </p>
        <div className="grid-group">
          {linksList.map((i, key) => (
            <a href={i.link}>
              <button key={key}>
                <img src={i.logo} className="logo" alt="Vite logo" />
                <span>{i.name}</span>
              </button>
            </a>
          ))}

          <button className="add" title="add new">
            <img src={'./add.png'} className="logo react" alt="React logo" />
          </button>
        </div>
      </div>
      <p className="read-the-docs">
      All Rights Reserved © 2024 
      </p>
    </>
  );
}

export default App;
