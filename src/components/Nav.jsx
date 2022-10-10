import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "./atomic/Button";
import SelectButton from "./atomic/SelectButton";
import PopUp from "./PopUp";
import EditPopUp from "./EditPopUp";

const options = [
  { value: 'all', label: 'All' },
  { value: 'complete', label: 'Complete' },
  { value: 'incomplete', label: 'Incomplete' },
];
export default function Nav({ setTodos, setFilter, todos }) {
  const [popUpvisible, setPopUpvisible] = useState(false);
  const [editPopUpvisible, setEditPopUpvisible] = useState(false);

  const handlePopUpOpen = () => {
    setPopUpvisible(true);
  };
  const handleEditPopUpOpen = () => {
    setEditPopUpvisible(true);
  };

  return (
    <div className="flex justify-between px-5 py-2.5 border-b-2 border-coffeeDark">
      <PopUp
        visible={popUpvisible}
        trigger={setPopUpvisible}
        setTodos={setTodos}
      />
      {todos?.length > 0 && (
        <EditPopUp
          todos={todos}
          visible={editPopUpvisible}
          trigger={setEditPopUpvisible}
          setTodos={setTodos}
        />
      )}
      <div className="w-[100%] flex justify-between align-middle">
        <div className="flex">
          <Button
            clickHandler={handlePopUpOpen}
            className="mt-[2px] mr-3 text-[8px] sm:text-[10px] lg:text-[16px]"
            title="Add task"
          />
          <Button
            clickHandler={handleEditPopUpOpen}
            className="mt-[2px] mr-3 text-[8px] sm:text-[10px] lg:text-[16px]"
            title="Update status"
          />
        </div>
        <SelectButton
          className="w-[90px] sm:w-[155px]"
          options={options}
          setFilter={setFilter}
          defaultValue={{ value: "all", label: "All" }}
          onChange={(newValue) => setFilter(newValue.value)}
          width="150px"
        />
      </div>
    </div>
  );
}

Nav.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  setTodos: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};
