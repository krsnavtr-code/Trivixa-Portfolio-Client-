import { useEffect, useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Box, 
  Button,
  CircularProgress,
  Paper
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../context/AppContext';

const Projects = () => {
  const { t } = useTranslation();
  const { projects, featuredProjects, projectsLoading } = useAppContext();
  const [showFeatured, setShowFeatured] = useState(true);

  if (projectsLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  const displayProjects = showFeatured ? featuredProjects : projects;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        {t('projects.title', 'My Projects')}
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, gap: 2 }}>
        <Button
          variant={showFeatured ? 'contained' : 'outlined'}
          onClick={() => setShowFeatured(true)}
        >
          {t('projects.featured', 'Featured')}
        </Button>
        <Button
          variant={!showFeatured ? 'contained' : 'outlined'}
          onClick={() => setShowFeatured(false)}
        >
          {t('projects.all', 'All Projects')}
        </Button>
      </Box>

      {displayProjects.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary">
            {t('projects.noProjects', 'No projects found.')}
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={4}>
          {displayProjects.map((project) => (
            <Grid item key={project._id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.imageUrl || 'https://via.placeholder.com/400x200'}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography paragraph sx={{ flexGrow: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies && project.technologies.map((tech, index) => (
                      <Chip 
                        key={index} 
                        label={tech} 
                        size="small" 
                        sx={{ mr: 1, mb: 1 }} 
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 'auto' }}>
                    <Button 
                      size="small" 
                      color="primary"
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('projects.viewProject', 'View Project')}
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="small" 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Projects;