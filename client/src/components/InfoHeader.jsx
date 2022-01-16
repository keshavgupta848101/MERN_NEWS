
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        background: '#f44336',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        height: 48,
        marginBottom: 30,
        [theme.breakpoints.down('md')]: {
            height: 80,
            borderRadius: "2px"
            // display: 'none'
        }
    },
    button: {
        height: 34,
        border: "none",
        width: "60px",
        background: "black",
        color: "white",
        border: "2px solid gray",
        '&:last-child': {
            margin: '0 50px 0 20px'
        },
        fontFamily: "sans-serif",
        [theme.breakpoints.down('md')]: {
            margin: "5px",
            // padding: "5px",

            '&:first-child': {
                margin: '0 0px 5px 0px',
                color: 'white',
                width: "58px",

            },
            '&:last-child': {
                margin: '0 0px 0 0px',
                color: 'white',
                width: "58px",

            }
        },

    },
    text: {
        fontSize: 14,
        fontWeight: 300,
        marginLeft: 50,
        fontFamily: "'Roboto',sans-serif",
    }

}))

const InfoHeader = () => {
    const classes = useStyles();
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    const darkTheme = () => {
        document.body.style.backgroundColor = "black";
    }

    const lightTheme = () => {
        document.body.style.backgroundColor = "white";
    }

    return (
        <Box className={classes.container}>
            <Typography className={classes.text}>
                For the best experience use <b>Live News</b> app on your smartphone
            </Typography>
            <Box style={{ marginLeft: 'auto' }}>
                <button className={classes.button} onClick={darkTheme}>Dark &#9789;</button>
                <button className={classes.button} onClick={lightTheme}>Light&#9728;</button>
                {/* <img src={appleStore} alt="apple store"  />
                <img src={googleStore} alt="google store" className={classes.logo} /> */}
            </Box>
        </Box>
    )
}

export default InfoHeader;