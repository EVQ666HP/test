import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/Slice/shopsSlice';
import { ModalWindowProps } from '../../typescript/interface';
import WarningIcon from '../Icons/WarningIcon';
import CancelIcon from '../Icons/CancelIcon';

const ModalWindow: React.FC<ModalWindowProps> = ({ setModalWindow, modalWindowStatus, type }) => {
  const dispatch = useDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');

  const addItemFunc = () => {
    dispatch(addItem({ name, address }));
    setModalWindow(false);
  };

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setModalWindow(false);
    }
  };

  React.useEffect(() => {
    if (modalWindowStatus) {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [modalWindowStatus]);

  return (
    <div
      ref={ref}
      className="absolute w-[616px] top-[30%] left-1/4 px-4 py-8 bg-white rounded-md shadow-[0_2px_10px_1px_rgba(0,0,0,0.2)]"
    >
      <div className="flex justify-between">
        <h2 className="mb-5 text-neutral-700 text-xl font-medium">Создать магазин</h2>
        <div onClick={() => setModalWindow(false)}>
          <CancelIcon />
        </div>
      </div>

      <div className="flex justify-between mb-5">
        <div>
          <p className="text-neutral-700 text-sm font-medium  mb-1">Название</p>
          <input
            className="w-72 h-9 border-2 rounded-md border-zinc-300 px-4 py-1"
            type="text"
            placeholder="Название"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-neutral-700 text-sm font-medium mb-1">Адрес</p>
          <input
            className="w-72 h-9 border-2 rounded-md border-zinc-300 px-4 py-1"
            type="text"
            placeholder="Адрес"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <div className="flex mb-6">
        <WarningIcon />
        <span className="max-w-lg text-zinc-500 text-xs font-medium">
          В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work
          5. После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru).
          Подробнее по
          <a className="text-indigo-500" href="#">
            ссылке
          </a>
        </span>
      </div>

      <div className="flex">
        <div
          onClick={() => setModalWindow(false)}
          className="my-5 flex justify-center items-center w-36 h-9 bg-zinc-400 rounded-sm text-white text-xs cursor-pointer mr-3"
        >
          Отмена
        </div>
        <div
          onClick={() => addItemFunc()}
          className="my-5 flex justify-center items-center w-36 h-9 bg-green-400 rounded-sm text-white text-xs cursor-pointer mr-5"
        >
          Создать
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
