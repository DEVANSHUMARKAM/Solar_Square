import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Link } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const newsData = [
  {
    image: require('../../assets/News1.png'),
    date: 'DEC 12, 2024',
    source: 'FORBES INDIA',
    title: 'How SolarSquare has a chance to become a home energy brand in India',
    link: 'https://www.forbesindia.com/article/news/how-solarsquare-has-a-chance-to-become-a-home-energy-brand-in-india/94835/1',
  },
  {
    image: require('../../assets/News2.png'),
    date: 'DEC 12, 2024',
    source: 'BUSINESS TODAY',
    title: 'SolarSquare raises $40 million in one of India\'s largest solar VC deals',
    link: 'https://www.businesstoday.in/latest/corporate/story/solarsquare-raises-40-million-in-one-of-indias-largest-solar-vc-deals-lightspeed-leads-the-round-457049-2024-12-12',
  },
  {
    image: require('../../assets/News3.png'),
    date: 'DEC 12, 2024',
    source: 'ECONOMIC TIMES',
    title: 'Cleantech startup SolarSquare raises $40 million in round led by Lightspeed',
    link: 'https://economictimes.indiatimes.com/tech/funding/cleantech-startup-solarsquare-raises-40-million-in-round-led-by-lightspeed/articleshow/116220048.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst',
  },
  {
    image: require('../../assets/News4.png'),
    date: 'NOV 02, 2022',
    source: 'TECHCRUNCH',
    title: 'Sacca’s Lowercarbon doubles down on SolarSquare bringing solar modules to Indian rooftops',
    link: 'https://techcrunch.com/2022/11/02/saccas-lowercarbon-doubles-down-on-solarsquare-bringing-solar-modules-to-indian-rooftops/',
  },
  {
    image: require('../../assets/News5.png'),
    date: 'OCT 29, 2022',
    source: 'ECONOMIC TIMES',
    title: 'Cleantech startup SolarSquare raises Rs 100 crore in Series A funding',
    link: 'https://economictimes.indiatimes.com/tech/funding/cleantech-startup-solarsquare-raises-rs-100-crore-in-series-a-funding/articleshow/95275634.cms?from=mdr',
  },
];

const NewsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ px: { xs: 2, md: 20 }, py: 8, backgroundColor: '#fafafa' }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, fontFamily: 'Poppins, sans-serif', mb: 4 }}
      >
        In the News
      </Typography>

      <Slider {...settings}>
        {newsData.map((item, index) => (
          <Box key={index} sx={{ px: 2 }}>
            <Box
              sx={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: 2,
                backgroundColor: '#fff',
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{ width: '100%', height: 260, objectFit: 'cover' }}
              />
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="caption"
                  sx={{ color: '#555', display: 'block', mb: 1 }}
                >
                  {item.date} — {item.source}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif',
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: '#3C00A0', fontWeight: 500, fontSize: 14 }}
                >
                  Read More
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NewsSection;
