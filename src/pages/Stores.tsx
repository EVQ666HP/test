import React from 'react';
import { useSelector } from 'react-redux';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import TableRow from '../components/TableRow';
import { RootState } from '../redux/store';

const Stores: React.FC = () => {
  const [modalWindowStatus, setModalWindow] = React.useState(false);
  const [modalWindowType, setModalWindowType] = React.useState('');
  const state = useSelector((state: RootState) => {
    return state.shopsSlice.items;
  });

  const createModalWindow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setModalWindow(true);
    setModalWindowType('create');
  };

  return (
    <>
      <div
        onClick={(e) => createModalWindow(e)}
        className="flex justify-center items-center w-48 h-9 mb-9 bg-green-400 rounded-sm text-white text-xs cursor-pointer"
      >
        <p className="text-xl font-bold mr-3">+</p>
        <p>Создать свой магазин</p>
      </div>
      <h1 className="text-xl font-medium mb-6">Управление магазинами</h1>
      <div className="w-[1000px] rounded-sm h-96 max-h-96 overflow-auto p-7 bg-white">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="tracking-wider border-b border-zinc-300">
            <tr className="h-20">
              <th className="w-32">№</th>
              <th className="w-56">Название</th>
              <th className="w-80">Адрес</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {state.map((el, indx) => (
              <TableRow key={indx} {...el} indx={indx} />
            ))}
          </tbody>
        </table>
      </div>
      {modalWindowStatus && (
        <ModalWindow
          modalWindowStatus={modalWindowStatus}
          setModalWindow={setModalWindow}
          type={modalWindowType}
        />
      )}
    </>
  );
};

export default Stores;
