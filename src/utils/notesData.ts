export const getNotes = (lectureId: number) => {
  return localStorage.getItem(JSON.stringify(lectureId));
}

export const setNotes = (lectureId: number, newNote: string) => {
  return localStorage.setItem(JSON.stringify(lectureId), JSON.stringify(newNote));
};