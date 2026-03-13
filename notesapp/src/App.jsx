import { NotesProvider } from './context/NotesContext';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

function App() {
  return (
    <NotesProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded">
        <h1 className="text-2xl mb-4 font-bold">Notes App</h1>
        <AddNote />
        <NoteList />
      </div>
    </NotesProvider>
  );
}

export default App;