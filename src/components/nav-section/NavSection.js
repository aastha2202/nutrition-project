import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};



export default function NavSection({ data = [],  ...other }) {
  const userId=1
 


  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
      {data.map((item) => {
          if (item?.id === userId) {
            return <NavItem key={item.title} item={item} />;
          }
        
          return null;
        })}
          
        
      </List>
    </Box>
    
    
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}









