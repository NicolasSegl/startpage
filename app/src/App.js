import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="main"
          style={{
            display: 'flex',
          }}
        >
          <img src="flowers.jfif" height="500" />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}
          >
            <div>
              <b className="header">afledninger</b>
              <div>
                <a href="https://www.reddit.com">reddit</a>
                <a href="https://www.4chan.org/wg/">/wg/</a>
                <a href="https://www.youtube.com">youtube</a>
                <a href="https://www.netflix.com">netflix</a>
              </div>
            </div>

            <div>
              <b className="header">skole</b>
              <div>
                <a href="https://www.gitlab.com">gitlab</a>
                <a href="https://outlook.office.com/mail/?realm=uwo.ca&login_hint=nsegleni@uwo.ca">outlook</a>
                <a href="https://westernu.brightspace.com/d2l/home">brightspace</a> 
                <a href="https://www.gradescope.ca/">gradescope</a>
              </div>
            </div>

            <div>
              <b className="header">dev</b>
              <div>
                <a href="https://github.com/Calefy-Inc">github/calefy</a>
                <a href="https://github.com/NicolasSegl">github/NicolasSegl</a>
              </div>
            </div>

            <div>
              <b className="header">blandet</b>
              <div>
                <a href="https://mail.google.com/mail/u/0/#inbox">gmail</a>
                <a href="https://drive.google.com/drive/u/0/">gdrive</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
