import React from 'react';
import Section from '../components/Section';
import UpiBlock from '../components/UpiBlock';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTranslation } from 'react-i18next';

export default function SevaDonations() {
  const { t } = useTranslation();

  const rawServices = t('seva.different_services', { returnObjects: true }) || [];
  const services = Array.isArray(rawServices) ? [...rawServices] : [];

  // Sort by amount
  services.sort((a, b) => (a.amount || 0) - (b.amount || 0));

  // Split into two halves
  const mid = Math.ceil(services.length / 2);
  const leftTable = services.slice(0, mid);
  const rightTable = services.slice(mid);

  // Reusable Table Component
  const SevaTable = ({ rows }) => (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        border: '1px solid #E6D8B6',
        bgcolor: '#FFFBF5',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <TableContainer sx={{ width: '100%' }}>
        <Table size="small" sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  borderBottom: '1px solid #E6D8B6',
                  bgcolor: 'rgba(255, 244, 214, 0.6)',
                }}
              >
                Seva / Service
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: 700,
                  fontSize: 14,
                  borderBottom: '1px solid #E6D8B6',
                  bgcolor: 'rgba(255, 244, 214, 0.6)',
                  whiteSpace: 'nowrap',
                }}
              >
                Amount (₹)
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((svc, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:nth-of-type(odd)': { bgcolor: 'rgba(255,255,255,0.9)' },
                }}
              >
                <TableCell sx={{ fontSize: 14, py: 0.75 }}>
                  {svc.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: 14, fontWeight: 600, py: 0.75 }}
                >
                  ₹ {svc.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  return (
    <>
      {/* Seva Tables Section */}
      <Section title={t('seva.title')} subtitle={t('seva.subtitle')}>
        <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
          <Box
            sx={{
              textAlign: 'center',
              mb: 3,
              fontWeight: 700,
              fontSize: 18,
              color: '#5a4632',
            }}
          >
            Seva & Service List (₹ INR)
          </Box>

          {/* Two 50%-width tables */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '45%' },
              }}
            >
              <SevaTable rows={leftTable} />
            </Box>

            <Box
              sx={{
                width: { xs: '100%', md: '45%' },
              }}
            >
              <SevaTable rows={rightTable} />
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Donation Section (UPI Block) */}
      <Section title={t('seva.donateTitle')}>
        <UpiBlock
          title={t('seva.upiTitle')}
          note={t('seva.upiNote')}
          caption={t('seva.qrCaption')}
          whyTitle={t('seva.whyTitle')}
          whyItems={t('seva.why', { returnObjects: true }) || []}
          usageTitle={t('seva.usageTitle')}
          usageItems={t('seva.usage', { returnObjects: true }) || []}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          {t('seva.futureOnline')}
        </Typography>
      </Section>
    </>
  );
}
