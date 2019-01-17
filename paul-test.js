const data = [
  {
    _id: "5c3efb6280df51427cc620d0",
    location: "abcderrrrrrrrr",
    work_description: "aaaazzzz",
    date_of_commencement: "2019-01-01T09:37:00.000Z",
    date_of_completion: "2019-01-02T09:37:00.000Z",
    status_of_work: "aaazzzz",
    date: "2019-01-16T09:37:38.286Z",
    createdAt: "2019-01-16T09:37:38.286Z",
    updatedAt: "2019-01-16T16:46:35.168Z",
    __v: 0
  },
  {
    _id: "5c3efb0880df51427cc620cf",
    location: "daf",
    work_description: "fsf",
    date_of_commencement: "2019-01-16T09:29:18.323Z",
    date_of_completion: "2019-01-16T09:29:18.323Z",
    status_of_work: "aa",
    date: "2019-01-16T09:36:08.139Z",
    createdAt: "2019-01-16T09:36:08.139Z",
    updatedAt: "2019-01-16T09:36:08.139Z",
    __v: 0
  },
  {
    _id: "5c3ef84c80df51427cc620ce",
    location: "eeee",
    work_description: "eee",
    date_of_commencement: "2019-01-16T09:24:22.189Z",
    date_of_completion: "2019-01-16T09:24:22.189Z",
    status_of_work: "eee",
    date: "2019-01-16T09:24:28.853Z",
    createdAt: "2019-01-16T09:24:28.853Z",
    updatedAt: "2019-01-16T09:24:28.853Z",
    __v: 0
  }
];

makeArrFromObj = obj => obj.map(i => i.location);

console.log(makeArrFromObj(data));
