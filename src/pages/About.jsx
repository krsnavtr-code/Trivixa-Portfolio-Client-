import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Express", level: 80 },
    { name: "Material-UI", level: 85 },
    { name: "Git", level: 80 },
    { name: "Docker", level: 70 },
  ];

  const experiences = [
    {
      role: t("about.exp1.role", "Senior Frontend Developer"),
      company: "Tech Solutions Inc.",
      period: t("about.exp1.period", "2020 - Present"),
      description: t(
        "about.exp1.description",
        "Leading frontend development team and implementing new features using React and TypeScript."
      ),
    },
    {
      role: t("about.exp2.role", "Full Stack Developer"),
      company: "Web Innovations",
      period: t("about.exp2.period", "2018 - 2020"),
      description: t(
        "about.exp2.description",
        "Developed and maintained web applications using MERN stack."
      ),
    },
    {
      role: t("about.exp3.role", "Junior Developer"),
      company: "Digital Creations",
      period: t("about.exp3.period", "2016 - 2018"),
      description: t(
        "about.exp3.description",
        "Worked on various client projects and learned modern web technologies."
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Avatar
          alt="Profile Picture"
          src="/profile.jpg"
          sx={{
            width: 200,
            height: 200,
            margin: "0 auto 2rem",
            border: "4px solid",
            borderColor: "primary.bg",
          }}
        />
        <Typography variant="h3" component="h1" gutterBottom>
          {t("about.title", "About Me")}
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          {t("about.subtitle", "Full Stack Developer & Tech Enthusiast")}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="800px"
          mx="auto"
        >
          {t(
            "about.description",
            "I am a passionate Full Stack Developer with 5+ years of experience in building web applications. I specialize in JavaScript, React, Node.js, and MongoDB. I love turning ideas into reality through clean and efficient code."
          )}
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Skills Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t("about.skills", "My Skills")}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="subtitle1">{skill.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: 8,
                    bgcolor: "grey.200",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: `${skill.level}%`,
                      height: "100%",
                      bgcolor: "primary.bg",
                      borderRadius: 4,
                      transition: "width 1s ease-in-out",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Experience Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t("about.experience", "Work Experience")}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: "100%" }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {exp.role}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {exp.period}
                </Typography>
                <Typography variant="body1" mt={2}>
                  {exp.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      {/* Education Section */}
      <Box>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          {t("about.education", "Education")}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {t(
                  "about.degree",
                  "Bachelor of Technology in Computer Science"
                )}
              </Typography>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {t("about.university", "Tech University")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2012 - 2016
              </Typography>
              <Typography variant="body1" mt={2}>
                {t(
                  "about.educationDesc",
                  "Graduated with honors in Computer Science and Engineering."
                )}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
