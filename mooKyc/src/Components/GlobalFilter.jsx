import React from 'react'

import  InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
// import SearchI

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    border:"1px solid #dddddd",
    borderRadius:"5px",
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))

const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) => {
    const classes = useStyles()
    const count = preGlobalFilteredRows.length

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                {/* <SearchIcon  /> */}search
            </div>
            <InputBase
                value={globalFilter || ''}
                onChange={e => {
                setGlobalFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`${count} records...`}
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

export default GlobalFilter
