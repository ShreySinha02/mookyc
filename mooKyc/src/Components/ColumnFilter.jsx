import React from 'react'

// import { InputBase } from '@mui/material'
// import {Fade} from '@mui/material'
// import makeStyles from '@mui/material'
import PropTypes from 'prop-types'

// import SearchIcon from '@material-ui/icons/Search'




// const useStyles = makeStyles(theme => ({
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: Fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: Fade(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     width: theme.spacing(7),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding:"1px",
//     position:"relative",
//     right:"30px",
//     // transition: theme.transitions.create('width'),
//     border:"1px solid #dddddd",
//     borderRadius:"5px",
//     width: '55px',
//     // [theme.breakpoints.up('md')]: {
//     //   width: 200,
//     // },
//   },
// }))

const ColumnFilter = ({
    column
  }) => {
    const classes = useStyles()
    const{filterValue,setFilter} = column;

    return (
        <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
                <SearchIcon  />
            </div> */}
            <InputBase
                value={filterValue || ''}
                onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
                }}
                placeholder={`filter...`}
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    )
}

export default ColumnFilter;
