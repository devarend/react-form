import React, { useCallback, useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import { FieldValue } from "./types";

const fieldValues: FieldValue[] = [
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

  const onChange = useCallback(
    (value: string, fieldIndex: number, index: number) => {
      const newValues = [...values];
      const currentItem = newValues[index].fields[fieldIndex];
      currentItem.value = value;

      if (!("edited" in currentItem)) {
        currentItem.edited = true;
      }

      setValues(newValues);
    },
    []
  );

  const onSubmit = () => {
    console.log("ALL VALUES: ", values);
  };

  return (
    <div className="App">
      <h1>React form</h1>
      <header className="Form">
        {values.map(({ id, fields }, index) =>
          fields.map(({ name, value }, fieldIndex) => (
            <div className="Form-Input">
              <TextInput
                key={`field-${index}-${fieldIndex}`}
                name={name}
                value={value}
                fieldIndex={fieldIndex}
                index={index}
                onChange={onChange}
              />
            </div>
          ))
        )}
        <button type="button" onClick={onSubmit}>
          Send
        </button>
      </header>
    </div>
  );
};

export default App;
