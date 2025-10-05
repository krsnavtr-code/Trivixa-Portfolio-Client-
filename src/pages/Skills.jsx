import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  LinearProgress,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("skills.frontend", "Frontend Development"),
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 88 },
        { name: "Redux", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Material-UI", level: 90 },
        { name: "Styled Components", level: 85 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      title: t("skills.backend", "Backend Development"),
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 83 },
        { name: "RESTful APIs", level: 88 },
        { name: "GraphQL", level: 75 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 78 },
        { name: "Firebase", level: 80 },
        { name: "Authentication", level: 85 },
      ],
    },
    {
      title: t("skills.tools", "Tools & Technologies"),
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "Webpack", level: 80 },
        { name: "Jest & Testing Library", level: 82 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Agile/Scrum", level: 88 },
      ],
    },
    {
      title: t("skills.soft", "Soft Skills"),
      skills: [
        { name: t("skills.communication", "Communication"), level: 90 },
        { name: t("skills.teamwork", "Teamwork"), level: 92 },
        { name: t("skills.problemSolving", "Problem Solving"), level: 88 },
        { name: t("skills.timeManagement", "Time Management"), level: 85 },
        { name: t("skills.adaptability", "Adaptability"), level: 90 },
        { name: t("skills.leadership", "Leadership"), level: 85 },
        { name: t("skills.creativity", "Creativity"), level: 88 },
        { name: t("skills.criticalThinking", "Critical Thinking"), level: 87 },
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t("skills.title", "My Skills & Expertise")}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth="800px"
          mx="auto"
        >
          {t(
            "skills.subtitle",
            "A comprehensive overview of my technical and professional skills"
          )}
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {skillCategories.map((category, catIndex) => (
          <Grid item xs={12} key={catIndex}>
            <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ mb: 3, color: "primary.bg" }}
              >
                {category.title}
              </Typography>
              <Grid container spacing={3}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={skillIndex}>
                    <Box sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant="subtitle2">
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          backgroundColor: "grey.200",
                          "& .MuiLinearProgress-bar": {
                            borderRadius: 5,
                            backgroundColor: "primary.bg",
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 8 }} />

      <Box sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h5" component="h3" gutterBottom>
          {t("skills.additional", "Additional Skills & Interests")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
            mt: 3,
          }}
        >
          {[
            "Responsive Web Design",
            "Progressive Web Apps",
            "Web Performance",
            "Cross-browser Compatibility",
            "Code Review",
            "Mentoring",
            "Technical Writing",
            "Public Speaking",
          ].map((skill, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                px: 2,
                py: 1,
                bgcolor: "action.hover",
                borderRadius: 5,
                fontSize: "0.875rem",
              }}
            >
              {skill}
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Skills;
