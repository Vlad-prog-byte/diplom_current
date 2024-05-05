import React from "react";
import { components } from "@bauman-conference-library/mui-lib";
import { Widget } from "@bauman-conference-library/interface";

const MainPage = () => {
    const heading = {
        title: "Искусственный интеллект в автоматизированных системах управления и обработки данных",
        subtitle: "II Всероссийская научная конференция",
        part_href: "#",
        ...new Widget()
    }

    const date = {
        start_date: new Date('2024-04-27'),
        end_date: new Date('2024-04-28'),
        format: 2,
        height: 1,
        ... new Widget()
    }
    return (
        <div>
            <components.Heading {...heading}/>
            <components.ConferenceDate {...date}/>
        </div>  
    );
}

export default MainPage;