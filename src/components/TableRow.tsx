import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/Slice/shopsSlice';
import { tableRowInteface } from '../typescript/interface';
import ModalWindowEdit from './ModalWindow/ModalWindowEdit';
import EditIcon from './Icons/EditIcon';
import DeleteIcon from './Icons/DeleteIcon';
const TableRow: React.FC<tableRowInteface> = ({ name, address, indx }) => {
  const dispath = useDispatch();
  const [modalWindowStatus, setModalWindow] = React.useState(false);

  const deleteItemFunc = () => {
    dispath(deleteItem(indx));
  };

  const editModalWindow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setModalWindow(true);
  };

  return (
    <tr className="border-b border-zinc-300 h-20">
      <th scope="row" className="">
        {indx + 1}
      </th>
      <td className="">{name}</td>
      <td className="">{address}</td>
      <td className="flex justify-end">
        <div
          onClick={(e) => editModalWindow(e)}
          className="my-5 flex justify-center items-center w-36 h-9 bg-green-400 rounded-sm text-white text-xs cursor-pointer mr-5"
        >
          <EditIcon />
          Редактировать
        </div>
        {modalWindowStatus && (
          <ModalWindowEdit
            name={name}
            address={address}
            indx={indx}
            setModalWindow={setModalWindow}
            modalWindowStatus={modalWindowStatus}
          />
        )}
        <div
          onClick={() => deleteItemFunc()}
          className="my-5 flex justify-center items-center w-36 h-9 bg-zinc-400 rounded-sm text-white text-xs cursor-pointer"
        >
          <DeleteIcon />
          Удалить
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
