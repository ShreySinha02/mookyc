import React from 'react'

import GlobalFilter from './GlobalFilter'

import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
// import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const useToolbarStyles = makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }))



const TableToolbar = (props) => {

    const classes = useToolbarStyles()
    const {
        
        
        preGlobalFilteredRows,
        setGlobalFilter,
        globalFilter,
       
    } = props

    return (
        <Toolbar>
          

            <Typography className={classes.title} >
              {/* Users */}
            </Typography>

            <GlobalFilter
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={globalFilter}
                      setGlobalFilter={setGlobalFilter}
                      className={'ms-1'}
                    />
        </Toolbar>
    )
}


TableToolbar.propTypes = {
    addTableHandler: PropTypes.func.isRequired,
    // deleteUserHandler: PropTypes.func.isRequired,
  }

export default TableToolbar
