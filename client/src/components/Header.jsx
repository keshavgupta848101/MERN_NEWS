
import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles({
    header: {
        background: '#fff',
        height: 70
    },
    menu: {
        color: '#000',
        alignItems: "flex-start"
    },
    logoName: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        // height: 55,
        // margin: 'auto',
        // paddingRight: 70,
        color: 'red'
    }
})

const Header = () => {
    const classes = useStyles();
    // const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <AppBar className={classes.header}>
            {/* <Toolbar> */}
            <div className={classes.logoName}>
                <h2>Live News</h2>
            </div>
            {/* </Toolbar> */}
        </AppBar>
    )
}

export default Header;