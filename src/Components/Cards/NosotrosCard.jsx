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
    border: 0.25px solid #fff;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`;
const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;
const Role = styled.div`
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
    color: ${({ theme }) => theme.text_secondary + 95};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.white + 99};
    margin-bottom: 8px;
    text-align: justify;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;
const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;


`;
const Span = styled.div`
    display: -webkit-box;
    max-width: 100%;
`;

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;


const NosotrosCard = ({ nosotros }) => {
    return (
        <VerticalTimelineElement
            icon={
                <img
                    width="100%"
                    height="100%"
                    alt={nosotros?.role}
                    style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                    src={nosotros?.img}

                />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#000",
                color: "#fff",
                boxShadow: "rgba(200, 106, 18, 0.5) 0px 4px 18px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(229, 255, 127, 0.125)",
                borderRadius: "6px",
            }}

            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)",
            }}

            date={nosotros.role}

        >
            <Top>
                <Image src={nosotros.img} />
                <Body>
                    <Name>{nosotros.name}</Name>
                    <Role>{nosotros.role}</Role>
                    <Date>{nosotros.date}</Date>
                </Body>
            </Top>
            <Description>
                {nosotros?.desc && <Span>{nosotros.desc}</Span>}
                {nosotros?.skills && (
                    <>
                        <br />
                        <Skills>
                            <ItemWrapper>
                                {nosotros?.skills?.map((skill, index) => (
                                    <Skill>• {skill}</Skill>

                                ))}

                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>

        </VerticalTimelineElement >
    )
}

export default NosotrosCard