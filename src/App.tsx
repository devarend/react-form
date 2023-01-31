import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";

const fieldValues = [
  {
    id: 1,
    fields: [
      {
        name: "first_name",
        value: "John",
        type: "text",
      },
      {
        name: "last_name",
        value: "Doe",
        type: "text",
      },
    ],
  },
];

const App = () => {
  const [values, setValues] = useState(fieldValues);

  const onChange = (value: string, fieldIndex: number, index: number) => {
    const newValues = [...values];
    const currentItem = newValues[index].fields[fieldIndex];
    currentItem.value = value;
    setValues(newValues);
  };

  return (
    <div className="App">
      <header className="App-header">
        {values.map(({ id, fields }, index) =>
          fields.map(({ name, value }, fieldIndex) => (
            <TextInput
              name={name}
              value={value}
              onChange={(event) =>
                onChange(event.target.value, fieldIndex, index)
              }
            />
          ))
        )}
      </header>
    </div>
  );
};

export default App;
