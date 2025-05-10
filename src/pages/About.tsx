import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';

const About: React.FC = () => {
  const founders = [
    {
      name: 'Esiri Onokurhefe',
      title: 'Co-Founder',
      credentials: 'P.Eng., M.Eng., PMP',
      education: [
        'Master\'s in Analytics (Georgia Tech - In-View)',
        'Master\'s in Aerospace Engineering (Concordia)',
        'Bachelor\'s in Mechanical Engineering (Covenant University)',
      ],
      experience: [
        'Current Requirements Management Specialist at SkyAlyne',
        'Former Data Scientist at De Havilland Canada',
        'Former Management Consultant at Stymiest',
      ],
      expertise: [
        'Process optimization',
        'Aerospace engineering',
        'Systems engineering',
        'Advanced analytics',
      ],
    },
    {
      name: 'Eromonsele Oboh',
      title: 'Co-Founder',
      credentials: 'M.Sc.',
      education: [
        'Master\'s in Quality Systems Engineering (Concordia)',
      ],
      experience: [
        'Roles at Meta',
        'Roles at WatchMojo',
      ],
      expertise: [
        'Product analytics',
        'A/B testing',
        'ML-driven user insights',
        'Turning complex datasets into actionable business recommendations',
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          About PathFusion
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Blending technical expertise with strategic vision
        </Typography>
      </motion.div>

      <Grid container spacing={6}>
        {founders.map((founder, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'primary.main',
                        mr: 2,
                      }}
                    >
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" component="h2">
                        {founder.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {founder.title} • {founder.credentials}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Education
                  </Typography>
                  <ul>
                    {founder.education.map((edu, i) => (
                      <li key={i}>
                        <Typography variant="body2">{edu}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Experience
                  </Typography>
                  <ul>
                    {founder.experience.map((exp, i) => (
                      <li key={i}>
                        <Typography variant="body2">{exp}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    Expertise
                  </Typography>
                  <ul>
                    {founder.expertise.map((exp, i) => (
                      <li key={i}>
                        <Typography variant="body2">{exp}</Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          PathFusion Consulting guides organizations step-by-step down the optimal
          path—uncovering insights and solutions as they progress. We combine deep
          technical expertise in data science and analytics with strategic
          management and operations consulting to deliver comprehensive solutions
          that drive real business value.
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 