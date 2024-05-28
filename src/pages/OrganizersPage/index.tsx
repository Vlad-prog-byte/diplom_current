import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Description, Title, UserCard } from "@bauman-conference-library/mui-lib";
interface Imember_chairman {
    initials: string,
    info: string,
    post: string,
    image: string,
}

interface Imember {
    fio: string,
    info: string
}

interface ImemberSection {
    titleMembers: string,
    members: Imember[]
}

interface IOrganizersState {
    comite: string,
    chairman: Imember_chairman
    membersCommittee: ImemberSection
}

const OrganizersPage = () => {
    const [organizers, setOrganizers] = useState<IOrganizersState[] | null>(null)
    useEffect(() => {
        const fetchOrganizersPage = async () => {
            const response = await axios.get("http://127.0.0.1:8000/api/snippets/organizers_page").then(response => response)
            setOrganizers(response.data)
        }
        fetchOrganizersPage()
    }, [])


    
    return (
        <div>
            {
                organizers === null ?  <p>Загрузка</p> :
                <div className="container" style={{width: "1200px"}}>
                    {
                        organizers.map(organizer => {
                            return (<Box>
                                <Title brushCount={2} children={organizer.comite}/>
                                <div style={{display: "flex", paddingTop: "50px", gap: "50px"}}>
                                <UserCard 
                                    post={organizer.chairman.post}
                                    initials={organizer.chairman.initials}
                                    info={organizer.chairman.info}
                                    image={organizer.chairman.image}
                                />
                                <Box>
                                    <Typography fontWeight="500" variant="h1">{organizer.membersCommittee.titleMembers}</Typography>
                                    <div className="grid">
                                        {
                                            organizer.membersCommittee.members.map(member => {
                                                return <div style={{paddingTop: "20px"}}>
                                                    <Description title={member.fio} variant="h3" shift={0}>
                                                        <>{member.info}</>
                                                    </Description>
                                                </div>    
                                            })
                                        }
                                    </div>
                                </Box>
                                </div>
                            </Box>)
                        })
                    }
                </div>
            }
        </div>
    );
}

export default OrganizersPage;