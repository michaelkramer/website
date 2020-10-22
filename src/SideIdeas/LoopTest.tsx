import React, { useState } from 'react';
import { Button, Row, Col, Input, Typography } from "antd"
import _ from "lodash"


import { withStyles } from "../Common/Theme";
import { RowProps } from 'antd/lib/row';

const LoopTest = ({ classes }) => {
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

    const rowProps: RowProps = { gutter: [16, 16] };

    return (
        <Typography className={classes.cardData}>
            <h1>Loop Test</h1>
            <ol>
                <li>
                    <Row {...rowProps}>
                        <Col span={8}>
                            <label>Number In Array: </label>
                        </Col>
                        <Col span={16}>
                            <Input type="number" value={numberOf} onChange={(e) => setNumberOf(parseInt(e.target.value))} />
                        </Col>
                    </Row>
                    <div><Button onClick={() => fillArrays()}>Fill 2 arrays</Button>
                        <div><label>Array 1</label><pre>{JSON.stringify(array1)}</pre></div>
                        <div><label>Array 2</label><pre>{JSON.stringify(array2)}</pre></div>
                    </div>
                </li>
                <li>
                    <Row {...rowProps}>
                        <Col span={6}>
                            <label>Number Returned: </label></Col><Col span={18}><Input type="number" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} />
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row {...rowProps}>
                        <Col span={12}>
                            <label>Loop Test 1: </label>
                            <div>
                                <Button onClick={() => triggerTest1()}>Trigger Test</Button>
                                <div><label>Result</label><pre>{JSON.stringify(resultTest1)}</pre></div>
                                <div><label>Time</label>took {result1Performance} milliseconds</div>

                            </div>
                        </Col>
                        <Col span={12}>
                            <div>Using a lodash functions</div>
                            <pre className={classes.code}>function fetch(array1: number[], array2: number[], limit: number) {'{\n'}
                                {'\t'}const newArr = _.uniq([...array1, ...array2]);{'\n'}
                                {'\t'}const sortArr = _.orderBy(newArr);{'\n'}
                                {'\t'}return _.take(sortArr, limit);{'\n'}
                                {'}\n'}</pre>
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row {...rowProps}>
                        <Col span={12}>
                            <label>Loop Test 2: </label>
                            <div>
                                <Button onClick={() => triggerTest2()}>Trigger Test</Button>
                                <div><label>Result</label><pre>{JSON.stringify(resultTest2)}</pre></div>
                                <div><label>Time</label>took {result2Performance} milliseconds</div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>Using a double for loop</div>
                            <pre className={classes.code}>function fetch(array1: number[], array2: number[], limit: number) {'{\n'}
                                {'\t'}const newArr: number[] = [];{'\n'}
                                {'\t'}for (let i: number = 0; i {'<'} array1.length; {'{\n'}
                                {'\t\t'}for (let a: number = 0; a {'<'} array2.length; {'{\n'}
                                {'\t\t\t'}const current = array1[i] {'>'} array2[a] ? array2[a] : array1[i];{'\n'}
                                {'\t\t\t'}if (!newArr.includes(current)) {'{\n'}
                                {'\t\t\t\t'}newArr.push(current);{'\n'}
                                {'\t\t\t'}{'}\n'}
                                {'\t\t}\n'}
                                {'\t\t'}if (newArr.length === limit) {'{\n'}
                                {'\t\t\t'}break;{'\n'}
                                {'\t\t'}{'}\n'}
                                {'\t'}{'}\n'}
                                {'\t'}return newArr;{'\n'}
                                {'}'}
                            </pre>
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row {...rowProps}>
                        <Col span={12}>
                            <label>Loop Test 3: </label>
                            <div>
                                <Button onClick={() => triggerTest3()}>Trigger Test</Button>
                                <div><label>Result</label><pre>{JSON.stringify(resultTest3)}</pre></div>
                                <div><label>Time</label>took {result3Performance} milliseconds</div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div>Using a Math.min</div>
                            <pre className={classes.code}>function fetch(array1: number[], array2: number[], limit: number) {'{\n'}
                                {'\t'}const newArr = _.uniq([...array1, ...array2]);{'\n'}
                                {'\t'}const tempArray = [];{'\n'}
                                {'\t'}for (let i = 0; i {'<'} limit; i++) {'{\n'}
                                {'\t'}{'\t'}const smallest = Math.min.apply(Math, newArr);{'\n'}
                                {'\t'}{'\t'}tempArray.push(smallest);{'\n'}
                                {'\t'}{'\t'}const idx = newArr.indexOf(smallest);{'\n'}
                                {'\t'}{'\t'}newArr.splice(idx, 1);{'\n'}
                                {'\t}\n'}
                                {'\t'}return tempArray;{'\n'}
                                {'}\n'}</pre>
                        </Col>
                    </Row>
                </li>
            </ol>
        </Typography>
    );
};

const style = (theme?: any) => ({
    root: {
        textAlign: "left",
        "& li": {
            borderBottom: "1px solid #ccc",
            padding: `${theme.spacing}px 0`,
            marginBottom: theme.spacing
        },
        "& label": {
            textAlign: "right"
        }
    },
    code: {
        fontFamily: "monospace",
        backgroundColor: "#efefef",
        padding: theme.spacing,
        maxHeight: "150px",
        overflowY: "scroll",
    },
    cardData: {
        marginTop: theme.spacing * 2,
        textAlign: "left",
        border: theme.border,
        padding: theme.spacing * 2,
    },
});

export default withStyles(style)(LoopTest);


function returnSmallestOfBothArrays(array1: number[], array2: number[], limit: number) {
    const newArr = _.uniq([...array1, ...array2]);
    const sortArr = _.orderBy(newArr);
    return _.take(sortArr, limit);
}

function returnSmallestOfBothArrays2(array1: number[], array2: number[], limit: number) {
    //assume the arrays are already sorted
    const newArr: number[] = [];
    for (let i: number = 0; i < array1.length; i++) {
        for (let a: number = 0; a < array2.length; a++) {
            const current = array1[i] > array2[a] ? array2[a] : array1[i];
            if (!newArr.includes(current)) {
                newArr.push(current);
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
