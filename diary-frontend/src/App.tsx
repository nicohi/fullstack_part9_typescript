import { useState, useEffect } from "react";
import { NewDiaryEntry, NonSensitiveDiaryEntry, Weather, Visibility } from "./types";
import diaryService from './services/diaries';

const initialDiary:NewDiaryEntry = {
  date: '',
  weather: Weather.Windy,
  visibility: Visibility.Ok,
  comment: '',
};

const App = () => {
  const [diaries, setDiaries] = useState<NonSensitiveDiaryEntry[]>([]);
  const [newDiary, setNewDiary] = useState<NewDiaryEntry>(initialDiary);

  useEffect(() => {
    diaryService.getAll().then(data => {
      setDiaries(data);
    });
  }, []);

  const diaryCreation = (event: React.SyntheticEvent) => {
    event.preventDefault();
    diaryService.create(newDiary).then(data => {
      setDiaries(diaries.concat(data));
    });
    setNewDiary(initialDiary);
  };

  return (
    <div>
      <h1>Add new entry</h1>
      <form onSubmit={diaryCreation}>
        <div>date:<input value={newDiary.date} onChange={(event) => setNewDiary({ ...newDiary, date: event.target.value})} /></div>
        <div>weather:<input value={newDiary.weather} onChange={(event) => setNewDiary({ ...newDiary, weather: event.target.value as Weather})} /></div>
        <div>visibility:<input value={newDiary.visibility} onChange={(event) => setNewDiary({ ...newDiary, visibility: event.target.value as Visibility})} /></div>
        <div>comment:<input value={newDiary.comment} onChange={(event) => setNewDiary({ ...newDiary, comment: event.target.value})} /></div>
        <button type='submit'>add</button>
      </form>
      <h1>entries</h1>
      <ul>
        {diaries.map(diary =>
          <li key={diary.id}>
            <div>{diary.date}</div>
            <div>{diary.weather}</div>
            <div>{diary.visibility}</div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
