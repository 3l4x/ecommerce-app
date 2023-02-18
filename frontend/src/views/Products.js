import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import ListItem from '@mui/material/ListItem';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
        '.MuiList-root': {
          ...(!open && {

            filter: 'blur(1px)',
          })
        }
      }),
    },
  }),
);


function DashboardContent() {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', margin: 0 }}>
        <Drawer
          variant="permanent"
          open={open}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Categories
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemText primary="Category 1" />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem key={2} sx={{ pl: 4 }}>
                <ListItemText primary="Subcategory 1" />
              </ListItem>
              <ListItem key={1} sx={{ pl: 4 }}>
                <ListItemText primary="Subcategory 2" />
              </ListItem>
              <ListItem key={3} sx={{ pl: 4 }}>
                <ListItemText primary="Subcategory 3" />
              </ListItem>
            </List>

          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            /*             backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900], */
            flexGrow: 1,
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 0, mb: 0 }}>
            <Paper sx={{ p: 1 }}>
                Category > Subcategory > Subcategory
            </Paper>
          </Container>
          <Container maxWidth="xl" sx={{ mt: 1, mb: 4, paddingY: 10 }}>
            {/* Recent Orders */}

            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
              <Grid container spacing={4}>
                {cards.map((card, i) => {
                  return (
                    <React.Fragment>
                      <Grid item key={card} xs={12} sm={6} md={3} >
                        <Card
                          sx={{ border: '1px solid white', height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                          />
                          <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                              Heading
                            </Typography>
                            <Typography>
                              This is a media card. You can use this section to describe the
                              content.
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">View</Button>
                            <Button size="small">Edit</Button>
                          </CardActions>
                        </Card>
                      </Grid>
                      {
                        ((i + 1) % 4 === 0) &&
                        <Grid item xs={12}>
                          <Divider orientation="horizontal" flexItem />
                        </Grid>
                      }
                    </React.Fragment>
                  )
                })}
              </Grid>
            </Paper>
          </Container>
        </Box>


      </Box>
    </React.Fragment>
  );
}

export default function Products() {
  return <DashboardContent />;
}