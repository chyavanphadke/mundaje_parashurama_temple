import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import upiqr from '../assets/upi-qr-placeholder.png';

export default function UpiBlock({
  title,
  note,
  whyTitle,
  whyItems = [],
  usageTitle,
  usageItems = [],
  caption
}) {
  return (
    <Card
      sx={{
        overflow: 'hidden',
        border: '1px solid #E6D8B6',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(201,162,39,.06), rgba(255,255,255,1) 40%)'
      }}
    >
      <Box sx={{height:4, background:'linear-gradient(90deg,#C9A227 0 25%,#D97706 25% 50%,#7A1F1F 50% 75%,#C9A227 75% 100%)'}}/>
      <Grid container>
        {/* Left: QR + Bank details */}
        <Grid item xs={12} md={5} sx={{ borderRight: { md: '1px solid #E6D8B6' }, display:'flex', flexDirection:'column', alignItems:'center', p:{xs:2, md:3}, textAlign:'center' }}>
          <CardMedia component="img" image={upiqr} alt="UPI QR" loading="lazy"
            sx={{ width:'100%', maxWidth:320, borderRadius:2, border:'1px solid #E6D8B6', boxShadow:'0 8px 22px rgba(124,77,1,.12)' }} />
          {caption && <Typography variant="body2" sx={{ mt:1, color:'text.secondary' }}>{caption}</Typography>}
          <Divider sx={{ width:'80%', my:2 }}>or</Divider>
          <Box sx={{ border:'1px solid #E6D8B6', borderRadius:2, p:2, width:'100%', maxWidth:320, bgcolor:'#FFFBF5', textAlign:'left' }}>
            <Box sx={{ display:'flex', alignItems:'center', mb:1 }}>
              <AccountBalanceIcon sx={{ color:'primary.main', mr:1 }} />
              <Typography variant="subtitle2" sx={{ fontWeight:800 }}>Bank Transfer Details</Typography>
            </Box>
            <Typography variant="body2"><strong>Bank Name:</strong> Canara Bank</Typography>
            <Typography variant="body2"><strong>Account Name:</strong> Sri Sanyasikatte Parashurama Temple</Typography>
            <Typography variant="body2"><strong>Account Number:</strong> 123456789012</Typography>
            <Typography variant="body2"><strong>IFSC Code:</strong> CNRB0001234</Typography>
          </Box>
        </Grid>
        {/* Right: donation purpose and usage */}
        <Grid item xs={12} md={7}>
          <CardContent sx={{ p:{ xs:2, md:3 } }}>
            <Typography variant="h6" sx={{ fontWeight:900, mb:0.5 }}>{title}</Typography>
            {note && <Typography variant="body2" color="text.secondary" sx={{ mb:1.5 }}>{note}</Typography>}
            <Box sx={{ display:'flex', alignItems:'center', gap:1, mb:1 }}>
              <VolunteerActivismIcon sx={{ color:'primary.main' }} />
              <Typography variant="subtitle1" sx={{ fontWeight:800 }}>{whyTitle}</Typography>
            </Box>
            <List dense sx={{ pt:0, mt:0 }}>
              {(whyItems||[]).map((txt,i)=>(
                <ListItem key={i} sx={{ py:0.25 }}>
                  <ListItemIcon sx={{ minWidth:28 }}><CheckCircleOutlineIcon sx={{ fontSize:18, color:'gold.main' }} /></ListItemIcon>
                  <ListItemText primaryTypographyProps={{ variant:'body2' }} primary={txt} />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ my:1.5 }} />
            <Typography variant="subtitle1" sx={{ fontWeight:800, mb:0.5 }}>{usageTitle}</Typography>
            <List dense sx={{ pt:0, mt:0 }}>
              {(usageItems||[]).map((txt,i)=>(
                <ListItem key={i} sx={{ py:0.25 }}>
                  <ListItemIcon sx={{ minWidth:28 }}><CheckCircleOutlineIcon sx={{ fontSize:18, color:'gold.main' }} /></ListItemIcon>
                  <ListItemText primaryTypographyProps={{ variant:'body2' }} primary={txt} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
