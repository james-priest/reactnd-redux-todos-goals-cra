import React from 'react';

export default function List(props) {
  return (
    <ol>
      {props.items.map(item => (
        <li key={item.id}>
          {props.toggle ? (
            <span>
              <input
                type="checkbox"
                id={item.id}
                onClick={() => props.toggle && props.toggle(item.id)}
                readOnly // required for uncontrolled component
                checked={item.complete ? 'checked' : ''}
              />
              <label
                htmlFor={item.id}
                style={{
                  textDecoration: item.complete ? 'line-through' : 'none'
                }}
              >
                {item.name}
              </label>
            </span>
          ) : (
            <span
              onClick={() => props.toggle && props.toggle(item.id)}
              style={{
                textDecoration: item.complete ? 'line-through' : 'none'
              }}
            >
              {item.name}
            </span>
          )}
          <button className="removeBtn" onClick={() => props.remove(item)}>
            X
          </button>
        </li>
      ))}
    </ol>
  );
}
