function Header() {
    return (<h1>Simple React Application</h1>);
  }
  
  function Content(props) {
    return (<p style={{color: props.color}}>{props.text}</p>);
  }
  
  function Footer() {
    return (<h1>Created by Me, of course.</h1>);
  }
  
  function App() {
    return (
      <>
        <Header />
        <Content color="magenta" text="This is my first React Application!  (NO IT ISN'T)" />
        <Content color="darkblue" text="Wish me luck... NO, SKILL AND HARD WORK OVER LUCK" />
        <Content color="darkgreen" text="I think I've got it! ... WELL, KINDA BUT NOT REALLY?" />
        <Footer />
      </>
    );
  }
  
  export default App;