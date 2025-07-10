import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/FAQSection.css';

const faqItems = [
    {
        id: 'panel1',
        question: 'How To Purchase The Tickets For Groups?',
        answer:
        'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum.',
    },
    {
        id: 'panel2',
        question: 'What Equipment Do I Need For Golfing?',
        answer:
        'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum.',
    },
    {
        id: 'panel3',
        question: 'Does Practicing Golf At Home Actually Work?',
        answer:
        'Sodales posuere facilisi metus elementum ipsum egestas amet amet mattis commodo Nunc tempor amet massa diam mauris. Risus sodales interdum.',
    },
];

export default function FAQSection() {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) =>
        (_event: React.SyntheticEvent, _isExpanded: boolean) => {
            setExpanded(panel);
        };

    return (
        <Box className="faq-section">
            <Box className="faq-container">
                {/* LEFT SIDE */}
                <Box className="faq-left">
                    <div className="faq-subtitle">
                        FAQ’S •
                    </div>
                    <div className="faq-title">
                        Frequently Asked Questions
                    </div>
                    <div className="faq-description">
                        Lorem ipsum dolor sit amet consectetur. Nam quis bibendum lacinia eu
                        id in. Quisque porttitor tortor blandit nunc.
                    </div>

                    <Stack spacing={2}>
                        {faqItems.map((item) => (
                            <Accordion
                                key={item.id}
                                expanded={expanded === item.id}
                                onChange={handleChange(item.id)}
                                className={`faq-accordion`}
                            >
                                <AccordionSummary 
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <Typography className="faq-question">{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="faq-answer">{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>
                </Box>

                {/* RIGHT SIDE */}
                <Box className="faq-right">
                    <div className='about-image-wrapper'>
                        <Box
                            component="img"
                            src="/assets/images/faq-1.jpg"
                            alt="Main"
                            className="faq-main-image"
                        />
                    </div>
                    <Box className="faq-inset-wrapper">
                        <Box className="faq-inset-text">
                            <Box
                                component="img"
                                src="/assets/images/award-1.png"
                                alt="Inset 1"
                                className="faq-inset-image1"
                            />
                            <Typography className="exclusive-title">
                                The Exclusive Offers
                            </Typography>
                        </Box>
                    </Box> 
                </Box>
            </Box>
        </Box>
    );
}
