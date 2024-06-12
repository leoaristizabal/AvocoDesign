import React from 'react'
import styled from 'styled-components'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'


const Top = styled.div`
    width: 100%;
    display: flex;
    max-width: 100%;
    gap: 12px;
`;

const Image = styled.img`
    height: 50px;
    border-radius: 10px;
    margin-top: 4px;

    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`;
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Cliente = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
const Tipo = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;
const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 8px;
    text-align: justify;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const User = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`;


const TestimoniosCard = ({ testimonio }) => {
    return (
        <VerticalTimelineElement
            icon={
                <img
                    width="100%"
                    height="100%"
                    alt={testimonio?.cliente}
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                    src={testimonio?.img}

                />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92,230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}

            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)",
            }}

            date={testimonio.tipo}

        >
            <Top>
                <Image src={testimonio.img} />
                <Body>
                    <Cliente>{testimonio?.cliente}</Cliente>
                    <Tipo>{testimonio?.tipo}</Tipo>
                    <Date>{testimonio?.date}</Date>
                </Body>
            </Top>
            <User>
                {testimonio.user}
            </User>
            <Description>
                {testimonio?.desc && <Span>{testimonio.desc}</Span>}
                
            </Description>

        </VerticalTimelineElement >
    )
}

export default TestimoniosCard