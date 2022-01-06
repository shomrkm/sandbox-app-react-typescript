import React, { useState, useEffect, useCallback, useReducer } from 'react';

interface Props {}

export const useEffectExample: React.VFC<Props> = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="react-sandbox">
      <h1>React Sandbox</h1>
      <input value={step} onChange={(e) => setStep(Number(e.target.value))} />
      <Counter step={step} />
    </div>
  );
};

const Counter = ({ step }: { step: number }) => {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'tick':
        return state + step;
      default:
        throw new Error();
    }
  }

  useEffect(() => {
    console.log('useEffect update'); // 1回しか呼ばれない
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      <p>{count}</p>
    </>
  );
};
