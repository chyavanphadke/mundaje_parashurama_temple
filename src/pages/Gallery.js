import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// ---- Image imports ----
// Event 1
import ev1img1 from '../assets/Gallery/event1/image1.jpg';
import ev1img2 from '../assets/Gallery/event1/image2.jpg';
import ev1img3 from '../assets/Gallery/event1/image3.jpg';
import ev1img4 from '../assets/Gallery/event1/image4.jpg';

// Event 2
import ev2img1 from '../assets/Gallery/event2/image1.jpg';
import ev2img2 from '../assets/Gallery/event2/image2.jpg';
import ev2img3 from '../assets/Gallery/event2/image3.jpg';
import ev2img4 from '../assets/Gallery/event2/image4.jpg';

// Event 3
import ev3img1 from '../assets/Gallery/event3/image1.jpg';
import ev3img2 from '../assets/Gallery/event3/image2.jpg';
import ev3img3 from '../assets/Gallery/event3/image3.jpg';
import ev3img4 from '../assets/Gallery/event3/image4.jpg';

// Event 4
import ev4img1 from '../assets/Gallery/event4/image1.jpg';
import ev4img2 from '../assets/Gallery/event4/image2.jpg';
import ev4img3 from '../assets/Gallery/event4/image3.jpg';
import ev4img4 from '../assets/Gallery/event4/image4.jpg';

