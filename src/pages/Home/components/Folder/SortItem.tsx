import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function SortItem() {
  const [sort, setSort] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

    return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: 150,color: '#6965E1' }}>
        <InputLabel sx={{textTransform: 'uppercase', color: '#6965E1' }} id="demo-simple-select-standard-label">sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={handleChange}
          label="sort"
          sx={{textTransform: 'uppercase', color: '#6965E1' }}
        >
          <MenuItem sx={{textTransform: 'uppercase', color: '#6965E1' }} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem sx={{textTransform: 'uppercase', color: '#6965E1' }} value={10}>sort by data</MenuItem>
          <MenuItem sx={{textTransform: 'uppercase', color: '#6965E1' }} value={20}>sort by name</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
