import React from 'react';

const Blog = () => {
    const questions = [
        {
            id: 1,
            question: 'When should you use context API?',
            answer: 'Context is primarily used when some data needs to be accessible by many components at different nesting levels.'
        },
        {
            id: 2,
            question: 'What is a custom hook?',
            answer: 'A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks.'
        },
        {
            id: 3,
            question: 'What is useRef?',
            answer: 'useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.'
        },
        {
            id: 4,
            question: 'What is useMemo?',
            answer: 'useMemo is a React Hook that lets you cache the result of a calculation between re-renders.'
        }
    ]
    return (
        <div className='flex flex-col w-1/2 justify-center gap-3 mx-auto py-24'>
            {
                questions.map(q => {
                    return (
                        <div className='p-5'>
                            <p className='text-xl font-semibold my-2'>{q.question}</p>
                            <p>{q.answer}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    );
};

export default Blog;