import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              PathFusion Consulting
            </Typography>
            <Typography variant="body2" color="text.secondary">
              As you start to walk on the way, the way appears
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Link href="mailto:contact@pathfusion.com" color="inherit">
                contact@pathfusion.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LinkedInIcon sx={{ mr: 1 }} />
              <Link
                href="https://www.linkedin.com/company/pathfusion"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                Follow us on LinkedIn
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/about" color="inherit" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link href="/services" color="inherit" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link href="/contact" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} PathFusion Consulting. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 