import React from 'react'
import "../assets/SwipeButtons.css"
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { IconButton } from '@mui/material';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>

            <IconButton>
                <DesktopAccessDisabledIcon fontSize='large' className='swipeButtons__left' />
            </IconButton>

            <IconButton>
                <DesktopWindowsIcon fontSize='large' className='swipeButtons__right' />
            </IconButton>

        </div>
    )
}

export default SwipeButtons