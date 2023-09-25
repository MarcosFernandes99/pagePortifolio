import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import iconMenu from "../Assets/iconMenu.png"

interface menuSelectedProps {
  onClick: (e: any) => void
}
const MenuSelected: React.FC<menuSelectedProps> = ({onClick}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='divButton'>
      <Button
        id="basic-button"
        className='buttonMenu'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      >
        <img src={iconMenu} alt="IconMenu" height="50" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { handleClose(); onClick("projects"); }}>Projetos</MenuItem>
        <MenuItem onClick={() => { handleClose(); onClick("about"); }}>Sobre</MenuItem>
        <MenuItem onClick={() => { handleClose(); onClick("contact"); }}>Fale comigo</MenuItem>

      </Menu>
    </div>
  );
}

export default MenuSelected