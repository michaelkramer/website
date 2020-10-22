import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { Typography } from "antd";
import axios from "axios";
import { withStyles } from "../Common/Theme";

const EslintFacepalm = ({ classes }) => {
    const [cardData, setCardData] = useState("");

    const readFile = (file: string) => {
        if (cardData.length) {
            return setCardData("");
        }
        return axios.get(file).then((response: any) => setCardData(response.data));
    }

    useEffect(() => {
        readFile(
            "https://raw.githubusercontent.com/michaelkramer/eslint-plugin-facepalm/master/README.md"
        );

        return () => {

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return cardData && (
        <Typography className={classes.cardData}>
            <ReactMarkdown source={cardData} />
        </Typography>
    );
};

const style = (theme?: any) => ({
    root: {
        padding: `0 ${theme.spacing * 2}px ${theme.spacing}px ${theme.spacing * 2
            }px`,
        width: "80vw",
        textAlign: "center",
    },
    card: {
        width: "300px",
        paddingTop: theme.spacing * 2,
    },
    meta: {
        textAlign: "left",
    },
    cardData: {
        marginTop: theme.spacing * 2,
        textAlign: "left",
        border: theme.border,
        padding: theme.spacing * 2,
    },
});

export default withStyles(style)(EslintFacepalm);