import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
} from '@mui/material';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
    root: {},
    searchBox: {
        display: "flex"
    },
    searchButton: {
        marginLeft: "20px !important"
    },
}));

const SearchBar = ({ handlesearch }) => {
    const classes = useStyles();
    const [state, setState] = useState({
        searchKey: null
    })

    const handleChange = (event) => {
        setState({
            [event.target.name]: event.target.value
        })
    }

    const handleEnter = (event) => {
        if (event.key === "Enter" || event.key === "NumpadEnter") {
            if (state.searchKey?.trim() !== "") {
                handlesearch(state.searchKey.trim())
            }
            else {
                handlesearch(state.searchKey.trim())
            }
        }
    }

    return (
        <div
            className={classes.root}
        >
            <Box mt={0}>
                <Box maxWidth={305} className={classes.searchBox}>
                    <TextField
                        fullWidth
                        value={state.searchKey}
                        name="searchKey"
                        onChange={handleChange}
                        onKeyPress={handleEnter}
                        autoComplete="off"
                        size="small"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SvgIcon
                                        fontSize="small"
                                        color="action"
                                    >
                                        <SearchIcon />
                                    </SvgIcon>
                                </InputAdornment>
                            )
                        }}
                        placeholder="Search"
                        variant="outlined"
                    />
                    <Button className={classes.searchButton} onClick={() => handlesearch(state.searchKey?.trim())}>
                        Search
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default SearchBar;