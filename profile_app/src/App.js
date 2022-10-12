
import Profile from './profile/Profile';
function App() {
  const info={
    fullName:"souad hamdi",
    profession:"QA eng",
    bio:"hello world"
  }
  const handleName = (e) => {
    alert(e);
}
  return (
    <div>
       <Profile info={info} handleName={handleName}/>
    </div>
  );
}

export default App;
