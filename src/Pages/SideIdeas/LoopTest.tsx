import React, { useState } from 'react';
import _ from "lodash"
import { Typography, Input, Button, Grid, Divider, styled } from '@mui/material';
import { StyledProps } from '../../Types';

const PreStyled = styled("pre")(({ theme }: StyledProps) => ({
  padding: theme.spacing(2),
  maxHeight: '150px',
  overflowY: 'auto',
  fontFamily: 'monospace',
  backgroundColor: '#efefef',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2]
}));


export const LoopTest = () => {
  const [array1, setArray1] = useState<number[]>([]);
  const [array2, setArray2] = useState<number[]>([]);
  const [numberOf, setNumberOf] = useState<number>(10);
  const [limit, setLimit] = useState<number>(1);

  const [resultTest1, setResultTest1] = useState<number[]>([]);
  const [result1Performance, setResult1Performance] = useState<number>();
  const [resultTest2, setResultTest2] = useState<number[]>([]);
  const [result2Performance, setResult2Performance] = useState<number>();
  const [resultTest3, setResultTest3] = useState<number[]>([]);
  const [result3Performance, setResult3Performance] = useState<number>();

  const fillArray = (numberOf: number) => {
    const fill = [];
    for (let i = 0; i < numberOf; i++) {
      fill.push(Math.floor(Math.random() * (100 * (Math.random() + i))));
    }
    return _.orderBy(fill);
  }

  const fillArrays = () => {
    setArray1(fillArray(numberOf));
    setArray2(fillArray(numberOf));
  }

  const triggerTest1 = () => {
    const t0: number = performance.now();
    setResultTest1(returnSmallestOfBothArrays(array1, array2, limit));
    const t1: number = performance.now();
    setResult1Performance(t1 - t0);
  }

  const triggerTest2 = () => {
    const ta: number = performance.now();
    setResultTest2(returnSmallestOfBothArrays2(array1, array2, limit));
    const tb: number = performance.now();
    setResult2Performance(tb - ta);
  }

  const triggerTest3 = () => {
    const ta: number = performance.now();
    setResultTest3(returnSmallestOfBothArrays3(array1, array2, limit));
    const tb: number = performance.now();
    setResult3Performance(tb - ta);
  }

  const rowProps = { gutter: [16, 16] };

  return (
    <>
      <Typography variant="h3">Loop Test</Typography>
      <Typography variant="body1" mb={2}>Which loop is best to sorting and selecting the lowest numbers from 2 different Arrays.</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <label>Numbers In Array: </label>
          <Input type="number" value={numberOf} onChange={(e) => setNumberOf(parseInt(e.target.value))} />
        </Grid>
        <Grid item xs={4}>
          <label>Numbers Returned: </label>
          <Input type="number" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={() => fillArrays()}>Fill 2 arrays</Button>
        </Grid>
        <Grid item xs={6}>
          <label>Array 1</label>
          <pre>{JSON.stringify(array1)}</pre>
        </Grid>
        <Grid item xs={6}>
          <label>Array 2</label>
          <pre>{JSON.stringify(array2)}</pre>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Loop Test 1:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ alignSelf: "center" }}>
              <Button variant="contained" onClick={() => triggerTest1()}>Trigger Test</Button>
            </Grid>
            <Grid item xs={4}>
              <label>Result</label>
              <pre>{JSON.stringify(resultTest1)}</pre>
            </Grid>
            <Grid item xs={4}>
              <label>Time taken</label>
              <pre>{result1Performance} milliseconds</pre>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div>Using a lodash functions</div>
            <PreStyled>function fetch(array1: number[], array2: number[], limit: number) {'{\n'}
              {'\t'}const newArr = _.uniq([...array1, ...array2]);{'\n'}
              {'\t'}const sortArr = _.orderBy(newArr);{'\n'}
              {'\t'}return _.take(sortArr, limit);{'\n'}
              {'}\n'}</PreStyled>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Loop Test 2:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ alignSelf: "center" }}>
              <Button variant="contained" onClick={() => triggerTest2()}>Trigger Test</Button>
            </Grid>
            <Grid item xs={4}>
              <label>Result</label>
              <pre>{JSON.stringify(resultTest2)}</pre>
            </Grid>
            <Grid item xs={4}>
              <label>Time taken</label>
              <pre>{result2Performance} milliseconds</pre>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div>Using a double for loop</div>
            <PreStyled>function fetch(array1: number[], array2: number[], limit: number) {'{\n'}
              {'\t'}const newArr: number[] = [];{'\n'}
              {'\t'}for (let i: number = 0; i {'<'} array1.length; {'{\n'}
              {'\t\t'}for (let a: number = 0; a {'<'} array2.length; {'{\n'}
              {'\t\t\t'}const current = array1[i] {'>'} array2[a] ? array2[a] : array1[i];{'\n'}
              {'\t\t\t'}if (!newArr.includes(current)) {'{\n'}
              {'\t\t\t\t'}newArr.push(current);{'\n'}
              {'\t\t\t\t'}if (newArr.length === limit) {'{\n'}
              {'\t\t\t\t\t'}break;{'\n'}
              {'\t\t\t\t'}{'}\n'}
              {'\t\t\t'}{'}\n'}
              {'\t\t}\n'}
              {'\t\t'}if (newArr.length === limit) {'{\n'}
              {'\t\t\t'}break;{'\n'}
              {'\t\t'}{'}\n'}
              {'\t'}{'}\n'}
              {'\t'}return newArr;{'\n'}
              {'}'}
            </PreStyled>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">Loop Test 3:</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ alignSelf: "center" }}>
              <Button variant="contained" onClick={() => triggerTest3()}>Trigger Test</Button>
            </Grid>
            <Grid item xs={4}>
              <label>Result</label>
              <pre>{JSON.stringify(resultTest3)}</pre>
            </Grid>
            <Grid item xs={4}>
              <label>Time taken</label>
              <pre>{result3Performance} milliseconds</pre>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div>Using a Math.min</div>
            <PreStyled>function fetch(array1: number[], array2: number[], limit: number) {'{\n'}
              {'\t'}const newArr = _.uniq([...array1, ...array2]);{'\n'}
              {'\t'}const tempArray = [];{'\n'}
              {'\t'}for (let i = 0; i {'<'} limit; i++) {'{\n'}
              {'\t'}{'\t'}const smallest = Math.min.apply(Math, newArr);{'\n'}
              {'\t'}{'\t'}tempArray.push(smallest);{'\n'}
              {'\t'}{'\t'}const idx = newArr.indexOf(smallest);{'\n'}
              {'\t'}{'\t'}newArr.splice(idx, 1);{'\n'}
              {'\t}\n'}
              {'\t'}return tempArray;{'\n'}
              {'}\n'}</PreStyled>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

function returnSmallestOfBothArrays(array1: number[], array2: number[], limit: number) {
  const newArr = _.uniq([...array1, ...array2]);
  const sortArr = _.orderBy(newArr);
  return _.take(sortArr, limit);
}

function returnSmallestOfBothArrays2(array1: number[], array2: number[], limit: number) {
  // assume the arrays are already sorted
  const newArr: number[] = [];
  for (let i: number = 0; i < array1.length; i++) {
    for (let a: number = 0; a < array2.length; a++) {
      const current = array1[i] > array2[a] ? array2[a] : array1[i];
      if (!newArr.includes(current)) {
        newArr.push(current);
        if (newArr.length === limit) {
          break;
        }
      }
    }
    if (newArr.length === limit) {
      break;
    }
  }
  return newArr;
}

function returnSmallestOfBothArrays3(array1: number[], array2: number[], limit: number) {
  const newArr = _.uniq([...array1, ...array2]);
  const tempArray = [];
  for (let i = 0; i < limit; i++) {
    const smallest = Math.min.apply(Math, newArr);
    tempArray.push(smallest);
    const idx = newArr.indexOf(smallest);
    newArr.splice(idx, 1);
  }
  return tempArray;
};
