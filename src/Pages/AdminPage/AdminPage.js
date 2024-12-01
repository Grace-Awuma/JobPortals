import React, { useState } from 'react'
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { Add as AddIcon, Work as WorkIcon, Image as ImageIcon, Description as DescriptionIcon } from '@mui/icons-material'

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState('createJob')
  const [jobs, setJobs] = useState([])
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    description: '',
    applyLink: '',
  })
  const [companyImage, setCompanyImage] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewJob(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCompanyImage(e.target.files[0])
    }
  }

  const handleCreateJob = () => {
    const job = {
      ...newJob,
      id: Date.now(),
      lastUpdated: new Date().toISOString(),
    }
    setJobs(prev => [...prev, job])
    setNewJob({ title: '', company: '', description: '', applyLink: '' })
    setCompanyImage(null)
  }

  const drawerWidth = 240

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Create Job', 'Manage Jobs'].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => setSelectedTab(text.toLowerCase().replace(' ', ''))}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <AddIcon /> : <WorkIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {selectedTab === 'createJob' && (
          <Container>
            <Typography variant="h4" gutterBottom>
              Create a New Job
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="title"
                  value={newJob.title}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Company"
                  name="company"
                  value={newJob.company}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name="description"
                  multiline
                  rows={4}
                  value={newJob.description}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="company-logo-upload"
                  type="file"
                  onChange={handleImageUpload}
                />
                <label htmlFor="company-logo-upload">
                  <Button variant="contained" component="span" startIcon={<ImageIcon />}>
                    Upload Company Logo
                  </Button>
                </label>
                {companyImage && <Typography variant="body2">{companyImage.name}</Typography>}
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" onClick={handleCreateJob} startIcon={<AddIcon />}>
                  Create Job
                </Button>
              </Grid>
            </Grid>
          </Container>
        )}
        {selectedTab === 'manageJobs' && (
          <Container>
            <Typography variant="h4" gutterBottom>
              Manage Jobs
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Last Updated</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell>{job.title}</TableCell>
                      <TableCell>{job.company}</TableCell>
                      <TableCell>{new Date(job.lastUpdated).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Button size="small" startIcon={<DescriptionIcon />}>
                          View
                        </Button>
                        <Button size="small" color="secondary">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        )}
      </Box>
    </Box>
  )
}