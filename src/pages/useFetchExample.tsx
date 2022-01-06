import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 10px;
`

type Person = {
  name: string,
  height: string,
} | null;

const useFetch = (url: string, options: RequestInit) => {
  const [response, setResponse] = useState<Person>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try { 
        const res = await fetch(url, options)
        const json = await res.json();
        setResponse(json);
      } catch(error: any) {
        setError(error);
      }
    }
    fetchData();
  }, [])

  return  { response, error };
};


export const useFetchExample: React.VFC = () => {
  const { response } = useFetch('https://swapi.py4e.com/api/people/1/', {});
  if(!response){
    return <div>Loading...</div>
  }
  return (
    <Wrapper>
      {response.name }
    </Wrapper>
  );
};
