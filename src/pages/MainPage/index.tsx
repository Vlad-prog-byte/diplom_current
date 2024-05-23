import React, { useEffect, useState } from "react";
import { Heading, ConferenceDate  } from "@bauman-conference-library/mui-lib";
import { Widget } from "@bauman-conference-library/interface";
import "@pages/MainPage/style.css"
import axios from "axios";
import { format } from "path";

interface IMainState {
    about_text: string
    purpose_text: string
    topic_text: string
    participation_text: string
}

const MainPage = () => {
    const [main, setMain] = useState<IMainState | null>(null)

    const heading = {
        title: "Искусственный интеллект в автоматизированных системах управления и обработки данных",
        subtitle: "II Всероссийская научная конференция",
        part_href: "#",
    }

    
    const date = {
        start_date: new Date('2024-04-27'),
        end_date: new Date('2024-04-28'),
        format: "both",
        height: 1,

    }

    useEffect(() => {
        axios.get("/snippets/main_page").then((response) => {
            console.log("main_page", response.data)
                // setMain(response.data)
        })
    }, [])
    // const description = {
    //     about_text: "Кафедра ИУ5 «Системы обработки информации и управления» МГТУ им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект в автоматизированных системах управления и обработки данных» ИИАСУ’23.",
    //     purpose_text: "Представить, рассмотреть и обсудить современное состояние работ по интеграции искусственного интеллекта в автоматизиро-ванные системы управления и обработки данных.",
    //     topic_text: "Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизи-рованных систем управления и обработки данных.",
    //     participation_text: "Участие бесплатное. Необходима регистрация. Статьи принимаются до 3-го апреля 2023 г.",
    //     ...new Widget()
    // }
    // export interface ConferenceDescription extends Widget {
    //     about_text: string | ReactElement;
    //     purpose_text: string | ReactElement;
    //     topic_text: string | ReactElement;
    //     participation_text: string | ReactElement;
    // }

    return (
        <div className="container">
            <Heading {...heading}/>
            <ConferenceDate start_date={new Date('2024-04-27')} end_date={new Date('2024-04-28')} format={"both"} height={1}/>
            {/* <div className="grid">
                <div className="block">
                    <h2 className="block__title"> О конференции </h2>
                    <div className="block__description">
                    Кафедра ИУ5 «Системы обработки информации и управления» МГТУ 
                    им. Н.Э. Баумана планирует провести конференцию «Искусственный интеллект 
                    в автоматизированных системах управления 
                    и обработки данных» ИИАСУ’23.
                    </div>
                </div>
                <div className="block">
                    <h2 className="block__title"> Цель </h2>
                    <div className="block__description">
                        Представить, рассмотреть и обсудить современное состояние работ по интеграции искусственного интеллекта в автоматизиро-ванные системы управления и обработки данных.
                    </div>
                </div>
                <div className="block">
                    <h2 className="block__title"> Тематика </h2>
                    <div className="block__description">
                        Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизи-рованных систем управления и обработки данных.
                    </div>
                </div>
                <div className="block">
                    <h2 className="block__title"> Участие </h2>
                    <div className="block__description">
                        Тематика конференции включает различные направления в рамках задач проектирования, разработки, внедрения, интеграции и эксплуатации автоматизи-рованных систем управления и обработки данных.
                    </div>
                </div>
            </div> */}
            {/* <.ConferenceDescription {}/> */}
        </div>  
    );
}

export default MainPage;