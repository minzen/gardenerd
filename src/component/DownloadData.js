import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    downloadBox: {
        padding: 10,
    },
    downloadText: {
        padding: 5
    }
})

const DownloadData = (props) => {

    const gardenItems = useState(props.data)
    const classes = useStyles()

    const handleDownload = () => {
        console.log('Handle download', gardenItems)
        const fileData = JSON.stringify(gardenItems)
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'gardenitems.json';
        link.href = url;
        link.click();
    }

    return (
        <div className={classes.downloadBox}>
            <div className={classes.downloadText}>You can download your data as a single JSON file.</div>
            <Button variant="contained" color="primary" onClick={handleDownload}>Download</Button>
        </div>
    )
}
export default DownloadData