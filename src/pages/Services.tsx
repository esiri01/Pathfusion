import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Data Strategy & Engineering',
      description:
        'Comprehensive data solutions to drive your business forward',
      details: [
        'Data governance framework development',
        'ETL pipeline design and implementation',
        'Data architecture and infrastructure planning',
        'Data quality and validation processes',
        'Data integration strategy',
      ],
    },
    {
      title: 'Advanced Analytics & AI/ML',
      description:
        'Leverage cutting-edge analytics and machine learning for business insights',
      details: [
        'Predictive modeling and forecasting',
        'Anomaly detection systems',
        'Recommendation engines',
        'Natural Language Processing (NLP)',
        'Computer vision applications',
      ],
    },
    {
      title: 'Business Intelligence & Visualization',
      description:
        'Transform data into actionable insights through powerful visualizations',
      details: [
        'Interactive dashboard development',
        'KPI tracking and monitoring',
        'Data storytelling and reporting',
        'Real-time analytics solutions',
        'Custom visualization development',
      ],
    },
    {
      title: 'Process Optimization & Operations Consulting',
      description:
        'Streamline operations and enhance efficiency through data-driven insights',
      details: [
        'Lean/Six-Sigma process analysis',
        'Supply chain optimization',
        'Operational efficiency improvements',
        'Workflow automation',
        'Performance metrics development',
      ],
    },
    {
      title: 'Strategic Management & Digital Transformation',
      description:
        'Guide your organization through digital transformation and strategic growth',
      details: [
        'Digital roadmap development',
        'Organizational strategy planning',
        'Agile transformation',
        'Change management',
        'Program governance',
      ],
    },
    {
      title: 'Product & Marketing Analytics',
      description:
        'Data-driven insights for product development and marketing success',
      details: [
        'Customer segmentation analysis',
        'Funnel optimization',
        'A/B testing framework',
        'User behavior analytics',
        'Marketing ROI analysis',
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
          Our Services
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Comprehensive solutions tailored to your business needs
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    paragraph
                  >
                    {service.description}
                  </Typography>
                  <List>
                    {service.details.map((detail, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={detail} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contact us to discuss how we can help transform your business with our
          comprehensive consulting services.
        </Typography>
      </Box>
    </Container>
  );
};

export default Services; 