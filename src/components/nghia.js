import React, { useState, useEffect } from 'react';

export default function Example() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');


    useEffect(() => {
        let text = `You clicked ${count} times`;
        setText(text);
        document.title = text;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}