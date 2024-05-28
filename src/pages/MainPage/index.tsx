import React, { ReactElement, useEffect, useState } from "react";
import { Heading, ConferenceDate, ConferenceLocation, Description } from "@bauman-conference-library/mui-lib";
import "@pages/MainPage/style.css"
import axios from "axios";
import { axiosInstance } from "@shared/axios";


interface Description {
    title: string | ReactElement;
    subtitle: string
}

interface IMainState {
    ConferenceDate: {
        startDate: string,
        endDate: string,
        format: any,
        height: number
    },
    ConferenceLocation: {
        address: string,
        yaLink: string
    },
    Heading: {
        title: string,
        subtitle: string,
        part_href: string
    },
    Descriptions: Description[]
}

const MainPage = () => {
    const [main, setMain] = useState<IMainState | null>(null)
    console.log(main)
    useEffect(() => {
        const fetchMainPage = async () => {
            const response = await axios.get("http://127.0.0.1:8000/api/snippets/main_page").then(response => response)
            setMain(response.data)
        }
        fetchMainPage()
    }, [])

    const end_date = main ?  main.ConferenceDate.endDate : null
    console.log("end_date=", end_date)
    return (
        <div>
        {
            (main === null) ? <p>Загрузка</p> :
            <div className="container">
                <Heading title={main.Heading.title} subtitle={main.Heading.subtitle} part_href={"http://science.iu5.bmstu.ru/sso/authorize?redirect_uri=http://127.0.0.1:8000/api/oauth/callback"}/>
                <ConferenceDate start_date={new Date(main.ConferenceDate.startDate)} end_date={ new Date(main.ConferenceDate.endDate)} format={main.ConferenceDate.format} height={main.ConferenceDate.height}/>
            
                <div className="grid">
                    {
                        main.Descriptions.map(Description_ => {
                            return <Description title={Description_.title} variant="h1" shift={31}>
                                    <>{Description_.subtitle}</>
                            </Description>
                        })
                    }
                </div>
                <ConferenceLocation address={main.ConferenceLocation.address} ya_link={main.ConferenceLocation.yaLink}/>
            </div>  
        }
        </div>
    );
}

export default MainPage;