import * as React from 'react';

export interface ItoDoItem {
  id: number;
  name: string;
  description: string;
}

const allToDo: ItoDoItem[] = [
  { id: 0, name: 'Yoga', description: 'Tomorow at noone' },
  { id: 1, name: 'Client Meet', description: 'Prepare furniture list' },
  { id: 2, name: 'Call Mom', description: '' },
  { id: 3, name: 'Shopping', description: 'Prepare shopping list' },
];

export const ToDoList: React.FC = () => {
  const [toDoList, setToDoList] = React.useState<ItoDoItem[]>([]);
  const [dataLoaded, setDataLoaded] = React.useState<boolean>(false);

  const getDataFromAPI = async () => {
    let timeoutId: NodeJS.Timeout;

    const toDoListFromAPI = await new Promise<ItoDoItem[]>((resolve) => {
      timeoutId = setTimeout(() => {
        resolve(allToDo);
      }, 2000);
    }).then((allToDo) => {
      clearTimeout(timeoutId);
      return allToDo;
    });

    setToDoList(toDoListFromAPI);
    setDataLoaded(true);
  };

  React.useEffect(() => {
    console.log('Effect');

    if (!dataLoaded) {
      console.log('Retrieve data');
      getDataFromAPI();
    }
  }, []);

  const mapToDoItem = (toDoItem: ItoDoItem) => {
    return toDoItem.name + ' ==> ' + toDoItem.description;
  };

  const onDelete = (index: number) => {
    const newToDoList = toDoList.filter((item, i) => index !== i);
    setToDoList(newToDoList);
  };

  return (
    <div>
      {toDoList.map((item, key) => (
        <div className='card' key={key}>
          <div className={`card-body ${key % 2 ? 'bg-info' : 'bg-secondary'}`}>
            <div className='row'>
              <div className='col-md-10'>{mapToDoItem(item)}</div>
              <div className='col-md-1'>
                <button
                  type='button'
                  onClick={() => onDelete(key)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
