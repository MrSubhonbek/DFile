import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface IList {
    primary: string
}

interface IProps {
    lists: Array<IList>
}

export function NestedList(props:IProps) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const Lists = props.lists.map((element)=>{
        return (
            <ListItemButton sx={{ pl: 4, color: '#6965E1' }}>
                        <ListItemText primary={element.primary} />
                    </ListItemButton>
        );
    })

    return (
        <List 
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton  onClick={handleClick}>
                {open ? <ExpandLess sx={{ color: '#6965E1' }} /> : <ExpandMore sx={{ color: '#6965E1' }} />}
                <ListItemText sx={{ color: '#6965E1',font:"'Montserrat'", fontFamily: "'Montserrat', sans-serif" }} primary="DFILE STORAGE" />
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {Lists}
                </List>
            </Collapse>
        </List>
    );
}


