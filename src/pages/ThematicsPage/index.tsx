import { Description, Title, TopicsTable} from "@bauman-conference-library/mui-lib";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IThematicsState {
    description: {
        title: string,
        info: string
    },
    list: string[]
}

const ThematicsPage = () => {
    const [thematics, setThematics] = useState<IThematicsState | null>(null)
    useEffect(() => {
        const fetchThematicsPage = async () => {
            const response = await axios.get("http://127.0.0.1:8000/api/snippets/thematics_page").then(response => response)
            setThematics(response.data)
        }
        fetchThematicsPage()
    }, [])
    return(
        <>
            {
                thematics == null ?  <p>Загрузка</p> : 
                <div style={{width: 'inherit'}}>
                    <div style={{display: "flex", justifyContent: "space-between", gap: "100px"}}>
                        <div style={{width: '370px'}}>
                        <Title brushCount={1} children={thematics.description.title}/>
                        <Description title='' variant="h3" shift={0}>{thematics.description.info}</Description>
                        </div>
                        <div>
                            <TopicsTable topics={thematics.list}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default ThematicsPage;