// ---- Static gallery events list ----
// Add NEW events at the TOP of this array so they show first on the site.
const galleryEvents = [
  {
    date: '2024-11-01',
    titleEn: 'Karthika Deepotsava – Lamp Offering',
    titleKn: 'ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವ – ದೀಪಾರ್ಚನೆ',
    descriptionEn:
      'An evening of deepa seva, pradakshina and collective prayers offered to Sri Parashurama and the guardian deities. Devotees lit rows of lamps around the sanctum and mantapa, praying for light, inner clarity and peace.',
    descriptionKn:
      'ಶ್ರೀ ಪರಶುರಾಮ ದೇವರು ಮತ್ತು ಪರಿವಾರ ದೈವಗಳಿಗೆ ಸಮರ್ಪಿಸಿದ ದೀಪಸೇವೆಯ ಕಾರ್ತಿಕ ದೀಪೋತ್ಸವ. ಗರ್ಭಗುಡಿ ಮತ್ತು ಮಂಟಪ ಸುತ್ತಲೂ ಭಕ್ತರು ದೀಪ ಹಚ್ಚಿ, ಪ್ರಭೆಯ ಮೂಲಕ ಮನಶಾಂತಿ, ಬೆಳಕು ಮತ್ತು ಸೌಭಾಗ್ಯದ ಆಶೀರ್ವಾದವನ್ನು ಪ್ರಾರ್ಥಿಸಿದರು.',
    images: [ev4img1, ev4img2, ev4img3, ev4img4],
  },
  {
    date: '2024-05-10',
    titleEn: 'Sri Parashurama Jayanti – Alankara & Homa',
    titleKn: 'ಶ್ರೀ ಪರಶುರಾಮ ಜಯಂತಿ – ಅಲಂಕಾರ ಮತ್ತು ಹೋಮ',
    descriptionEn:
      'On the sacred occasion of Sri Parashurama Jayanti, the deity was adorned with special alankara followed by homa, stotra parayana and mahapuja. Devotees offered prayers for courage, protection and dharmic living.',
    descriptionKn:
      'ಶ್ರೀ ಪರಶುರಾಮ ಜಯಂತಿ ಪ್ರಯುಕ್ತ ವಿಶೇಷ ಅಲಂಕಾರ, ಹೋಮ, ಸ್ತೋತ್ರ ಪಾರಾಯಣ ಹಾಗೂ ಮಹಾಪೂಜೆ ನೆರವೇರಿಸಲಾಯಿತು. ಧರ್ಮಪರ ಜೀವನ, ಧೈರ್ಯ ಮತ್ತು ರಕ್ಷಣೆಯ ಆಶೀರ್ವಾದಕ್ಕಾಗಿ ಭಕ್ತರು ಭಕ್ತಿ ಪೂರ್ವಕವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಿದರು.',
    images: [ev3img1, ev3img2, ev3img3, ev3img4],
  },
  {
    date: '2023-10-20',
    titleEn: 'Navaratri Celebrations – Devi Alankara',
    titleKn: 'ನವರಾತ್ರಿ ಉತ್ಸವ – ದೇವಿ ಅಲಂಕಾರ',
    descriptionEn:
      'During Navaratri, the temple witnessed daily alankara, deeparadhane and bhajans in praise of the Divine Mother. Different forms of Devi were invoked, seeking strength, protection and grace for all families.',
    descriptionKn:
      'ನವರಾತ್ರಿ ಅವಧಿಯಲ್ಲಿ ಪ್ರತಿದಿನ ದೇವಾಲಯದಲ್ಲಿ ವೈವಿಧ್ಯಮಯ ದೇವಿ ಅಲಂಕಾರ, ದೀಪಾರಾಧನೆ ಮತ್ತು ಭಜನೆಗಳು ನಡೆಯಿತು. ವಿಭಿನ್ನ ರೂಪಗಳಲ್ಲಿ ದೇವಿಯ ಆರಾಧನೆ ಮಾಡಿ, ಮನೆಮಂದಿಗೆ ಶಕ್ತಿ, ರಕ್ಷಣೆ ಮತ್ತು ಕೃಪೆ ದೊರೆಯಲಿ ಎಂದು ಪ್ರಾರ್ಥಿಸಲಾಯಿತು.',
    images: [ev2img1, ev2img2, ev2img3, ev2img4],
  },
  {
    date: '2023-04-02',
    titleEn: 'Satyanarayana Puja & Annaprasada',
    titleKn: 'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ಮತ್ತು ಅನ್ನಪ್ರಸಾದ',
    descriptionEn:
      'A special Satyanarayana Puja was performed with devotees participating in sankalpa, parayana and aarati. The program concluded with annaprasada served to all, symbolising community, sharing and gratitude.',
    descriptionKn:
      'ಸತ್ಯನಾರಾಯಣ ಪೂಜೆ ಸಂದರ್ಭದಲ್ಲಿ ಭಕ್ತರು ಸಂಕಲ್ಪ, ಪಾರಾಯಣ ಮತ್ತು ಆರತಿಯಲ್ಲಿ ತೊಡಗಿಕೊಂಡರು. ನಂತರ ಎಲ್ಲರಿಗೂ ಅನ್ನಪ್ರಸಾದ ವಿತರಣೆ ಮಾಡಲಾಗಿದ್ದು, ಸಮೂಹ ಭಕ್ತಿ, ಹಂಚಿಕೊಳ್ಳುವಿಕೆ ಮತ್ತು ಕೃತಜ್ಞತೆಯ ಭಾವನೆಗೂ ಇದು ಸಂಕೇತವಾಯಿತು.',
    images: [ev1img1, ev1img2, ev1img3, ev1img4],
  },
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language && i18n.language.startsWith('kn') ? 'kn' : 'en';

  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedCaption, setSelectedCaption] = React.useState('');

  const handleImageClick = (img, titleForCaption) => {
    setSelectedImage(img);
    setSelectedCaption(titleForCaption);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
    setSelectedCaption('');
  };

  return (
    <>
      <Section title={t('gallery.title')} subtitle={t('gallery.subtitle')}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {galleryEvents.map((event, idx) => {
            const title =
              lang === 'kn' ? event.titleKn : event.titleEn;
            const description =
              lang === 'kn' ? event.descriptionKn : event.descriptionEn;

            return (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: 4,
                  border: '1px solid #E6D8B6',
                  bgcolor: '#FFFBF5',
                }}
              >
                {/* Header: date, title, description */}
                <Typography
                  variant="overline"
                  color="text.secondary"
                  sx={{ letterSpacing: 0.8 }}
                >
                  {event.date}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 800, mt: 0.5 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1.5 }}>
                  {description}
                </Typography>

                {/* Image grid */}
                <Grid container spacing={1.5} sx={{ mt: 2 }}>
                  {event.images.map((img, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <Box
                        sx={{
                          position: 'relative',
                          borderRadius: 2,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          '&:hover img': { transform: 'scale(1.05)' },
                          '&:hover::after': {
                            opacity: 1,
                          },
                          '::after': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
                            opacity: 0,
                            transition: 'opacity 0.2s ease',
                          },
                        }}
                        onClick={() => handleImageClick(img, title)}
                      >
                        <Box
                          component="img"
                          src={img}
                          alt={title}
                          sx={{
                            width: '100%',
                            height: 140,
                            objectFit: 'cover',
                            transition: 'transform 0.25s ease',
                            display: 'block',
                          }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            );
          })}
        </Box>
      </Section>

      {/* Fullscreen image dialog */}
      <Dialog open={open} onClose={handleClose} fullScreen>
        <Box
          sx={{
            position: 'fixed',
            top: 8,
            right: 8,
            zIndex: 10,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              bgcolor: 'rgba(0,0,0,0.6)',
              color: '#fff',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogContent
          sx={{
            p: 0,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt={selectedCaption}
              sx={{
                maxWidth: '100%',
                maxHeight: '100vh',
                objectFit: 'contain',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
